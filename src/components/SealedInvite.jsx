import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const SealedInvite = ({ onOpen }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4"
        >
          <Sparkles className="w-6 h-6 text-pink-400 opacity-60" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4"
        >
          <Heart className="w-5 h-5 text-rose-400 opacity-60" />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Invitation envelope */}
        <div className="relative bg-gradient-to-br from-white to-pink-50 p-8 rounded-2xl shadow-2xl border border-pink-200 max-w-md mx-auto">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-rose-300 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-rose-300 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-rose-300 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-rose-300 rounded-br-lg"></div>

          <div className="text-center space-y-6">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl font-serif text-rose-600"
            >
              💌
            </motion.div>

            <div className="space-y-2">
              <h1 className="text-2xl font-serif text-gray-800">Convite de Casamento</h1>
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <span className="text-lg font-medium text-rose-600">Rilza & Everton</span>
                <Heart className="w-4 h-4 text-rose-500" />
              </div>
            </div>

            {/* Wax seal */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className="relative mx-auto w-20 h-20 cursor-pointer group"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-lg flex items-center justify-center border-4 border-red-700 group-hover:shadow-xl transition-shadow duration-300"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Sparkle effect on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
            </motion.div>

            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-sm text-gray-600 font-medium"
            >
              Clique no selo
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SealedInvite;