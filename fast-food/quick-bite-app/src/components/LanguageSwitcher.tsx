import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0 bg-white bg-opacity-90 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setLanguage('al')}
        className={`mobile-touch px-3 py-2 text-xs sm:text-sm font-semibold transition-colors ${
          language === 'al'
            ? 'bg-gradient-primary text-white'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        AL
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setLanguage('en')}
        className={`mobile-touch px-3 py-2 text-xs sm:text-sm font-semibold transition-colors ${
          language === 'en'
            ? 'bg-gradient-primary text-white'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        EN
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;