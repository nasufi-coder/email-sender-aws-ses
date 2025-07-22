import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  productName: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt, productName }: ImageModalProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-60 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            <X className="w-6 h-6 text-gray-800" />
          </motion.button>

          {/* Zoom Toggle Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={toggleZoom}
            className="absolute top-4 left-4 z-60 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            {isZoomed ? (
              <ZoomOut className="w-6 h-6 text-gray-800" />
            ) : (
              <ZoomIn className="w-6 h-6 text-gray-800" />
            )}
          </motion.button>

          {/* Product Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 z-60 bg-white bg-opacity-90 rounded-full px-4 py-2"
          >
            <h3 className="text-gray-800 font-semibold text-sm">{productName}</h3>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`relative max-w-full max-h-full transition-transform duration-300 ${
              isZoomed ? 'transform scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={toggleZoom}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.setAttribute('style', 'display: flex');
              }}
            />
            
            {/* Fallback for broken images */}
            <div 
              className="hidden w-96 h-96 bg-gray-100 rounded-lg items-center justify-center"
              style={{ display: 'none' }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🍽️</div>
                <p className="text-gray-600">{productName}</p>
              </div>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60 bg-white bg-opacity-90 rounded-full px-4 py-2"
          >
            <p className="text-gray-800 text-xs">
              Tap image to zoom • Tap outside to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;