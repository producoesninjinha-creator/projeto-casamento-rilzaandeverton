import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Clock, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InviteContent = ({ onNext }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    'https://horizons-cdn.hostinger.com/87ed7524-7c89-43bf-98e7-c5bf5165b77c/94ef4496840b2d76b24956c671008af0.jpg',
    'https://horizons-cdn.hostinger.com/87ed7524-7c89-43bf-98e7-c5bf5165b77c/6d58868267acae301e19ddd7a615950e.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 0.5 : 0,
              scale: index === currentImageIndex ? 1.1 : 1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center filter grayscale"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/80 via-purple-900/70 to-rose-900/80" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-white mb-4"
            >
              Casamento
            </motion.h1>
            
            {/* Video space */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/Kr0XwYjaebg"
                  title="Vídeo do Casal"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg max-w-md mx-auto"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center space-x-4 text-3xl md:text-5xl font-serif"
            >
              <span className="text-pink-200">Rilza</span>
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-rose-400" />
              <span className="text-pink-200">Everton</span>
            </motion.div>
          </div>

          {/* Wedding details */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-pink-300" />
                <div>
                  <p className="text-lg font-semibold">20 de Dezembro de 2025</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-pink-300" />
                <div>
                  <p className="text-lg font-semibold">19h00</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-6 h-6 text-pink-300 mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="text-lg font-semibold mb-1">Igreja Senhor do Bonfim</p>
                <p className="text-pink-200">Igreja Matriz Senhor do Bonfim</p>
                <p className="text-pink-200">Sem número, Igreja - Centro</p>
                <p className="text-pink-200">Xique Xique - BA</p>
              </div>
            </div>
          </motion.div>

          {/* Continue button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button
              onClick={onNext}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Continuar
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InviteContent;