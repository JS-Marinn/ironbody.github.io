'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openModal = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan('');
  };

  return (
    <main>
      <Navbar />
      <Hero onOpenModal={() => openModal('Clase de Cortesía')} />
      <Stats />
      <Services />
      <WhyUs />
      <Testimonials />
      <Pricing onOpenModal={openModal} />
      <FAQ />
      <Footer />
      <WhatsAppButton />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        planName={selectedPlan}
      />
    </main>
  );
}
