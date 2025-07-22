# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workspace Overview

This workspace contains a **distributed portfolio network** of three interconnected React applications serving different professional entities:

- **`portfolio-rea/`** - Legal professional portfolio for Reinalda Radomi
- **`portfolio-react/`** - Software development portfolio for Patrik Nasufi  
- **`prolder-company/`** - Company website for Prolder Solutions (main domain)

## Development Commands

### Universal Commands (All Projects)
```bash
# Navigate to any project directory first
cd portfolio-rea/    # or portfolio-react/ or prolder-company/

# Core development workflow
npm install           # Install dependencies
npm run dev          # Development server (http://localhost:5173)
npm run build        # Production build
npm run lint         # Code quality checks
npm run preview      # Preview production build
```

### Project-Specific Build Commands
```bash
# Prolder Company (includes TypeScript compilation)
npm run build        # tsc -b && vite build

# Portfolio projects (standard Vite build)
npm run build        # vite build
```

## Architecture Overview

### Technology Stack
- **React 19.1.0** with TypeScript 5.8.3
- **Vite 7.0.4** for build tooling and development
- **ESLint 9.30.1** with TypeScript integration
- **Framer Motion 12.23.6** (portfolio projects only)
- **React Intersection Observer 9.16.0** (portfolio projects only)

### Multi-Site Deployment Architecture

This workspace implements a sophisticated **proxy-based routing system** using Netlify `_redirects` files:

**Prolder Company (Main Domain):**
- Serves as the primary domain root
- Proxies to portfolio sites via `/patrik-nasufi/*` and `/reinalda-radomi/*`
- Base path: none (root deployment)

**Portfolio Sites:**
- **portfolio-react**: Base path `/patrik-nasufi/` - serves Patrik's software portfolio
- **portfolio-rea**: Base path `/reinalda-radomi/` - serves Reinalda's legal portfolio
- Each can proxy to other sites while serving local content

### Build Configuration Patterns

**Base Path Configuration:**
```typescript
// vite.config.ts patterns
export default defineConfig({
  plugins: [react()],
  base: '/patrik-nasufi/',    // portfolio-react
  base: '/reinalda-radomi/',  // portfolio-rea
  // base: undefined          // prolder-company (root)
})
```

**Redirect Patterns:**
All projects include `public/_redirects` files with cross-referencing proxy rules:
```
# Proxy to other sites (keeps domain)
/patrik-nasufi/* https://patrik-nasufi.netlify.app/:splat 200
/reinalda-radomi/* https://reinalda-radomi.netlify.app/:splat 200
/prolder-company/* https://prolder-solutions.netlify.app/:splat 200

# Fallback for SPA
/*    /index.html   200
```

## Component Architecture

### Portfolio Projects (Shared Patterns)

**Main Structure:**
- `App.tsx` - Main application orchestrating all sections
- `main.tsx` - Entry point with React StrictMode

**Common Section Components:**
- `Navbar.tsx` - Navigation with scroll-based active states
- `Hero.tsx` - Landing section with animations
- `About.tsx` - Professional summary with statistics
- `Experience.tsx` - Work timeline with detailed descriptions
- `Skills.tsx` - Technical skills showcase
- `Education.tsx` - Educational background
- `Contact.tsx` - Contact form and information
- `Footer.tsx` - Site footer

**Animation System (Portfolio Projects):**
- **Framer Motion** for transitions and effects
- **Intersection Observer** for scroll-triggered animations
- **Glass morphism effects** via CSS backdrop filters
- **Staggered animations** with 0.1-0.2s delays
- **Scroll threshold** set to 0.1 for early triggering

### Prolder Company (Minimal Structure)
- Basic React setup without animation dependencies
- Focused on company presentation and branding

## Styling Architecture

### CSS Organization
- **Global styles** in `App.css` with CSS custom properties
- **Component-specific sections** within the same file
- **Glass morphism utilities** (`.glass-effect`, `.glass-effect-dark`, `.glass-effect-light`)
- **Mobile-first responsive design**

### Design System Patterns
- **CSS Variables** for consistent theming
- **Professional color palettes** tailored to each project's domain
- **Typography hierarchy** using Google Fonts (Open Sans, Roboto, Playfair Display)
- **Animation timing** standardized at 0.6s with cubic-bezier easing

## Critical Development Considerations

### Multi-Project Coordination
- **Base path configuration** is crucial for subdirectory deployment
- **Asset paths** must be relative to base path for proper loading
- **Redirect files** must be updated when changing deployment structure

### Performance Optimization
- **React.memo()** used for expensive components
- **Intersection Observer** for efficient scroll detection
- **Transform and opacity** preferred for smooth animations
- **Proper dependency arrays** to prevent unnecessary re-renders

### Build and Deployment Workflow
1. **Development**: Work on individual projects independently
2. **Testing**: Verify cross-references work via `npm run preview`
3. **Building**: Build all projects with correct base paths
4. **Deployment**: Deploy to separate Netlify sites with proxy configuration

## Project-Specific Context

### Portfolio-rea (Legal Professional)
- **Theme**: Professional legal with blues and grays
- **Icons**: Legal-themed (scales of justice, gavel, university)
- **Content**: Embedded in components, CV in `/public/ReinaldaRadomiCV.pdf`
- **Logo**: "RR" text-based branding

### Portfolio-react (Software Development)
- **Theme**: Modern tech-focused design
- **Features**: Prolder Solutions logo integration ready
- **Content**: Software development experience and projects
- **Logo**: Can use PS.png or text-based branding

### Prolder-company (Company Website)
- **Theme**: Corporate branding and presentation
- **Purpose**: Main domain serving company information
- **Logo**: PS.png company logo
- **Architecture**: Minimal dependencies for fast loading

## Troubleshooting Common Issues

### White Screen on Subdirectory Deployment
- **Cause**: Incorrect base path configuration
- **Solution**: Ensure `vite.config.ts` base path matches deployment subdirectory

### Cross-Reference Links Not Working
- **Cause**: Incorrect redirect configuration or missing `_redirects` file
- **Solution**: Verify all projects have updated `_redirects` files with correct URLs

### Animation Performance Issues
- **Cause**: Animating layout properties or missing `will-change`
- **Solution**: Use `transform` and `opacity` only, add `will-change` for complex animations

## Essential File Locations

### Configuration Files
- `vite.config.ts` - Build configuration and base path
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - Code quality rules
- `package.json` - Dependencies and scripts

### Deployment Files
- `public/_redirects` - Netlify routing configuration
- `dist/` - Production build output
- `public/` - Static assets (images, PDFs, favicon)

### Documentation
- `portfolio-rea/CLAUDE.md` - Detailed single-project documentation
- `README.md` - Project-specific setup instructions (each project)