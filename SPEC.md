# Technical & Functional Specification (SPEC)

## 1. System Vision & Purpose

This document defines the functional and technical specifications for the NSDC-JHSC Digital Hub portal. The platform acts as the public facing identity, recruitment hub, and research operation ledger for the Jamia Hamdard Student Chapter of the National Student Digital Collective (NSDC-JHSC).

The system is optimized for edge delivery, instant hydration, and a high-fidelity visual experience representing technical and creative excellence.

---

## 2. System Architecture

The application is architected as a full-stack React framework deployed on serverless edge environments:

```
[ Client Browser ]
        │ (HTTPS)
        ▼
[ Cloudflare Pages Edge network ]
        │ (Edge Worker execution)
        ▼
[ Nitro SSR Engine ] <---> [ TanStack Router (route-tree matching) ]
        │
        ▼ (Hydration / SSR HTML Stream)
[ Client Hydration ]
```

### 2.1 SSR & Hydration Model
*   **Initial Load**: HTML is rendered on the server (Cloudflare Worker node closest to the client) and streamed down to the browser.
*   **Hydration**: Once the client-side bundle is loaded, TanStack Router hydrates the DOM, turning the portal into a Single Page Application (SPA) for subsequent navigation.
*   **Telemetry and External Scripts**: No external tracking, telemetry scripts, or proprietary developer-platform frames are loaded, ensuring absolute data privacy and faster page loads.

---

## 3. Route & Functional Specifications

### 3.1 Home / Luminous Prism Dashboard (`/`)
*   **Functional Requirement**: Present the primary thesis of the collective and act as the launching pad for all active divisions.
*   **Key Modules**:
    *   **Hero Intro**: Dynamic headline paired with visual division indices.
    *   **Real-time Clock**: Integrates a client-side clock tracking India Standard Time (IST) dynamically.
    *   **Scroll Indicator**: Displays the current page reading progress at the top viewport boundary.

### 3.2 Teams Directory (`/teams` & `/teams/$slug`)
*   **Functional Requirement**: List active members of the collective grouped by their respective operational divisions.
*   **Dynamic Matching**: Route segment `/teams/$slug` renders detail pages for individual members based on static data match.
*   **Division System**: Members map to one of the 9 divisions (01 Core to 09 Partnerships).

### 3.3 Events & Operation Logs (`/events`)
*   **Functional Requirement**: Render a chronological ledger of NSDC-JHSC events, field notes, and digital launches.
*   **Key Elements**: Filterable lists, timeline UI, and status badges (Completed, Scheduled, Active).

### 3.4 Contact Channel (`/contact`)
*   **Functional Requirement**: Provide a high-fidelity contact form for prospective partners and applicants.
*   **Key Elements**: Fully validated form controls built using Radix primitive layouts.

---

## 4. Visual Design & Theme System

The user interface follows the **Luminous Prism** style guidelines:

### 4.1 Styling and Color Tokens
*   **Palette**: Dark mode primary. Pure black, deep grays, and translucent highlights.
*   **Backdrop Blur**: Utilizes standard CSS backdrop filters (`backdrop-blur-md` / `backdrop-blur-lg`) on modal wrappers and sticky navigation headers.
*   **Transitions**: Hover states use CSS ease-in-out transitions with a duration budget of 150ms to 200ms.

### 4.2 Typography Constraints
*   **Headers & Accents**: *Fraunces* (Google Fonts) for editorial layout headings.
*   **Interface & Text**: *Geist Sans* (Google Fonts) for highly legible UI elements.
*   **Monospace/Data**: *Geist Mono* (Google Fonts) for numbers, clock rendering, and code elements.

---

## 5. Performance & Quality Constraints

*   **Page Load Target**: Time to Interactive (TTI) < 1.5s on broadband connections.
*   **Platform Runtime**: Must execute successfully in a serverless worker environment (limited Node.js compatibility layer). No disk-bound caching is permitted.
*   **Standard Compliance**:
    *   ESLint static analysis passing with zero critical errors.
    *   Fully responsive layout supporting viewports from 320px (mobile) up to 2560px (ultra-wide desktop grids).
