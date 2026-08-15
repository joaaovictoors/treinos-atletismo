'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { BeforeAfterSection } from '@/components/before-after-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { ForWhomSection } from '@/components/for-whom-section';
import { BonusSection } from '@/components/bonus-section';
import { OfferSection } from '@/components/offer-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

const treinos = [
  'Velocidade e aceleração', 'Resistência e ritmo', 'Corrida com barreiras', 'Revezamentos',
  'Saltos e impulsão', 'Arremessos e lançamentos', 'Técnica de corrida', 'Coordenação e agilidade',
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  const slides = treinos.map((title) => ({ image: '', title }));

  return (
    <main className="min-h-screen bg-background pt-14 sm:pt-16 md:pt-20">
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <BeforeAfterSection />
      <ProductCarousel title="Conheça os Treinos por Dentro" subtitle="Páginas visuais com objetivo, duração, execução, diagrama e progressão." items={slides} />
      <HowItWorks />
      <WhatYouGet />
      <ProductCarousel title="Uma Biblioteca para Diferentes Níveis" subtitle="Consulte durante a preparação e adapte cada sessão ao seu público." items={slides} reverse={true} />
      <ForWhomSection />
      <Testimonials />
      <BonusSection />
      <div ref={offerRef} id="checkout"><OfferSection onCtaClick={handleCtaClick} /></div>
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
