# Patrik Nasufi - Portfolio

A modern, responsive React portfolio showcasing Patrik Nasufi's software development experience and skills.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **React + TypeScript**: Built with modern React and TypeScript
- **Fast Performance**: Optimized for fast loading and smooth interactions

## Sections

- **Hero**: Introduction with animated background elements
- **About**: Professional summary with statistics and core technologies
- **Experience**: Timeline of work experience with detailed descriptions
- **Skills**: Technical skills organized by category
- **Education**: Educational background
- **Contact**: Contact form and social links

## Technologies Used

- React 18+ with TypeScript
- Framer Motion for animations
- Vite for build tooling
- CSS3 with modern features
- Font Awesome for icons
- Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section with animations
│   ├── About.tsx       # About section with stats
│   ├── Experience.tsx  # Work experience timeline
│   ├── Skills.tsx      # Technical skills grid
│   ├── Education.tsx   # Education background
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main app component
├── App.css             # Global styles
└── main.tsx            # Entry point
```

## Customization

### Personal Information

Update the content in each component to reflect your own information:
- `Hero.tsx`: Name, title, and description
- `About.tsx`: Professional summary and statistics
- `Experience.tsx`: Work experience details
- `Skills.tsx`: Technical skills and categories
- `Education.tsx`: Educational background
- `Contact.tsx`: Contact information

### Styling

- Colors and design tokens are defined in CSS custom properties in `App.css`
- Modify the `:root` section to change the color scheme
- Each component has its own CSS section for easy customization

### Animations

- Animations are implemented using Framer Motion
- Customize animation timing, easing, and effects in each component
- Use `useInView` hook for scroll-triggered animations

## Deployment

The built files in the `dist` folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please contact:
- Email: patrik.nasufi@email.com
- LinkedIn: linkedin.com/in/patrik-nasufi
- GitHub: github.com/patriknasufi