import React, { useState, useMemo } from 'react';
import { ROADMAP_DATA } from './data';
import './styles/global.css';

// SVG Icons
const IconRocket = () => (
  <svg className="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1-1.5l2-2a5.4 5.4 0 0 0 1-1.5l.5-.5M15 4c-1.26-1.5-5-2-5-2s.5 3.74 2 5l.5.5a5.4 5.4 0 0 0 1.5 1l2 2a5.4 5.4 0 0 0 1.5 1l.5.5" />
    <path d="M12 15l-3-3a22 22 0 0 1-3-3.7V4h4.3c1.4 1 2.7 2 3.7 3l3 3" />
    <path d="m9 11 4 4" />
  </svg>
);

const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    className="search-input"
    placeholder="Search domains or career paths..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
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
      <div className={!isOrbitView ? 'blueprint-bg blurred' : 'blueprint-bg'} />

      {/* Persistent Breadcrumb / Header */}
      <div className="header-bar">
        {isOrbitView ? (
          <span className="brand">Pioneers Club</span>
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
          <h1>Discover Your <IconRocket /> Career Path</h1>
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
