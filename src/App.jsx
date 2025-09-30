import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import SealedInvite from '@/components/SealedInvite';
import InviteContent from '@/components/InviteContent';
import ActionsPage from '@/components/ActionsPage';
import ConfirmationPage from '@/components/ConfirmationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('sealed');

  const renderPage = () => {
    switch (currentPage) {
      case 'sealed':
        return <SealedInvite onOpen={() => setCurrentPage('content')} />;
      case 'content':
        return <InviteContent onNext={() => setCurrentPage('actions')} />;
      case 'actions':
        return <ActionsPage onConfirm={() => setCurrentPage('confirmation')} />;
      case 'confirmation':
        return <ConfirmationPage onBack={() => setCurrentPage('actions')} />;
      default:
        return <SealedInvite onOpen={() => setCurrentPage('content')} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Convite de Casamento - Rilza & Everton</title>
        <meta name="description" content="Convite interativo para o casamento de Rilza e Everton - 20 de Dezembro de 2025" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="min-h-screen"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
        <Toaster />
      </div>
    </>
  );
}

export default App;