# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based legal professional portfolio website for Reinalda Radomi, built with modern web technologies. The site showcases legal expertise, professional experience, and includes sophisticated animations and interactive elements.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

### Installation
- `npm install` - Install all dependencies

## Architecture Overview

### Tech Stack
- **React 19.1.0** with TypeScript
- **Vite** as build tool and dev server
- **Framer Motion** for animations and transitions
- **React Intersection Observer** for scroll-triggered animations
- **React Icons** for iconography
- **ESLint** with TypeScript configuration

### Component Architecture

The application follows a component-based architecture with clear separation of concerns:

**Main App Structure:**
- `App.tsx` - Main application component that orchestrates all sections
- `main.tsx` - Entry point with React 19 StrictMode

**Core Sections (in order):**
1. `LoadingAnimation.tsx` - Initial loading animation
2. `LawIconAnimations.tsx` - Background legal-themed animations
3. `Navbar.tsx` - Navigation header
4. `Hero.tsx` - Landing section with profile and CTA buttons
5. `About.tsx` - Professional summary with statistics
6. `Experience.tsx` - Work experience timeline
7. `Skills.tsx` - Technical skills showcase
8. `Education.tsx` - Educational background
9. `Contact.tsx` - Contact form and information
10. `Footer.tsx` - Site footer

**Specialized Components:**
- `TextReveal.tsx` - Animated text reveal effects
- `LiquidGlassButton.tsx` - Custom button component with glass morphism
- `ProfessionalHighlights.tsx` - Professional achievements showcase
- `ScrollReveal.tsx` - Scroll-triggered animations
- Various animation components for visual effects

### Animation System

The project uses a sophisticated animation system built on Framer Motion:

**Key Animation Patterns:**
- **Scroll-triggered animations** using `useInView` hook
- **Staggered animations** for list items and content sections
- **Hover effects** with smooth transitions
- **Loading sequences** with coordinated timing
- **Glass morphism effects** with CSS backdrop filters

**Animation Timing:**
- Most animations use 0.6s duration with easing curves
- Stagger delays typically 0.1-0.2s between elements
- Scroll threshold set to 0.1 for early triggering

### Styling System

**CSS Organization:**
- `App.css` - Global styles, CSS variables, and component styles
- Uses CSS custom properties (CSS variables) for theming
- Glass morphism utility classes (`.glass-effect`, `.glass-effect-dark`, `.glass-effect-light`)
- Responsive design with mobile-first approach

**Design System:**
- **Color scheme** - Professional legal theme with blues and grays
- **Typography** - Open Sans, Roboto, and Playfair Display fonts
- **Spacing** - Consistent spacing scale using CSS variables
- **Animations** - Smooth transitions with cubic-bezier easing

### Content Architecture

**Personal Information Structure:**
- Profile data embedded directly in components
- CV/Resume file stored in `/public/ReinaldaRadomiCV.pdf`
- Profile image in `/public/images/profile.jpg`

**Legal Theme Elements:**
- Legal icons (scales of justice, gavel, university, etc.)
- Professional color palette
- Formal typography choices
- Legal terminology and professional language

## Key Development Considerations

### Performance Optimization
- Components use `React.memo()` where appropriate
- Intersection Observer for efficient scroll animations
- Lazy loading considerations for animations
- Optimized image loading

### Responsive Design
- Mobile-first CSS approach
- Breakpoints defined in CSS variables
- Touch-friendly interactions
- Responsive typography scaling

### TypeScript Integration
- Strict TypeScript configuration
- Proper component typing with `React.FC`
- Type-safe props and state management
- ESLint integration for code quality

### Animation Performance
- Use `transform` and `opacity` for smooth animations
- Avoid animating layout properties
- `will-change` property for complex animations
- Efficient re-renders with proper dependency arrays

## Development Workflow

### Making Changes
1. Start development server with `npm run dev`
2. Edit components in `/src/components/`
3. Test across different screen sizes
4. Run `npm run lint` to check code quality
5. Build with `npm run build` to verify production readiness

### Content Updates
- Personal information is embedded in individual components
- Update `Hero.tsx` for main profile information
- Modify `About.tsx` for professional summary
- Edit `Experience.tsx` for work history
- Update `Skills.tsx` for technical abilities

### Adding New Sections
- Create new component in `/src/components/`
- Import and add to `App.tsx` in appropriate order
- Add corresponding CSS section in `App.css`
- Consider scroll reveal animations for consistency

## Deployment Notes

- Built files output to `/dist/` directory
- Static assets served from `/public/`
- Compatible with static hosting services (Netlify, Vercel, etc.)
- No server-side rendering requirements