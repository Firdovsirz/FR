"use client";

import React, { useRef } from 'react';
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
  const experienceRef = useRef<HTMLElement>(null!);
  const faqRef = useRef<HTMLElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles['home-container']}>
      <Header scrollToSection={scrollToSection}
        experienceRef={experienceRef}
        faqRef={faqRef} />
      <IntroSection />
      <ServiceSection />
      <DescriptionSection />
      <SkillsSection />
      <ExperienceSection ref={experienceRef}/>
      <FAQ ref={faqRef}/>
      <Footer />
    </div>
  )
}
