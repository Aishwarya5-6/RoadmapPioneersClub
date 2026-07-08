import React, { useState, useMemo } from 'react';
import { ROADMAP_DATA } from './data';
import './styles/global.css';

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

const DomainCard = ({ domain, isActive, onClick, activeSub, setActiveSub }) => {
  // Extract all subdomains safely, handling both categories and direct subdomains
  const subs = useMemo(() => {
    let list = [];
    if (domain.subdomains) {
      list = Object.values(domain.subdomains);
    } else if (domain.categories) {
      Object.values(domain.categories).forEach(cat => {
        if (cat.subdomains) {
          list = [...list, ...Object.values(cat.subdomains)];
        }
      });
    }
    return list;
  }, [domain]);

  return (
    <div className={`card ${isActive ? 'expanded' : ''}`} onClick={!isActive ? onClick : undefined}>
      <h2>{domain.name}</h2>
      <p>{domain.tagline}</p>
      
      {isActive ? (
        <div className="subdomain-panel">
          <div className="subdomain-list">
            {subs.map((sub, i) => (
              <button 
                key={sub.id} 
                className={`subdomain-pill ${activeSub?.id === sub.id ? 'active' : ''}`}
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setActiveSub(sub)}
              >
                {sub.name}
              </button>
            ))}
          </div>

          {activeSub ? (
            <div className="kanban-wrapper">
              <div className="kanban-col">
                <h3>Beginner</h3>
                {activeSub.beginner?.topics?.map((t, i) => (
                  <div key={i} className="kanban-item"><h4>{t}</h4></div>
                ))}
              </div>
              <div className="kanban-col">
                <h3>Intermediate</h3>
                {activeSub.intermediate?.concepts?.map((c, i) => (
                  <div key={i} className="kanban-item"><h4>{c}</h4></div>
                ))}
              </div>
              <div className="kanban-col">
                <h3>Advanced</h3>
                {activeSub.advanced?.skills?.map((s, i) => (
                  <div key={i} className="kanban-item"><h4>{s}</h4></div>
                ))}
              </div>
              <div className="kanban-col">
                <h3>Projects</h3>
                {activeSub.projects?.map((p, i) => (
                  <div key={i} className="kanban-item"><h4>{p}</h4></div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDomainId, setActiveDomainId] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  const domains = useMemo(() => Object.values(ROADMAP_DATA), []);
  const filteredDomains = useMemo(() => 
    domains.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       d.tagline?.toLowerCase().includes(searchQuery.toLowerCase())),
    [domains, searchQuery]
  );

  const activeDomain = activeDomainId ? ROADMAP_DATA[activeDomainId] : null;

  return (
    <div className="layout">
      <header className="header">
        <a href="/" className="header-logo" onClick={(e) => { e.preventDefault(); setActiveDomainId(null); setActiveSub(null); }}>
          Pioneers Club
        </a>
      </header>

      {activeDomainId ? (
        <nav className="breadcrumb">
          <button onClick={() => { setActiveDomainId(null); setActiveSub(null); }}>Home</button>
          <span>&gt;</span>
          <button onClick={() => setActiveSub(null)}>{activeDomain.name}</button>
          {activeSub ? (
            <>
              <span>&gt;</span>
              <span>{activeSub.name}</span>
            </>
          ) : null}
        </nav>
      ) : (
        <section className="hero">
          <h1>Discover Your <IconRocket /> Tech Career Path</h1>
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        </section>
      )}

      <main className="domain-grid">
        {activeDomainId ? (
          <DomainCard 
            domain={activeDomain} 
            isActive={true} 
            activeSub={activeSub}
            setActiveSub={setActiveSub}
          />
        ) : (
          filteredDomains.map(domain => (
            <DomainCard 
              key={domain.id} 
              domain={domain} 
              isActive={false} 
              onClick={() => setActiveDomainId(domain.id)}
            />
          ))
        )}
      </main>

      <footer style={{ marginTop: 'auto', textAlign: 'center', color: 'var(--muted-steel)' }}>
        <p>Pioneers Club © GITAM Hyderabad</p>
      </footer>
    </div>
  );
}
