// Environment-based link configuration
interface LinkConfig {
  base: string;
  patrik: string;
  reinalda: string;
  prolder: string;
}

const isDevelopment = import.meta.env.DEV;

// Development URLs (localhost)
const developmentLinks: LinkConfig = {
  base: 'http://localhost:5175', // This project's dev port
  patrik: 'http://localhost:5174',
  reinalda: 'http://localhost:5175',
  prolder: 'http://localhost:5173'
};

// Production URLs
const productionLinks: LinkConfig = {
  base: 'https://prolder.com/reinalda-radomi',
  patrik: 'https://prolder.com/patrik-nasufi',
  reinalda: 'https://prolder.com/reinalda-radomi',
  prolder: 'https://prolder.com'
};

export const links = isDevelopment ? developmentLinks : productionLinks;

// Utility functions for generating links
export const getPatrikPortfolioLink = () => links.patrik;
export const getReinaldaPortfolioLink = () => links.reinalda;
export const getProlderLink = () => links.prolder;

// For navigation within the same site
export const getInternalLink = (section: string) => `#${section}`;