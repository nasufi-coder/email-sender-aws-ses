import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ImageModal from '../components/ImageModal';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  placeholderImage?: string;
  rating: number;
  category: string;
  popular?: boolean;
  ingredients?: {
    en: string[];
    al: string[];
  };
}

const Products = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalImage, setModalImage] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    name: string;
  }>({
    isOpen: false,
    src: '',
    alt: '',
    name: ''
  });

  const openImageModal = (imageSrc: string, imageAlt: string, productName: string) => {
    setModalImage({
      isOpen: true,
      src: imageSrc,
      alt: imageAlt,
      name: productName
    });
  };

  const closeImageModal = () => {
    setModalImage({
      isOpen: false,
      src: '',
      alt: '',
      name: ''
    });
  };

  const categoryKeys = ['all', 'fastFood', 'guzhina', 'pizza', 'hotDrinks', 'coldDrinks', 'alcoholic'];
  const categories = categoryKeys.map(key => ({
    key,
    label: t(`category.${key}`),
    value: key === 'all' ? 'All' : 
           key === 'fastFood' ? 'Fast Food' :
           key === 'guzhina' ? 'Guzhina' :
           key === 'pizza' ? 'Pizza' :
           key === 'hotDrinks' ? 'Hot Drinks' :
           key === 'coldDrinks' ? 'Cold Drinks' :
           'Alcoholic'
  }));

  const products: Product[] = [
    // Fast Food
    {
      id: 1,
      name: "Sufllaqe",
      description: "Traditional Albanian layered pastry with meat",
      price: 3.50,
      image: "🌯",
      placeholderImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Fast Food",
      popular: true,
      ingredients: {
        en: ["Phyllo pastry", "Ground meat", "Onions", "Spices", "Olive oil"],
        al: ["Brumi sufllaqeje", "Mish i grirë", "Qepë", "Erëza", "Vaj ulliri"]
      }
    },
    {
      id: 2,
      name: "Doner",
      description: "Turkish style rotating meat kebab in pita",
      price: 4.00,
      image: "🥙",
      placeholderImage: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Fast Food",
      popular: true,
      ingredients: {
        en: ["Lamb meat", "Pita bread", "Onions", "Tomatoes", "Yogurt sauce", "Spices"],
        al: ["Mish qengji", "Bukë pita", "Qepë", "Domate", "Salcë kosi", "Erëza"]
      }
    },
    {
      id: 3,
      name: "Shawarma",
      description: "Middle Eastern wrap with marinated meat",
      price: 4.50,
      image: "🌯",
      placeholderImage: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Fast Food",
      ingredients: {
        en: ["Chicken", "Pita bread", "Garlic sauce", "Lettuce", "Tomatoes", "Onions", "Spices"],
        al: ["Mish pule", "Bukë pita", "Salcë hudhre", "Lakër jeshile", "Domate", "Qepë", "Erëza"]
      }
    },
    {
      id: 4,
      name: "Hot-dog",
      description: "Classic grilled sausage in a bun",
      price: 2.50,
      image: "🌭",
      placeholderImage: "https://images.unsplash.com/photo-1552913903-8b2deb7c8b43?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Fast Food",
      ingredients: {
        en: ["Beef sausage", "Hot dog bun", "Mustard", "Ketchup", "Onions"],
        al: ["Suxhuk viçi", "Bukë hot-dog", "Mustardë", "Ketchup", "Qepë"]
      }
    },
    {
      id: 5,
      name: "Sandwich",
      description: "Fresh sandwich with your choice of filling",
      price: 3.00,
      image: "🥪",
      placeholderImage: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop",
      rating: 4.2,
      category: "Fast Food",
      ingredients: {
        en: ["White bread", "Turkey", "Lettuce", "Tomato", "Cheese", "Mayo"],
        al: ["Bukë e bardhë", "Mish gjeldeti", "Lakër jeshile", "Domate", "Djathë", "Majonezë"]
      }
    },
    {
      id: 6,
      name: "Hamburger",
      description: "Classic beef burger with fresh toppings",
      price: 5.00,
      image: "🍔",
      placeholderImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Fast Food",
      ingredients: {
        en: ["Beef patty", "Burger bun", "Lettuce", "Tomato", "Onion", "Pickles", "Special sauce"],
        al: ["Biftek viçi", "Bukë hamburgeri", "Lakër jeshile", "Domate", "Qepë", "Turshi", "Salcë speciale"]
      }
    },
    {
      id: 7,
      name: "Chicken Nuggets me Patate",
      description: "Crispy chicken nuggets served with fries",
      price: 6.00,
      image: "🍗",
      placeholderImage: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Fast Food",
      ingredients: {
        en: ["Chicken breast", "Breadcrumbs", "Potatoes", "Flour", "Spices", "Oil"],
        al: ["Gjoks pule", "Thërrime buke", "Patate", "Miell", "Erëza", "Vaj"]
      }
    },
    {
      id: 8,
      name: "Shawarma me Kotolet Pule",
      description: "Chicken cutlet shawarma wrap",
      price: 5.50,
      image: "🌯",
      placeholderImage: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Fast Food",
      ingredients: ["Chicken cutlet", "Lavash bread", "Yogurt sauce", "Cabbage", "Tomatoes", "Pickles"]
    },
    {
      id: 9,
      name: "Hamburger i Hapur",
      description: "Open-face hamburger with toppings",
      price: 5.50,
      image: "🍔",
      placeholderImage: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Fast Food",
      ingredients: ["Beef patty", "Bun", "Cheese", "Lettuce", "Tomato", "Red onion", "Special sauce"]
    },
    {
      id: 10,
      name: "Samune me Suxhuk",
      description: "Pita bread with Albanian sausage",
      price: 3.50,
      image: "🥙",
      placeholderImage: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Fast Food",
      ingredients: {
        en: ["Pita bread", "Albanian sausage", "Onions", "Peppers", "Yogurt sauce"],
        al: ["Bukë pita", "Suxhuk shqiptar", "Qepë", "Spec", "Salcë kosi"]
      }
    },
    {
      id: 11,
      name: "Samune me Mish Pule",
      description: "Pita bread with chicken meat",
      price: 4.00,
      image: "🥙",
      placeholderImage: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Fast Food",
      ingredients: ["Pita bread", "Grilled chicken", "Lettuce", "Tomatoes", "Cucumber", "Tzatziki sauce"]
    },
    {
      id: 12,
      name: "Samune me Djath",
      description: "Pita bread with cheese",
      price: 3.00,
      image: "🥙",
      placeholderImage: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop",
      rating: 4.2,
      category: "Fast Food",
      ingredients: ["Pita bread", "White cheese", "Feta cheese", "Tomatoes", "Olives", "Olive oil"]
    },
    {
      id: 13,
      name: "Samune me Proshute",
      description: "Pita bread with ham",
      price: 4.00,
      image: "🥙",
      placeholderImage: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Fast Food",
      ingredients: ["Pita bread", "Ham", "Cheese", "Lettuce", "Tomato", "Mayo"]
    },
    {
      id: 14,
      name: "Tost",
      description: "Grilled toast sandwich",
      price: 2.50,
      image: "🥪",
      placeholderImage: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
      rating: 4.1,
      category: "Fast Food",
      ingredients: ["White bread", "Ham", "Cheese", "Butter"]
    },
    
    // Guzhina (Kitchen/Main Dishes)
    {
      id: 15,
      name: "Nje Pule me Vete",
      description: "Whole chicken by itself",
      price: 12.00,
      image: "🍗",
      placeholderImage: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Guzhina",
      popular: true,
      ingredients: {
        en: ["Whole chicken", "Garlic", "Herbs", "Salt", "Black pepper", "Olive oil"],
        al: ["Pule e tërë", "Hudhra", "Erëza", "Kripë", "Piper i zi", "Vaj ulliri"]
      }
    },
    {
      id: 16,
      name: "Nje Pule Tavoline",
      description: "Whole chicken for the table",
      price: 15.00,
      image: "🍗",
      placeholderImage: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
      rating: 4.9,
      category: "Guzhina",
      ingredients: ["Whole chicken", "Potatoes", "Rice", "Salad", "Garlic", "Herbs", "Olive oil"]
    },
    {
      id: 17,
      name: "Gjysme Pule Garniture",
      description: "Half chicken with side dishes",
      price: 8.00,
      image: "🍗",
      placeholderImage: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Guzhina",
      ingredients: ["Half chicken", "French fries", "Rice", "Mixed salad", "Lemon", "Herbs"]
    },
    {
      id: 18,
      name: "10 Qofte Qebap",
      description: "10 Albanian meatballs kebab style",
      price: 7.00,
      image: "🍢",
      placeholderImage: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Guzhina",
      ingredients: ["Ground beef", "Ground lamb", "Onions", "Bread crumbs", "Egg", "Parsley", "Spices"]
    },
    {
      id: 19,
      name: "10 Qofte (Qebap) me Garniture",
      description: "10 meatball kebabs with side dishes",
      price: 9.00,
      image: "🍢",
      placeholderImage: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Guzhina",
      ingredients: ["Ground beef", "Ground lamb", "Rice", "French fries", "Salad", "Onions", "Yogurt sauce"]
    },
    {
      id: 20,
      name: "5 Qofte Garniture",
      description: "5 meatballs with side dishes",
      price: 5.50,
      image: "🍢",
      placeholderImage: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Guzhina",
      ingredients: ["Ground beef", "Ground lamb", "French fries", "Mixed salad", "Bread", "Onions"]
    },
    {
      id: 21,
      name: "Berxolle me Garniture",
      description: "Lamb chops with side dishes",
      price: 10.00,
      image: "🥩",
      placeholderImage: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Guzhina",
      ingredients: ["Lamb chops", "Rosemary", "Garlic", "Olive oil", "Potatoes", "Vegetables", "Salt", "Black pepper"]
    },
    {
      id: 22,
      name: "Fileto Pule",
      description: "Chicken fillet grilled to perfection",
      price: 7.50,
      image: "🍗",
      placeholderImage: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Guzhina",
      ingredients: ["Chicken breast", "Garlic", "Herbs", "Olive oil", "Lemon", "Black pepper"]
    },
    {
      id: 23,
      name: "Peshk Zgare",
      description: "Grilled fish fresh from the sea",
      price: 9.00,
      image: "🐟",
      placeholderImage: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Guzhina",
      ingredients: ["Fresh fish", "Lemon", "Olive oil", "Garlic", "Herbs", "Sea salt"]
    },
    {
      id: 24,
      name: "Omlet",
      description: "Fresh egg omelet with herbs",
      price: 3.00,
      image: "🍳",
      placeholderImage: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Guzhina",
      ingredients: ["Fresh eggs", "Butter", "Parsley", "Dill", "Salt", "Pepper"]
    },
    {
      id: 25,
      name: "Sallate",
      description: "Fresh mixed salad",
      price: 2.50,
      image: "🥗",
      placeholderImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      rating: 4.2,
      category: "Guzhina",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Onions", "Olive oil", "Vinegar", "Salt"]
    },
    {
      id: 26,
      name: "Patate",
      description: "Crispy golden potatoes",
      price: 2.00,
      image: "🍟",
      placeholderImage: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Guzhina",
      ingredients: ["Potatoes", "Vegetable oil", "Salt"]
    },
    {
      id: 27,
      name: "Salc Kosi",
      description: "Traditional yogurt sauce",
      price: 1.50,
      image: "🥛",
      placeholderImage: "https://images.unsplash.com/photo-1571212515416-fca4f1e21104?w=400&h=300&fit=crop",
      rating: 4.1,
      category: "Guzhina",
      ingredients: {
        en: ["Greek yogurt", "Garlic", "Cucumber", "Dill", "Salt", "Olive oil"],
        al: ["Kos grek", "Hudhra", "Trangull", "Kapare", "Kripë", "Vaj ulliri"]
      }
    },
    
    // Pizza
    {
      id: 28,
      name: "Margarita",
      description: "Classic pizza with tomato, mozzarella and basil",
      price: 8.00,
      image: "🍕",
      placeholderImage: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Pizza",
      popular: true,
      ingredients: {
        en: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh basil", "Olive oil"],
        al: ["Brumi pice", "Salcë domatesh", "Djathë mozzarella", "Borzilok i freskët", "Vaj ulliri"]
      }
    },
    {
      id: 29,
      name: "Proshute",
      description: "Pizza with ham and mozzarella",
      price: 10.00,
      image: "🍕",
      placeholderImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Pizza",
      ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Ham", "Olive oil"]
    },
    {
      id: 30,
      name: "Kerpudha",
      description: "Mushroom pizza with cheese",
      price: 9.00,
      image: "🍕",
      placeholderImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Pizza",
      ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh mushrooms", "Oregano"]
    },
    {
      id: 31,
      name: "Kapricoza",
      description: "Pizza with ham, mushrooms, artichokes and olives",
      price: 11.00,
      image: "🍕",
      placeholderImage: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Pizza",
      ingredients: {
        en: ["Pizza dough", "Tomato sauce", "Mozzarella", "Ham", "Mushrooms", "Artichokes", "Olives"],
        al: ["Brumi pice", "Salcë domatesh", "Mozzarella", "Proshutë", "Kërpudha", "Anginare", "Ullinj"]
      }
    },
    {
      id: 32,
      name: "4 Stinet",
      description: "Four seasons pizza with varied toppings",
      price: 12.00,
      image: "🍕",
      placeholderImage: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Pizza",
      ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Ham", "Mushrooms", "Artichokes", "Pepperoni", "Olives"]
    },
    {
      id: 33,
      name: "Ton",
      description: "Tuna pizza with onions and cheese",
      price: 10.50,
      image: "🍕",
      placeholderImage: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Pizza",
      ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Tuna", "Red onions", "Capers"]
    },
    {
      id: 34,
      name: "Suxhuk",
      description: "Pizza with Albanian sausage",
      price: 9.50,
      image: "🍕",
      placeholderImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Pizza",
      ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Albanian sausage", "Bell peppers", "Onions"]
    },
    
    // Hot Drinks
    {
      id: 35,
      name: "Kafe",
      description: "Traditional Albanian coffee",
      price: 1.50,
      image: "☕",
      placeholderImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Hot Drinks",
      ingredients: {
        en: ["Ground coffee beans", "Hot water", "Sugar (optional)"],
        al: ["Kafë e blërë", "Ujë i nxehtë", "Shekër (opsionale)"]
      }
    },
    {
      id: 36,
      name: "Makiato",
      description: "Italian macchiato coffee",
      price: 2.00,
      image: "☕",
      placeholderImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Hot Drinks",
      ingredients: {
        en: ["Espresso", "Steamed milk", "Milk foam"],
        al: ["Espresso", "Qumësht i avulluar", "Shkumë qumështi"]
      }
    },
    {
      id: 37,
      name: "Makiato e Madhe",
      description: "Large macchiato coffee",
      price: 2.50,
      image: "☕",
      placeholderImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Hot Drinks",
      ingredients: ["Double espresso", "Extra steamed milk", "Milk foam"]
    },
    {
      id: 38,
      name: "Caj",
      description: "Traditional tea selection",
      price: 1.20,
      image: "🍵",
      placeholderImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Hot Drinks",
      ingredients: ["Tea leaves", "Hot water", "Honey (optional)", "Lemon (optional)"]
    },
    
    // Cold Drinks
    {
      id: 39,
      name: "Coca Cola",
      description: "Classic cola soft drink",
      price: 1.50,
      image: "🥤",
      placeholderImage: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop",
      rating: 4.2,
      category: "Cold Drinks",
      ingredients: {
        en: ["Carbonated water", "Sugar", "Caramel color", "Phosphoric acid", "Natural flavors", "Caffeine"],
        al: ["Ujë me gaz", "Shekër", "Ngjyrë karameli", "Acid fosforik", "Aromë natërore", "Kafeinë"]
      }
    },
    {
      id: 40,
      name: "Fanta",
      description: "Orange flavored soft drink",
      price: 1.50,
      image: "🥤",
      placeholderImage: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop",
      rating: 4.1,
      category: "Cold Drinks",
      ingredients: ["Carbonated water", "Sugar", "Orange juice concentrate", "Citric acid", "Natural flavors"]
    },
    {
      id: 41,
      name: "Sprite",
      description: "Lemon-lime soft drink",
      price: 1.50,
      image: "🥤",
      placeholderImage: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop",
      rating: 4.0,
      category: "Cold Drinks",
      ingredients: ["Carbonated water", "Sugar", "Lemon juice", "Lime juice", "Citric acid", "Natural flavors"]
    },
    {
      id: 42,
      name: "Ivi",
      description: "Albanian fruit juice",
      price: 1.80,
      image: "🧃",
      rating: 4.3,
      category: "Cold Drinks",
      ingredients: ["Fruit juice concentrate", "Water", "Sugar", "Citric acid", "Vitamin C"]
    },
    {
      id: 43,
      name: "Sola",
      description: "Albanian cola drink",
      price: 1.20,
      image: "🥤",
      rating: 4.0,
      category: "Cold Drinks",
      ingredients: ["Carbonated water", "Sugar", "Cola flavoring", "Citric acid", "Caffeine"]
    },
    {
      id: 44,
      name: "B52",
      description: "Energy drink",
      price: 2.00,
      image: "🥤",
      rating: 4.1,
      category: "Cold Drinks",
      ingredients: ["Carbonated water", "Sugar", "Taurine", "Caffeine", "B vitamins", "Artificial flavors"]
    },
    {
      id: 45,
      name: "Bravo",
      description: "Fruit flavored drink",
      price: 1.30,
      image: "🧃",
      rating: 4.0,
      category: "Cold Drinks",
      ingredients: ["Water", "Fruit flavoring", "Sugar", "Citric acid", "Preservatives"]
    },
    {
      id: 46,
      name: "Red Bull",
      description: "Premium energy drink",
      price: 2.50,
      image: "🥤",
      rating: 4.2,
      category: "Cold Drinks",
      ingredients: ["Carbonated water", "Sucrose", "Glucose", "Taurine", "Caffeine", "B vitamins", "Alpine water"]
    },
    {
      id: 47,
      name: "Uje",
      description: "Natural spring water",
      price: 0.80,
      image: "💧",
      placeholderImage: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Cold Drinks",
      ingredients: ["Pure spring water", "Natural minerals"]
    },
    {
      id: 48,
      name: "Dhalle",
      description: "Traditional Albanian yogurt drink",
      price: 1.50,
      image: "🥛",
      rating: 4.4,
      category: "Cold Drinks",
      ingredients: ["Yogurt", "Water", "Salt", "Mint (optional)"]
    },
    
    // Alcoholic Drinks
    {
      id: 49,
      name: "Raki",
      description: "Traditional Albanian brandy",
      price: 3.00,
      image: "🥃",
      placeholderImage: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Alcoholic",
      ingredients: ["Grapes", "Distilled alcohol", "Natural flavoring"]
    },
    {
      id: 50,
      name: "Korca e Vogel",
      description: "Small Albanian beer",
      price: 2.00,
      image: "🍺",
      placeholderImage: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Alcoholic",
      ingredients: {
        en: ["Water", "Barley malt", "Hops", "Yeast"],
        al: ["Ujë", "Malt elbi", "Lulushtrydhe", "Maya"]
      }
    },
    {
      id: 51,
      name: "Korca e Madhe",
      description: "Large Albanian beer",
      price: 3.00,
      image: "🍺",
      placeholderImage: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Alcoholic",
      ingredients: ["Water", "Barley malt", "Hops", "Yeast"]
    },
    {
      id: 52,
      name: "Peja",
      description: "Albanian premium beer",
      price: 2.50,
      image: "🍺",
      rating: 4.3,
      category: "Alcoholic",
      ingredients: ["Water", "Premium barley malt", "Noble hops", "Yeast"]
    },
    {
      id: 53,
      name: "Peroni",
      description: "Italian premium lager",
      price: 3.50,
      image: "🍺",
      rating: 4.6,
      category: "Alcoholic",
      ingredients: ["Water", "Barley malt", "Maize", "Hop pellets", "Yeast"]
    },
    {
      id: 54,
      name: "Tuborg",
      description: "Danish lager beer",
      price: 3.00,
      image: "🍺",
      rating: 4.4,
      category: "Alcoholic",
      ingredients: ["Water", "Barley malt", "Rice", "Hops", "Yeast"]
    },
    {
      id: 55,
      name: "Heineken",
      description: "Dutch premium lager",
      price: 3.50,
      image: "🍺",
      rating: 4.5,
      category: "Alcoholic",
      ingredients: ["Water", "Barley malt", "Hops", "Proprietary A-yeast"]
    },
    {
      id: 56,
      name: "Bavaria 0% Alkol",
      description: "Non-alcoholic beer",
      price: 2.50,
      image: "🍺",
      rating: 4.2,
      category: "Alcoholic",
      ingredients: ["Water", "Barley malt", "Hops", "Natural flavoring", "Yeast extract"]
    },
    {
      id: 57,
      name: "1 Gote Vere",
      description: "One glass of wine",
      price: 4.00,
      image: "🍷",
      placeholderImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Alcoholic",
      ingredients: ["Red grapes", "Natural yeast", "Sulfites"]
    },
    {
      id: 58,
      name: "1 Liter Vere",
      description: "One liter of house wine",
      price: 15.00,
      image: "🍷",
      rating: 4.3,
      category: "Alcoholic",
      ingredients: ["Red grapes", "Natural yeast", "Sulfites"]
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-primary text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6">
              {t('menu.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-2xl text-orange-100 max-w-4xl mx-auto px-4">
              {t('menu.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Width Container */}
      <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Category Filter - Desktop Centered */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 lg:gap-6"
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-semibold transition-all text-sm sm:text-base lg:text-lg whitespace-nowrap ${
                  selectedCategory === category.value
                    ? 'bg-gradient-primary text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-500 hover:shadow-lg hover:scale-105'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Products Grid - 4 columns on desktop */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                className="desktop-product-card"
              >
                {product.popular && (
                  <div className="absolute top-3 left-3 z-10 bg-gradient-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                    {t('common.popular')}
                  </div>
                )}
                
                {/* Image Section */}
                <div 
                  className="desktop-product-image cursor-pointer"
                  onClick={() => openImageModal(
                    product.placeholderImage || `https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&q=80`,
                    product.name,
                    product.name
                  )}
                >
                  <img 
                    src={product.placeholderImage || `https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&q=80`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.setAttribute('style', 'display: flex');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-orange-100 to-red-100 items-center justify-center">
                    <span className="text-6xl lg:text-8xl">{product.image}</span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="bg-white rounded-full p-3 lg:p-4 shadow-lg">
                      <svg className="w-6 h-6 lg:w-8 lg:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 lg:p-6 flex-1 flex flex-col">

                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight flex-1 mr-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs sm:text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Ingredients */}
                  {product.ingredients && (
                    <div className="mb-3 sm:mb-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">
                        {t('common.ingredients')}:
                      </p>
                      <div className="space-y-1">
                        {(product.ingredients.al && product.ingredients.en ? 
                          (language === 'al' ? product.ingredients.al : product.ingredients.en) :
                          (product.ingredients as any)
                        ).map((ingredient: string, index: number) => (
                          <div 
                            key={index}
                            className="text-xs text-gray-600 leading-relaxed"
                          >
                            • {ingredient}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 sm:py-20"
          >
            <div className="text-4xl sm:text-6xl mb-4">🍽️</div>
            <p className="text-gray-500 text-lg sm:text-xl">{t('menu.noProducts')}</p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeImageModal}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
        productName={modalImage.name}
      />

    </div>
  );
};

export default Products;