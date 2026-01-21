# Copilot Instructions for react-demos

## Project Overview

This is a **React 19 + TypeScript + Vite** demo application featuring:

- **PokAImon Generator**: Uses a backend API to generate AI-powered Pokémon from user doodles
- **PokAImon Gallery**: Displays gallery of generated Pokémon with filtering, sorting, and like functionality
- **Backend Integration**: Connects to a Node.js backend at `VITE_BACKEND_URL` (default: `http://localhost:3001`)

## Architecture & Data Flow

### Context Providers

- **ApiKeyContext** (`src/context/ApiKeyContext.tsx`): Manages Gemini API key with localStorage persistence
  - Uses pattern: `apiKeyStorageKey = 'GEMINI_API_KEY'`
  - Provides: `useApiKey()` hook returning `{ apiKey, updateApiKey, clearApiKey }`
- **ThemeContext** (`src/context/ThemeContext.tsx`): Light/dark theme toggle with DOM attribute sync
  - Uses pattern: stores theme in localStorage and sets `data-theme` attribute on `document.documentElement`

### Pages & Data Models

- **GeneratorPage** (`src/pages/GeneratorPage.tsx`): POST to `/api/generate` with `{ doodle_data: base64 }`
  - Returns `PokAIMon` object stored in state
- **GalleryPage** (`src/pages/GalleryPage.tsx`): Uses `usePokemonGallery()` hook to fetch from `/api/gallery`
  - Implements sorting (newest/likes/name), filtering by type, and PATCH `/api/pokaimon/{id}/like`
- **Data Model** (`src/models/index.ts`):
  ```typescript
  interface PokAIMon {
    id;
    name;
    type?;
    characteristics;
    image_url;
    doodle_source;
    like_count;
    powers: Power[];
    action_images: Record<string, string>;
  }
  ```

### Custom Hooks

- **usePokemonGallery** (`src/hooks/usePokemonGallery.ts`): Fetches data with `useCallback`, handles loading/error states
  - Returns: `{ data, loading, error, refetch }`
  - Uses environment variable: `VITE_BACKEND_URL`

## Development Workflows

### Scripts

- `npm run dev`: Vite dev server with hot module replacement
- `npm run build`: TypeScript check + Vite production build → `dist/`
- `npm run lint`: ESLint with React Hook rules
- `npm run preview`: Preview built app locally

### Environment

- Set `VITE_BACKEND_URL` env var to override default `http://localhost:3001`
- Config files: `tsconfig.json` (strict mode), `vite.config.ts`, `eslint.config.js`

## Code Patterns & Conventions

### React Patterns

- **Lazy Loading Pages**: Pages are code-split with `lazy()` and wrapped in `<Suspense>`
- **Custom Hook Returns**: Always include explicit return type (e.g., `UsePokemonGalleryHook` interface)
- **Strict Typing**: Context consumers throw if used outside provider scope
- **Error Suppression**: ESLint disable comments for `react-refresh/only-export-components` on hook exports

### Styling

- **Tailwind CSS 4** with `@tailwindcss/vite` plugin for zero-config integration
- **Sass** available via `sass` package for component-level styles
- **Dark Mode**: Uses CSS variables via `data-theme` attribute, not Tailwind's class strategy
- **Responsive**: Mobile-first approach (grid layout responsive in GeneratorPage)

### Fetch/API Calls

- Pattern: `fetch()` with error handling catching `Response.ok` and JSON parsing
- Always catch errors as `e instanceof Error ? e.message : String(e)`
- API URL computed at module load: `const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001'`

### TypeScript

- Explicit types for everything (no implicit `any`)
- Use `type` for union/type aliases, `interface` for object contracts
- Specify return types on functions (even if obvious)
- Use `type ReactNode`, `type JSX`, `type Context` for React types

## Key Directories

- `src/context/` - Provider components with hooks
- `src/hooks/` - Data fetching and custom logic
- `src/pages/` - Route-level components
- `src/components/` - Reusable UI (Canvas, Header, Spinner, etc.)
- `src/models/` - TypeScript interfaces and types
- `src/styles/` - Global styles and Tailwind config overrides

## Integration Points

- Backend API: three endpoints: POST `/api/generate`, GET `/api/gallery`, PATCH `/api/pokaimon/:id/like`
- LocalStorage: API key and theme preference persistence
- React Router v7: Two-page app with `/` and `/gallery` routes
