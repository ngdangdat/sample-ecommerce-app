# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static eCommerce application built with Vue.js and Vuex for state management. The app implements a standard eCommerce flow: product listing → add to cart → checkout → shipping, with all functionality handled client-side without server code.

## Development Commands

- `npm run dev` - Start development server with hot reload on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run tests (placeholder - not configured yet)

## Architecture

### State Management
- **Vuex store** handles all application state
- Key state modules likely include:
  - Products (catalog, filtering, search)
  - Cart (items, quantities, totals)
  - Checkout (shipping, payment forms)
  - User session (if applicable)

### Component Structure
Expected Vue.js component hierarchy:
- **ProductListing** - Main catalog view
- **ProductCard** - Individual product display
- **Cart** - Shopping cart management
- **Checkout** - Multi-step checkout process
- **Shipping** - Address and delivery options

### Static Architecture
- All data and business logic runs client-side
- No backend API calls or server-side processing
- Product data likely stored in static JSON files or hardcoded
- Cart state persists only in browser session/localStorage

## Key Implementation Notes

- Focus on component reusability and proper props/events communication
- Vuex actions should handle all cart operations and state transitions
- Routing likely uses Vue Router for navigation between main views
- Form validation needed for checkout and shipping inputs

---

# GitHub Issue Management System

## Agent Configuration
- **issue-manager** (multiagent:0.0): GitHub Issue Manager
- **worker1-N** (multiagent:0.1-N): Issue Resolution Workers (N specified in setup.sh, default 3)

## Your Role
- **issue-manager**: @claude/instructions/issue-manager.md
- **worker1-N**: @claude/instructions/worker.md

## Message Sending
```bash
./claude/agent-send.sh [recipient] "[message]"
```

## Basic Flow
GitHub Issues → issue-manager → workers → issue-manager → GitHub PRs
