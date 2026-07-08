import React, { useState, useMemo } from 'react';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { ROADMAP_DATA } from './data';
import './styles/global.css';
import GridScan from './GridScan';

const IconPc = () => (
  <img
    src="/pc-logo.png"
    alt="Pioneers Club Logo"
    className="search-logo"
    style={{ borderRadius: '100%', objectFit: 'contain' }}
  />
);

const SearchBar = ({ query, setQuery }) => (
  <div className="search-container">
    <IconPc />
    <input
      type="text"
      className="search-input"
      placeholder="Search domains or career paths..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  </div>
);

// Generates a dynamic HSL gradient background for a given subdomain string ID
function getBackgroundForSub(subId) {
  if (!subId) return 'transparent';
  let hash = 0;
  for (let i = 0; i < subId.length; i++) hash = subId.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash % 360);
  return `linear-gradient(135deg, hsla(${hue}, 80%, 15%, 0.8) 0%, hsla(${hue + 40}, 90%, 10%, 0.95) 100%)`;
}

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // React Router hooks replacing local state
  const location = useLocation();
  const navigate = useNavigate();

  // Parse state from URL params
  const pathParts = location.pathname.split('/').filter(Boolean);
  const activeDomainId = pathParts.length > 0 ? pathParts[0] : null;
  const activeSubId = pathParts.length > 1 ? pathParts[1] : null;

  const domains = useMemo(() => Object.values(ROADMAP_DATA), []);

  // Real-time search filter for orbital dimming
  const matchingDomainIds = useMemo(() => {
    if (!searchQuery) return new Set(domains.map(d => d.id));
    const q = searchQuery.toLowerCase();
    return new Set(domains.filter(d =>
      d.name.toLowerCase().includes(q) || d.tagline?.toLowerCase().includes(q)
    ).map(d => d.id));
  }, [domains, searchQuery]);

  const activeDomain = activeDomainId ? ROADMAP_DATA[activeDomainId] : null;

  const activeDomainSubs = useMemo(() => {
    if (!activeDomain) return [];
    let list = [];
    if (activeDomain.subdomains) {
      list = Object.values(activeDomain.subdomains);
    } else if (activeDomain.categories) {
      Object.values(activeDomain.categories).forEach(cat => {
        if (cat.subdomains) {
          list = [...list, ...Object.values(cat.subdomains)];
        }
      });
    }
    return list;
  }, [activeDomain]);

  const activeSub = activeSubId ? activeDomainSubs.find(s => s.id === activeSubId) : null;

  // View state calculation (ponytail style: simple derivation, no complex state machine)
  const isOrbitView = !activeDomainId;
  const isModalView = activeDomainId && !activeSubId;
  const isFullScreenView = !!activeSubId;

  // Calculate angles for the 5 domains
  // 360 / 5 = 72 degrees per card
  const angleStep = 360 / Math.max(domains.length, 1);

  return (
    <div className="app-container">
      {/* Background blueprint grid */}
      <div className={!isOrbitView ? 'gridscan-bg blurred' : 'gridscan-bg'}>
        <GridScan
          sensitivity={0.55}
          lineThickness={0.5}
          linesColor="#e2e8f0"
          gridScale={0.3}
          scanColor="#0D52BF"
          scanOpacity={0.2}
          enablePost
          bloomIntensity={0.1}
          chromaticAberration={0.0005}
          noiseIntensity={0.005}
          enableWebcam={false}
        />
      </div>

      {/* Dynamic Subdomain Background Overlay */}
      <div 
         className="dynamic-bg"
         style={{ 
           position: 'absolute', 
           inset: 0, 
           zIndex: 0, 
           background: getBackgroundForSub(activeSubId),
           opacity: isFullScreenView ? 1 : 0,
           transition: 'opacity 0.6s ease, background 0.6s ease',
           pointerEvents: 'none',
           mixBlendMode: 'overlay'
         }} 
      />

      {/* Persistent Breadcrumb / Header */}
      <div className="header-bar">
        {isOrbitView ? (
          <img src="/pc-logo-full.png" alt="Pioneers Club" style={{ height: '83px', objectFit: 'contain' }} />
        ) : (
          <button className="back-btn" onClick={() => {
            if (activeSubId) {
              navigate(`/${activeDomainId}`);
            } else {
              navigate('/');
            }
          }}>
            ← Back
          </button>
        )}
      </div>

      {/* 1. ORBITAL CENTERPIECE */}
      <div className={
        isOrbitView ? 'orbit-container' :
          isModalView ? 'orbit-container background' :
            'orbit-container hidden'
      }>
        <div className="hero-center">
          <h1>Discover Your <br /><span style={{ color: 'var(--pioneers-royal)' }}>Career Path</span></h1>
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        </div>

        <div className="orbit-ring">
          {domains.map((domain, index) => {
            const angle = index * angleStep;
            const isMatch = matchingDomainIds.has(domain.id);
            return (
              <div
                key={domain.id}
                className={isMatch ? 'orbit-card' : 'orbit-card dimmed'}
                style={{ '--angle': `${angle}deg` }}
                onClick={() => {
                  if (isOrbitView) {
                    navigate(`/${domain.id}`);
                    setSearchQuery(''); // clear search on dive in
                  }
                }}
              >
                <h2>{domain.name}</h2>
                <p>{domain.tagline}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. GLASS PANE MODAL */}
      <div className={isModalView ? 'glass-modal active' : 'glass-modal hidden'}>
        <div className="modal-header">
          <h1>{activeDomain?.name}</h1>
          <p>{activeDomain?.tagline}</p>
        </div>
        <div className="subdomain-grid">
          {activeDomainSubs.map((sub, i) => (
            <button
              key={sub.id}
              className="subdomain-pill"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => navigate(`/${activeDomainId}/${sub.id}`)}
            >
              {sub.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. FULL-SCREEN KANBAN */}
      <div className={isFullScreenView ? 'full-screen-kanban active' : 'full-screen-kanban'}>
        {isFullScreenView && activeSub ? (
          <>
            <h1>{activeSub.name}</h1>
            <div className="kanban-scroll">

              {activeSub.beginner?.topics?.length ? (
                <div className="kanban-col">
                  <h3>Beginner</h3>
                  {activeSub.beginner.topics.map((t, i) => (
                    <div key={i} className="kanban-item"><h4>{t}</h4></div>
                  ))}
                  {activeSub.beginner.skills?.map((s, i) => (
                    <div key={`skill-${i}`} className="kanban-item"><span className="kanban-tag">Skill</span><h4>{s}</h4></div>
                  ))}
                </div>
              ) : null}

              {activeSub.intermediate?.concepts?.length ? (
                <div className="kanban-col">
                  <h3>Intermediate</h3>
                  {activeSub.intermediate.concepts.map((c, i) => (
                    <div key={i} className="kanban-item"><h4>{c}</h4></div>
                  ))}
                  {activeSub.intermediate.tools?.map((t, i) => (
                    <div key={`tool-${i}`} className="kanban-item"><span className="kanban-tag">Tool</span><h4>{t}</h4></div>
                  ))}
                </div>
              ) : null}

              {activeSub.advanced?.skills?.length ? (
                <div className="kanban-col">
                  <h3>Advanced</h3>
                  {activeSub.advanced.skills.map((s, i) => (
                    <div key={i} className="kanban-item"><h4>{s}</h4></div>
                  ))}
                  {activeSub.advanced.research?.map((r, i) => (
                    <div key={`res-${i}`} className="kanban-item"><span className="kanban-tag">Research</span><h4>{r}</h4></div>
                  ))}
                </div>
              ) : null}

              {activeSub.projects?.length ? (
                <div className="kanban-col">
                  <h3>Projects</h3>
                  {activeSub.projects.map((p, i) => (
                    <div key={i} className="kanban-item"><h4>{p}</h4></div>
                  ))}
                </div>
              ) : null}

            </div>
          </>
        ) : null}
      </div>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
