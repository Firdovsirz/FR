"use client";

import React from 'react';
import styles from "./Home.module.scss";
import Header from '@/components/Header/Header';
import IntroSection from '@/components/IntroSection/IntroSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import DescriptionSection from '@/components/DescriptionSection/DescriptionSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';
import FAQ from '@/components/FAQ/FAQ';

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
    </div>
  )
}
