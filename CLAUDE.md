# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Korean translation project for Docker documentation. A community-driven SPA built with Vite + TypeScript, deployed on GitHub Pages at https://docker-ko.github.io/

## Commands

```bash
# Development
npm run dev              # Start Vite dev server (port 5173)
npm run build            # TypeScript compile + Vite build
npm run preview          # Preview production build

# Testing
npm run test             # Run tests once (Vitest)
npm run test:watch       # Run tests in watch mode

# Quality checks
npm run check:all        # Run all checks (lint + prettier + types)
npm run fix:all          # Fix all auto-fixable issues
npm run lint:check       # ESLint check
npm run lint:fix         # ESLint auto-fix
npm run prettier:check   # Prettier check
npm run prettier:write   # Prettier auto-format
npm run type:check       # TypeScript type check
```

## Architecture

**Stack**: Vite 6 + TypeScript + Tailwind CSS + marked.js

**Key directories**:
- `src/scripts/` - TypeScript application logic
- `src/scripts/components/` - Custom Web Components (header, nav, footer, card, button)
- `src/styles/` - CSS with Tailwind
- `public/docs/` - Markdown documentation files (content source)
- `public/data/` - JSON data (navigation structure, breadcrumbs)
- `tests/` - Vitest unit tests

**Application flow**:
1. `main.ts` initializes on DOMContentLoaded
2. URL hash (#/page-name) determines which markdown file to load
3. `load_md.ts` fetches and renders markdown with custom component support
4. `table-contents.ts` generates TOC from h2/h3 headings using IntersectionObserver
5. `breadcrumb.ts` handles navigation breadcrumbs

**Custom markdown tokenizer**: Extended marked.js to support Web Components within markdown content.

## Translation Guidelines

- Keep original technical terms with Korean translation in parentheses on first mention
- Use formal Korean language style (경어체)
- Code examples stay in English; code comments may be translated
- Preserve markdown structure, image paths, and links
- Follow existing design patterns when adding Tailwind CSS styles

## Commit Conventions

Write commit messages in Korean with prefixes:
- `[translate]` - Translation work
- `[fix]` - Bug fixes
- `[ui]` - UI changes

Branch naming: `[USERNAME]-[translate | ui]`

## Language

Code is written in English. Responses and documentation are in Korean.
