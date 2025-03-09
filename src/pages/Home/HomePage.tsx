"use client";

import React from 'react';
import FAQ from '@/components/FAQ/FAQ';
import styles from "./Home.module.scss";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import IntroSection from '@/components/IntroSection/IntroSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import DescriptionSection from '@/components/DescriptionSection/DescriptionSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';

export default function Home() {
  return (
    <div className={styles['home-container']}>
      <Header />
      <IntroSection />
      <ServiceSection />
      <DescriptionSection />
      <SkillsSection />
      <ExperienceSection />
      <FAQ />
      <Footer />
    </div>
  )
}
