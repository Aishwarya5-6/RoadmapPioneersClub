/* ============================================================
   PIONEERS ROADMAP HUB — APP LOGIC
   Hash-based routing (so mobile/browser Back button works),
   search, rendering, and theme toggle.
   ============================================================ */

(function () {
  "use strict";

  // ---------- DOM refs ----------
  const viewHome = document.getElementById("view-home");
  const viewSubdomains = document.getElementById("view-subdomains");
  const viewCategories = document.getElementById("view-categories");
  const viewRoadmap = document.getElementById("view-roadmap");
  const views = [viewHome, viewSubdomains, viewCategories, viewRoadmap];

  const domainGrid = document.getElementById("domainGrid");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const searchResults = document.getElementById("searchResults");
  const noResults = document.getElementById("noResults");

  const subBreadcrumb = document.getElementById("subBreadcrumb");
  const subHeading = document.getElementById("subHeading");
  const subdomainGrid = document.getElementById("subdomainGrid");

  const catBreadcrumb = document.getElementById("catBreadcrumb");
  const catHeading = document.getElementById("catHeading");
  const categoryGrid = document.getElementById("categoryGrid");

  const roadmapBreadcrumb = document.getElementById("roadmapBreadcrumb");
  const roadmapHero = document.getElementById("roadmapHero");
  const roadmapTimeline = document.getElementById("roadmapTimeline");
  const roadmapBackBtn = document.getElementById("roadmapBackBtn");

  const themeToggle = document.getElementById("themeToggle");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // ---------- Helpers over ROADMAP_DATA ----------
  function countSubdomains(domain) {
    if (domain.subdomains) return Object.keys(domain.subdomains).length;
    if (domain.categories) {
      return Object.values(domain.categories).reduce(
        (sum, cat) => sum + Object.keys(cat.subdomains).length, 0
      );
    }
    return 0;
  }

  function getFlatIndex() {
    // Flattens every sub-domain into a searchable/linkable list
    const list = [];
    Object.values(ROADMAP_DATA).forEach((domain) => {
      if (domain.subdomains) {
        Object.values(domain.subdomains).forEach((sub) => {
          list.push({
            sub, domainId: domain.id, domainName: domain.name,
            categoryId: null, categoryName: null,
            path: `#/domain/${domain.id}/sub/${sub.id}`,
            crumb: domain.name
          });
        });
      }
      if (domain.categories) {
        Object.values(domain.categories).forEach((cat) => {
          Object.values(cat.subdomains).forEach((sub) => {
            list.push({
              sub, domainId: domain.id, domainName: domain.name,
              categoryId: cat.id, categoryName: cat.name,
              path: `#/domain/${domain.id}/category/${cat.id}/sub/${sub.id}`,
              crumb: `${domain.name} › ${cat.name}`
            });
          });
        });
      }
    });
    return list;
  }

  const FLAT_INDEX = getFlatIndex();

  // ---------- Routing ----------
  function navigate(hash) {
    if (window.location.hash === hash) {
      render();
    } else {
      window.location.hash = hash;
    }
  }

  function parseHash() {
    const raw = window.location.hash.replace(/^#\/?/, "");
    const parts = raw.split("/").filter(Boolean);
    // parts examples: [] | ["domain","engineering"] | ["domain","engineering","sub","ai-ml"]
    // | ["domain","pure-sciences","category","physics"] | [...,"sub","astrophysics"]
    const state = { view: "home" };
    if (parts[0] === "domain" && parts[1]) {
      state.domainId = parts[1];
      if (parts[2] === "sub" && parts[3]) {
        state.view = "roadmap";
        state.subId = parts[3];
      } else if (parts[2] === "category" && parts[3]) {
        state.categoryId = parts[3];
        if (parts[4] === "sub" && parts[5]) {
          state.view = "roadmap";
          state.subId = parts[5];
        } else {
          state.view = "subdomains-in-category";
        }
      } else {
        state.view = "domain";
      }
    }
    return state;
  }

  function showView(el) {
    views.forEach((v) => v.classList.remove("active"));
    el.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function render() {
    const state = parseHash();
    searchInput.value = "";
    toggleSearchMode(false);

    if (state.view === "home") {
      renderHome();
      showView(viewHome);
    } else if (state.view === "domain") {
      const domain = ROADMAP_DATA[state.domainId];
      if (!domain) return navigate("#/");
      if (domain.categories) {
        renderCategories(domain);
        showView(viewCategories);
      } else {
        renderSubdomains(domain, null);
        showView(viewSubdomains);
      }
    } else if (state.view === "subdomains-in-category") {
      const domain = ROADMAP_DATA[state.domainId];
      const category = domain && domain.categories && domain.categories[state.categoryId];
      if (!domain || !category) return navigate("#/");
      renderSubdomains(domain, category);
      showView(viewSubdomains);
    } else if (state.view === "roadmap") {
      const domain = ROADMAP_DATA[state.domainId];
      if (!domain) return navigate("#/");
      let sub, category = null;
      if (state.categoryId) {
        category = domain.categories && domain.categories[state.categoryId];
        sub = category && category.subdomains[state.subId];
      } else {
        sub = domain.subdomains && domain.subdomains[state.subId];
      }
      if (!sub) return navigate("#/");
      renderRoadmap(domain, category, sub);
      showView(viewRoadmap);
    }
  }

  // ---------- Renderers ----------
  function renderHome() {
    domainGrid.innerHTML = Object.values(ROADMAP_DATA).map((domain, i) => `
      <button class="domain-card" style="animation-delay:${i * 0.06}s" data-domain="${domain.id}">
        <span class="card-icon">${domain.icon}</span>
        <h3 class="card-title">${domain.name}</h3>
        <p class="card-desc">${domain.tagline}</p>
        <span class="card-count">${countSubdomains(domain)} paths</span>
        <span class="card-arrow">Explore →</span>
      </button>
    `).join("");

    domainGrid.querySelectorAll(".domain-card").forEach((card) => {
      card.addEventListener("click", () => navigate(`#/domain/${card.dataset.domain}`));
    });
  }

  function renderCategories(domain) {
    catBreadcrumb.innerHTML = `<span>Home</span> › ${domain.name}`;
    catHeading.innerHTML = `${domain.icon} ${domain.name}<span class="sub-tag">${domain.tagline} — pick a subject area</span>`;
    categoryGrid.innerHTML = Object.values(domain.categories).map((cat, i) => `
      <button class="domain-card" style="animation-delay:${i * 0.06}s" data-cat="${cat.id}">
        <span class="card-icon">${cat.icon}</span>
        <h3 class="card-title">${cat.name}</h3>
        <p class="card-desc">${Object.keys(cat.subdomains).length} specialized roadmaps</p>
        <span class="card-arrow">Explore →</span>
      </button>
    `).join("");

    categoryGrid.querySelectorAll(".domain-card").forEach((card) => {
      card.addEventListener("click", () => navigate(`#/domain/${domain.id}/category/${card.dataset.cat}`));
    });
  }

  function renderSubdomains(domain, category) {
    const breadcrumbEl = subBreadcrumb;
    const headingEl = subHeading;
    const gridEl = subdomainGrid;
    const list = category ? category.subdomains : domain.subdomains;
    const title = category ? category.name : domain.name;
    const icon = category ? category.icon : domain.icon;

    breadcrumbEl.innerHTML = category
      ? `<span>Home</span> › ${domain.name} › ${category.name}`
      : `<span>Home</span> › ${domain.name}`;
    headingEl.innerHTML = `${icon} ${title}<span class="sub-tag">Choose a specialization to view its full roadmap</span>`;

    gridEl.innerHTML = Object.values(list).map((sub, i) => `
      <button class="sub-card" style="animation-delay:${i * 0.05}s" data-sub="${sub.id}">
        <span class="card-icon">${sub.icon}</span>
        <h3 class="card-title">${sub.name}</h3>
        <p class="card-desc">${sub.intro.what.slice(0, 90)}${sub.intro.what.length > 90 ? "…" : ""}</p>
        <span class="card-arrow">View Roadmap →</span>
      </button>
    `).join("");

    gridEl.querySelectorAll(".sub-card").forEach((card) => {
      card.addEventListener("click", () => {
        const path = category
          ? `#/domain/${domain.id}/category/${category.id}/sub/${card.dataset.sub}`
          : `#/domain/${domain.id}/sub/${card.dataset.sub}`;
        navigate(path);
      });
    });

    // Back button inside this view goes to categories screen if applicable
    const backBtn = viewSubdomains.querySelector(".back-btn");
    backBtn.textContent = category ? `← Back to ${domain.name}` : "← Back to Domains";
    backBtn.onclick = () => navigate(category ? `#/domain/${domain.id}` : "#/");
  }

  function listBlock(title, items, cls) {
    if (!items || !items.length) return "";
    return `
      <div class="tl-subgroup">
        <h5>${title}</h5>
        <ul class="tl-list">${items.map((t) => `<li>${t}</li>`).join("")}</ul>
      </div>
    `;
  }

  function renderRoadmap(domain, category, sub) {
    const crumbParts = [`<span>Home</span>`, domain.name];
    if (category) crumbParts.push(category.name);
    crumbParts.push(sub.name);
    roadmapBreadcrumb.innerHTML = crumbParts.join(" › ");

    roadmapHero.innerHTML = `
      <span class="roadmap-hero-icon">${sub.icon}</span>
      <h2 class="roadmap-hero-title">${sub.name}</h2>
      <div class="roadmap-hero-block">
        <h4>What is it?</h4>
        <p>${sub.intro.what}</p>
      </div>
      <div class="roadmap-hero-block">
        <h4>Who should choose this?</h4>
        <p>${sub.intro.who}</p>
      </div>
    `;

    const timelineItems = [
      {
        icon: "🌱", title: "Beginner Level",
        body: listBlock("Topics to Learn", sub.beginner.topics) + listBlock("Basic Skills", sub.beginner.skills)
      },
      {
        icon: "🔥", title: "Intermediate Level",
        body: listBlock("Advanced Concepts", sub.intermediate.concepts) + listBlock("Tools / Software", sub.intermediate.tools)
      },
      {
        icon: "🏆", title: "Advanced Level",
        body: listBlock("Industry Skills", sub.advanced.skills) + listBlock("Research Areas", sub.advanced.research)
      },
      {
        icon: "🎯", title: "Project Ideas (Beginner → Advanced)",
        body: `<ul class="tl-list">${sub.projects.map((p) => `<li>${p}</li>`).join("")}</ul>`,
        extraClass: "tl-card--projects"
      },
      {
        icon: "🛠️", title: "Tools & Software",
        body: `<div class="chip-row">${sub.tools.map((t) => `<span class="chip">${t}</span>`).join("")}</div>`
      },
      {
        icon: "📚", title: "Free Learning Resources",
        body: `<ul class="tl-list">${sub.resources.map((r) => `<li>${r}</li>`).join("")}</ul>`,
        extraClass: "tl-card--resources"
      },
      {
        icon: "💼", title: "Career Opportunities",
        body: `<ul class="tl-list">${sub.careers.map((c) => `<li>${c}</li>`).join("")}</ul>`,
        extraClass: "tl-card--careers"
      }
    ];

    roadmapTimeline.innerHTML = timelineItems.map((item, i) => `
      <div class="tl-item" style="animation-delay:${i * 0.07}s">
        <span class="tl-dot">${item.icon}</span>
        <div class="tl-card ${item.extraClass || ""}">
          <h3>${item.title}</h3>
          ${item.body}
        </div>
      </div>
    `).join("");

    roadmapBackBtn.onclick = () => {
      const target = category
        ? `#/domain/${domain.id}/category/${category.id}`
        : `#/domain/${domain.id}`;
      navigate(target);
    };
  }

  // ---------- Search ----------
  function toggleSearchMode(isSearching) {
    domainGrid.classList.toggle("hidden", isSearching);
    searchResults.classList.toggle("hidden", !isSearching);
    noResults.classList.add("hidden");
    searchClear.classList.toggle("show", isSearching);
  }

  function runSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      toggleSearchMode(false);
      return;
    }
    toggleSearchMode(true);

    const matches = FLAT_INDEX.filter((entry) =>
      entry.sub.name.toLowerCase().includes(q) ||
      entry.domainName.toLowerCase().includes(q) ||
      (entry.categoryName && entry.categoryName.toLowerCase().includes(q))
    );

    if (!matches.length) {
      searchResults.innerHTML = "";
      noResults.classList.remove("hidden");
      return;
    }

    searchResults.innerHTML = matches.map((m, i) => `
      <button class="sub-card" style="animation-delay:${i * 0.04}s" data-path="${m.path}">
        <span class="card-icon">${m.sub.icon}</span>
        <h3 class="card-title">${m.sub.name}</h3>
        <p class="card-desc">${m.crumb}</p>
        <span class="card-arrow">View Roadmap →</span>
      </button>
    `).join("");

    searchResults.querySelectorAll(".sub-card").forEach((card) => {
      card.addEventListener("click", () => navigate(card.dataset.path));
    });
  }

  let searchDebounce;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchDebounce);
    const val = e.target.value;
    searchDebounce = setTimeout(() => runSearch(val), 120);
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    toggleSearchMode(false);
    searchInput.focus();
  });

  // ---------- Static back buttons ----------
  document.querySelectorAll('[data-back-to="home"]').forEach((btn) => {
    btn.addEventListener("click", () => navigate("#/"));
  });

  // ---------- Theme toggle ----------
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
    localStorage.setItem("pioneers-theme", theme);
  }
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  });
  applyTheme(localStorage.getItem("pioneers-theme") || "dark");

  // ---------- Scroll to top ----------
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 400);
  });
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---------- Init ----------
  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", render);
  if (document.readyState !== "loading") render();
})();
