# Pioneers Roadmap Hub - Project Architecture & Content Breakdown

This document provides a detailed overview of the current "Pioneers Roadmap Hub" application. It is intended to serve as context and content reference for future redesigns.

## 1. High-Level Overview
- **Purpose**: A self-service career guidance platform where freshers can scan a QR code, select a tech/domain interest, and discover a step-by-step learning roadmap.
- **Tech Stack**: Vanilla HTML, CSS, and JavaScript. No build tools or frontend frameworks are used.
- **Architecture**: Single Page Application (SPA) driven by hash-based routing (`#/domain/...`).
- **Branding**: "Pioneers Club, GITAM Hyderabad" with a futuristic, space-themed aesthetic (rocket emojis, glowing elements).

## 2. File Structure
- `index.html`: The main skeleton containing all the view containers.
- `style.css`: All styling, implementing a mobile-first, futuristic dark theme (with light mode support).
- `script.js`: The application logic (routing, search, rendering data, theme toggling).
- `data.js`: A massive JSON-like object (`ROADMAP_DATA`) that acts as the "database" for the entire site.
- `pioneers-qr-code.png`: A QR code used for marketing/posters to drive traffic to the site.

## 3. Application Flow & Views
The application uses hash fragments (e.g., `#/domain/engineering/sub/ai-ml`) to navigate between four primary "views", which are conditionally shown/hidden by `script.js`.

### A. Home View (`#view-home`)
- **Hero Section**: Title ("Pioneers Roadmap Hub"), subtitle, and a live search bar.
- **Search Functionality**: Users can search for keywords (e.g., "AI", "Physics") to instantly filter and jump to specific roadmaps.
- **Domain Grid**: Displays high-level domains (e.g., "Engineering & Technology", "Pure Sciences").

### B. Categories View (`#view-categories`)
- *Note: Only appears if a domain has sub-categories (e.g., Pure Sciences might be split into Physics, Chemistry).*
- Displays cards for each category within the selected domain.

### C. Subdomains View (`#view-subdomains`)
- Displays specialized fields within a domain or category (e.g., within Engineering, it shows "AI & ML", "Software Dev", "Data Science").
- Each card shows a brief description of "what it is".

### D. Roadmap View (`#view-roadmap`)
- The final destination. Displays a detailed, timeline-style roadmap for a specific field.
- **Hero Block**: 
  - "What is it?"
  - "Who should choose this?"
- **Timeline Progression**:
  - Beginner Level (Topics, Basic Skills)
  - Intermediate Level (Concepts, Tools)
  - Advanced Level (Skills, Research)
- **Actionable Resources**:
  - Project Ideas (Beginner to Advanced)
  - Tools & Software (Displayed as chips/tags)
  - Free Learning Resources (Links/recommendations)
  - Career Opportunities

## 4. Data Schema (`data.js`)
The entire content of the site is powered by `ROADMAP_DATA`. If you redesign, you will need to map this data to your new components. 

Here is the general structure of a domain entry:
```javascript
{
  "domain-id": {
    id: "domain-id",
    name: "Domain Name",
    icon: "💻",
    tagline: "Short tagline",
    subdomains: {
      "subdomain-id": {
        id: "subdomain-id",
        name: "Subdomain Name",
        icon: "🤖",
        intro: { what: "...", who: "..." },
        beginner: { topics: [...], skills: [...] },
        intermediate: { concepts: [...], tools: [...] },
        advanced: { skills: [...], research: [...] },
        projects: [...],
        tools: [...],
        resources: [...],
        careers: [...]
      }
    }
  }
}
```
*(Domains can optionally have a `categories` object instead of direct `subdomains` for deeper nesting).*

## 5. Styling & UX Details (`style.css`)
If the redesign wants to keep the same vibe, note the following existing UI elements:
- **Theme Support**: Default is dark mode (`--bg: #060911`), with a light mode toggle. Uses CSS variables heavily.
- **Aesthetics**: "Glassmorphism" headers, subtle glowing background orbs (`.bg-glow`), and a grid background pattern (`.bg-grid`).
- **Gradients**: Uses a brand gradient (`linear-gradient(135deg, #7c5cff 0%, #22d3ee 100%)`) for buttons, active states, and timeline lines.
- **Animations**: Cards slide up on load, hover effects lift cards and add glow shadows, and a rocket emoji bobs up and down in the hero section.

## 6. Integrations & External Links
- **Fonts**: Space Grotesk, Sora, Baloo 2 (imported from Google Fonts).
- **Social Media**: The footer links to the Pioneers Club Instagram (`@pioneersclub.gitam`).
