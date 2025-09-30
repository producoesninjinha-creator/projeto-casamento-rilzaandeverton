import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ActionsPage = ({ onConfirm }) => {
  const handleGiftList = () => {
    window.open('https://noivos.casar.com/rilzaeeverton', '_blank');
  };

  const handleLocation = () => {
    window.open('https://www.google.com/maps/place/Par%C3%B3quia+Senhor+do+Bonfim/@-10.8229101,-42.7342049,17z/data=!3m1!4b1!4m6!3m5!1s0x765935f2584188b:0xbc7ec0fe798d59c!8m2!3d-10.8229154!4d-42.73163!16s%2Fg%2F11fhrhkh_q?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-3"
            >
              <Heart className="w-8 h-8 text-rose-500" />
              <h1 className="text-4xl md:text-5xl font-serif text-gray-800">Rilza & Everton</h1>
              <Heart className="w-8 h-8 text-rose-500" />
            </motion.div>
            <p className="text-lg text-gray-600">Sua presença é o nosso maior presente!</p>
          </div>

          {/* Photos space */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            <img className="w-full h-48 object-cover rounded-lg shadow-md" alt="Foto do casal 1" src="https://horizons-cdn.hostinger.com/87ed7524-7c89-43bf-98e7-c5bf5165b77c/ef21ee58d1b4356a6d1838de40ccb91e.jpg" />
            <img className="w-full h-48 object-cover object-center rounded-lg shadow-md" alt="Foto do casal 2" src="https://horizons-cdn.hostinger.com/87ed7524-7c89-43bf-98e7-c5bf5165b77c/8d693613011afade1dbfa829a2f2c05e.jpg" />
            <img className="w-full h-48 object-cover rounded-lg shadow-md" alt="Foto do casal 3" src="https://horizons-cdn.hostinger.com/87ed7524-7c89-43bf-98e7-c5bf5165b77c/66bf92a4f58aed9cb1554eefaf8790e7.jpg" />
            <img className="w-full h-48 object-cover rounded-lg shadow-md" alt="Foto do casal 4" src="https://horizons-cdn.hostinger.com/87ed7524-7c89-43bf-98e7-c5bf5165b77c/4cc21d97f91b3b3612678cd3fbf3e22d.jpg" />
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {/* Confirm presence */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Confirmar Presença</h3>
                <p className="text-gray-600 text-sm">Confirme sua presença em nosso grande dia</p>
                <Button
                  onClick={onConfirm}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Confirmar
                </Button>
              </div>
            </motion.div>

            {/* Gift list */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Lista de Presentes</h3>
                <p className="text-gray-600 text-sm">Veja nossa lista de presentes especiais</p>
                <Button
                  onClick={handleGiftList}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Ver Lista
                </Button>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Localização</h3>
                <p className="text-gray-600 text-sm">Veja como chegar ao local da cerimônia</p>
                <Button
                  onClick={handleLocation}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Ver no Mapa
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ActionsPage;