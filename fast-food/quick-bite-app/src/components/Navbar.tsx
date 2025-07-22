import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 navbar"
    >
      <div className="container">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
              <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold text-gradient">
              Quick Bite
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`mobile-touch flex items-center justify-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-colors ${
                  location.pathname === '/'
                    ? 'bg-gradient-primary text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="text-xs sm:text-sm hidden xs:block sm:block">{t('nav.home')}</span>
              </motion.div>
            </Link>

            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`mobile-touch flex items-center justify-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-colors ${
                  location.pathname === '/products'
                    ? 'bg-gradient-primary text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span className="text-xs sm:text-sm hidden xs:block sm:block">{t('nav.menu')}</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;