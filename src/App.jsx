import React, { useState, useMemo } from 'react';
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

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDomainId, setActiveDomainId] = useState(null);
  const [activeSubId, setActiveSubId] = useState(null);

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

      {/* Persistent Breadcrumb / Header */}
      <div className="header-bar">
        {isOrbitView ? (
          <img src="/pc-logo-full.png" alt="Pioneers Club" style={{ height: '56px', objectFit: 'contain' }} />
        ) : (
          <nav className="breadcrumb">
            <button onClick={() => { setActiveDomainId(null); setActiveSubId(null); }}>Home</button>
            <span>/</span>
            <button
              onClick={() => setActiveSubId(null)}
              style={isModalView ? { color: 'var(--pioneers-royal)' } : {}}
            >
              {activeDomain?.name}
            </button>
            {isFullScreenView ? (
              <>
                <span>/</span>
                <span style={{ color: 'var(--charcoal-ink)', fontWeight: 600 }}>{activeSub?.name}</span>
              </>
            ) : null}
          </nav>
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
                    setActiveDomainId(domain.id);
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
              onClick={() => setActiveSubId(sub.id)}
            >
              {sub.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. FULL-SCREEN KANBAN */}
      <div className={isFullScreenView ? 'full-screen-kanban active' : 'full-screen-kanban'}>
        {isFullScreenView ? (
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
