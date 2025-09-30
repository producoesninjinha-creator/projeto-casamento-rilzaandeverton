import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConfirmationPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-teal-300 to-green-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4"
        >
          <Sparkles className="w-6 h-6 text-green-400 opacity-60" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4"
        >
          <Heart className="w-5 h-5 text-emerald-400 opacity-60" />
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto min-h-screen flex items-center justify-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Success icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Thank you message */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              Obrigado!
            </h1>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="w-6 h-6 text-rose-500" />
              <span className="text-xl text-gray-700 font-medium">Rilza & Everton</span>
              <Heart className="w-6 h-6 text-rose-500" />
            </div>
          </motion.div>

          {/* Confirmation message */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Ficamos muito felizes em saber que você estará conosco neste dia tão especial! 
              Sua presença tornará nossa celebração ainda mais especial e cheia de amor.
            </p>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl mt-4"
            >
              💕
            </motion.div>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-green-50 rounded-xl p-6 border border-green-200"
          >
            <p className="text-green-800 font-medium mb-2">📅 Lembre-se:</p>
            <p className="text-green-700">
              20 de Dezembro de 2025 às 19h00<br />
              Igreja Senhor do Bonfim - Xique Xique, BA
            </p>
          </motion.div>

          {/* Back button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button
              onClick={onBack}
              variant="outline"
              className="bg-white/80 border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Voltar
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmationPage;