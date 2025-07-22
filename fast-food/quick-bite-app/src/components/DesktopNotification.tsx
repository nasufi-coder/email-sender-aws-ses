import { motion } from 'framer-motion';
import { Smartphone, Monitor, QrCode } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DesktopNotification = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-8 max-w-md mx-auto text-center shadow-xl"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Monitor className="w-16 h-16 text-gray-400" />
            <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1">
              <span className="text-white text-xs">✕</span>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-red-600 mb-2"
        >
          {t('desktop.title')}
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg font-semibold text-gray-800 mb-4"
        >
          📱 Mobile Required
        </motion.p>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-orange-500 text-xl">⚠️</span>
            <span className="font-semibold text-orange-800">Mobile Device Required</span>
          </div>
          <p className="text-orange-700 text-sm">
            This website only works on mobile phones (screen width under 600px)
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          {t('desktop.description')}
        </motion.p>

        {/* Mobile Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-green-100 rounded-full p-4">
            <Smartphone className="w-12 h-12 text-green-600" />
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="space-y-3 text-sm text-gray-600"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-semibold text-xs">1</span>
            </div>
            <span>{t('desktop.step1')}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-semibold text-xs">2</span>
            </div>
            <span>{t('desktop.step2')}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <QrCode className="w-3 h-3 text-blue-600" />
            </div>
            <span>{t('desktop.step3')}</span>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8 pt-6 border-t border-gray-100"
        >
          <div className="text-orange-600 font-bold text-xl mb-1">Quick Bite</div>
          <div className="text-gray-500 text-sm">{t('desktop.footer')}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DesktopNotification;