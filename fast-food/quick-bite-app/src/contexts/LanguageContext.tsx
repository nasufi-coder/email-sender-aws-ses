import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'al';

interface Translations {
  [key: string]: {
    en: string;
    al: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', al: 'Ballina' },
  'nav.menu': { en: 'Menu', al: 'Menyja' },
  
  // Home Page
  'home.title': { en: 'Delicious Food', al: 'Ushqim i Shijshëm' },
  'home.subtitle': { en: 'Made Fresh', al: 'I Përgatitur Fresh' },
  'home.description': { en: 'Experience exceptional taste and quality with Quick Bite. Fresh, hot meals made with premium ingredients.', al: 'Përjeto shijen dhe cilësinë e jashtëzakonshme me Quick Bite. Vakte të ngrohta dhe të freskëta me përbërës premium.' },
  'home.viewMenu': { en: 'View Menu', al: 'Shiko Menynë' },
  'home.callUs': { en: 'Call Us', al: 'Na Telefono' },
  'home.whyChoose': { en: 'Why Choose Quick Bite?', al: 'Pse Zgjidh Quick Bite?' },
  'home.committed': { en: "We're committed to delivering exceptional food experiences", al: 'Jemi të përkushtuar të ofrojmë përvojë të jashtëzakonshme ushqimi' },
  'home.readyToOrder': { en: 'Ready to Order?', al: 'Gati për të Porositur?' },
  'home.browseMenu': { en: 'Browse our delicious menu and taste the difference of quality ingredients!', al: 'Shfleto menynë tonë të shijshme dhe shijo ndryshimin e përbërësve cilësorë!' },
  'home.exploreMenu': { en: 'Explore Menu', al: 'Eksploro Menynë' },
  
  // Features
  'feature.fastService': { en: 'Fast Service', al: 'Shërbim i Shpejtë' },
  'feature.fastServiceDesc': { en: 'Quick preparation with quality ingredients', al: 'Përgatitje e shpejtë me përbërës cilësorë' },
  'feature.qualityFood': { en: 'Quality Food', al: 'Ushqim Cilësor' },
  'feature.qualityFoodDesc': { en: 'Made with fresh, premium ingredients', al: 'I përgatitur me përbërës të freskët dhe premium' },
  'feature.greatLocation': { en: 'Great Location', al: 'Lokacion i Shkëlqyer' },
  'feature.greatLocationDesc': { en: 'Conveniently located in the heart of the city', al: 'I vendosur në zemër të qytetit' },
  
  // Menu Page
  'menu.title': { en: 'Our Menu', al: 'Menyja Jonë' },
  'menu.description': { en: 'Fresh ingredients, bold flavors, made with love', al: 'Përbërës të freskët, shije të guximshme, të bëra me dashuri' },
  'menu.noProducts': { en: 'No products found in this category.', al: 'Nuk u gjetën produkte në këtë kategori.' },
  
  // Categories
  'category.all': { en: 'All', al: 'Të Gjitha' },
  'category.fastFood': { en: 'Fast Food', al: 'Fast Food' },
  'category.guzhina': { en: 'Main Dishes', al: 'Guzhina' },
  'category.pizza': { en: 'Pizza', al: 'Pica' },
  'category.hotDrinks': { en: 'Hot Drinks', al: 'Pije të Ngrohta' },
  'category.coldDrinks': { en: 'Cold Drinks', al: 'Pije Freskuese' },
  'category.alcoholic': { en: 'Alcoholic', al: 'Pije Alkoolike' },
  
  // Common
  'common.popular': { en: 'Popular', al: 'Popullor' },
  'common.price': { en: 'Price', al: 'Çmimi' },
  'common.rating': { en: 'Rating', al: 'Vlerësimi' },
  'common.ingredients': { en: 'Ingredients', al: 'Përbërësit' },
  
  // Desktop Notification
  'desktop.title': { en: 'Please Use Your Mobile Device', al: 'Ju Lutem Përdorni Pajisjen Celulare' },
  'desktop.description': { en: 'This website is designed exclusively for mobile devices. To access Quick Bite restaurant menu and features, please switch to your smartphone.', al: 'Kjo faqe interneti është dizajnuar ekskluzivisht për pajisje celulare. Për të hyrë në menynë dhe veçoritë e Quick Bite, ju lutem kaloni në telefonin tuaj.' },
  'desktop.step1': { en: 'Take out your mobile phone', al: 'Nxirrni telefonin tuaj celular' },
  'desktop.step2': { en: 'Open this same website URL', al: 'Hapni të njëjtin URL të faqes' },
  'desktop.step3': { en: 'Enjoy the mobile experience!', al: 'Shijoni përvojën celulare!' },
  'desktop.footer': { en: 'Albanian Fast Food Restaurant', al: 'Restorant Shqiptar Fast Food' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('al'); // Default to Albanian

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};