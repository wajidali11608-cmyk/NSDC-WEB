# NSDC-JHSC Portal

The primary web application and digital portal for the Jamia Hamdard Student Chapter of the National Student Digital Collective (NSDC-JHSC). This platform acts as the public directory, operational log, and recruitment portal for the collective's research divisions.

The application is architected as a high-performance full-stack web application, leveraging Server-Side Rendering (SSR) deployed to Cloudflare's serverless edge.

---

## Architecture & Technology Stack

The codebase is built on a modern full-stack web stack:

*   **Runtime & Package Manager**: [Bun](https://bun.sh/) - Used for dependency resolution, local development, and build task execution.
*   **Framework**: [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/overview) (React 19 + TanStack Router) - Handles type-safe file-based routing, client-side hydration, and server-side rendering.
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utilizes modern CSS variables and nesting, compiled using the native Vite pipeline.
*   **UI Primitives**: [Radix UI](https://www.radix-ui.com/) - Unstyled accessible primitives configured under a consistent visual theme.
*   **State Hydration**: [TanStack Query v5](https://tanstack.com/query/latest) - Syncs server state across routes with strict cache control.
*   **Edge Platform**: [Cloudflare Pages](https://pages.cloudflare.com/) - Serves assets and executes edge server entrypoints under [Nitro](https://nitro.build/) SSR rendering.

---

## Repository Structure

```
├── bunfig.toml             # Bun supply-chain configuration
├── eslint.config.js        # Strict ESLint configuration
├── package.json            # Core dependency manifest and lifecycle scripts
├── tsconfig.json           # Compiler rules and path mapping aliases
├── vite.config.ts          # Native Vite compilation configuration
├── wrangler.jsonc          # Cloudflare deployment settings and environment definitions
└── src/
    ├── assets/             # Media and static graphic assets
    ├── components/         # Modular layout and shared primitive components
    ├── data/               # Static datasets and organizational structures
    ├── hooks/              # Reusable React hooks
    ├── routes/             # File-system routing definitions (SSR / hydrated client pages)
    ├── server.ts           # SSR application wrapper configuration
    └── styles.css          # Tailwind custom utility classes and design tokens
```

---

## Development Lifecycle

### Prerequisites
- Install **Bun** (Recommended) or **Node.js** (v20+).

### 1. Installation
Install the required packages and lock current dependencies:
```bash
bun install
```

### 2. Local Development
Run the local Vite dev server with Hot Module Replacement (HMR):
```bash
bun run dev
```
The server will run on `http://localhost:8080` (or `::` port `8080`).

### 3. Production Compilation
Compile the production bundles for both client assets and SSR edge targets:
```bash
bun run build
```
This builds static assets into `dist/client` and SSR server entry into `dist/server`.

### 4. Local Worker Emulation
Preview the built serverless pages environment locally using Wrangler:
```bash
bun run preview
```

---

## Standards & Quality Guidelines

*   **Code Style**: Format the workspace via Prettier using `npm run format`.
*   **Linting**: Ensure code conforms to code standards by running `npm run lint`.
*   **Type Safety**: Keep TypeScript declarations strict and maintain clear interfaces for state structures.
*   **Routing**: The routing table `src/routeTree.gen.ts` is automatically managed by the TanStack compiler. Avoid manual edits.
