import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Star, ArrowRight, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const features = [
    {
      icon: Clock,
      title: t('feature.fastService'),
      description: t('feature.fastServiceDesc'),
      bgColor: "bg-blue-600"
    },
    {
      icon: Star,
      title: t('feature.qualityFood'),
      description: t('feature.qualityFoodDesc'),
      bgColor: "bg-green-600"
    },
    {
      icon: MapPin,
      title: t('feature.greatLocation'),
      description: t('feature.greatLocationDesc'),
      bgColor: "bg-orange-600"
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-red-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-500 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Star className="w-4 h-4 mr-2 fill-current" />
                {t('home.subtitle')}
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
              >
                {t('home.title')}
                <span className="block text-gradient mt-2">Quick Bite</span>
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
              >
                {t('home.description')}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              >
                <Link to="/products" className="group bg-gradient-primary text-white px-8 py-4 lg:px-12 lg:py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center">
                  <span>{t('home.viewMenu')}</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a href="tel:+1234567890" className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 lg:px-12 lg:py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:border-orange-500">
                  {t('home.callUs')}
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Food Gallery */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
                  <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                    <div className="text-6xl lg:text-8xl mb-4">🍔</div>
                    <h3 className="font-bold text-gray-900 lg:text-lg">Hamburgers</h3>
                  </div>
                  <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                    <div className="text-6xl lg:text-8xl mb-4">🍕</div>
                    <h3 className="font-bold text-gray-900 lg:text-lg">Pizza</h3>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6 mt-8">
                  <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                    <div className="text-6xl lg:text-8xl mb-4">🥤</div>
                    <h3 className="font-bold text-gray-900 lg:text-lg">Drinks</h3>
                  </div>
                  <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                    <div className="text-6xl lg:text-8xl mb-4">🍗</div>
                    <h3 className="font-bold text-gray-900 lg:text-lg">Chicken</h3>
                  </div>
                </motion.div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg"
              >
                Fast & Fresh!
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              {t('home.whyChoose')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              {t('home.committed')}
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`w-20 h-20 lg:w-24 lg:h-24 ${feature.bgColor} rounded-2xl mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 lg:text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8"
            >
              {t('home.readyToOrder')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-2xl mb-12 lg:mb-16 text-orange-100 leading-relaxed max-w-4xl mx-auto"
            >
              {t('home.browseMenu')}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-gray-900 px-12 py-5 lg:px-16 lg:py-6 rounded-2xl font-bold text-lg lg:text-xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center"
                >
                  <span>{t('home.exploreMenu')}</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <p className="text-white/80 text-sm mb-2">Or call us directly</p>
                <a href="tel:+1234567890" className="text-2xl lg:text-3xl font-bold text-white hover:text-yellow-200 transition-colors">
                  📞 +123 456 7890
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;