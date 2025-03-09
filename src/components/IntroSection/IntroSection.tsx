"use client";

import React from 'react';
import Image from 'next/image';
import styles from "./IntroSection.module.scss";
import Avatar from "@/../public/assets/avatar.png";
import JsLogo from "@/../public/assets/js-logo.png";
import TsLogo from "@/../public/assets/ts-logo.png";
import PyLogo from "@/../public/assets/py-logo.png";
import ScssLogo from "@/../public/assets/scss-logo.png";
import JavaLogo from "@/../public/assets/java-logo.webp";
import NextLogo from "@/../public/assets/next-logo.webp";
import ReduxLogo from "@/../public/assets/redux-logo.png";
import ReactLogo from "@/../public/assets/react-logo.png";
import SpringLogo from "@/../public/assets/spring-logo.png";
import GitHubLogo from "@/../public/assets/github-loog.png";
import TailwindLogo from "@/../public/assets/tailwind-logo.png";

export default function IntroSection() {
    return (
        <section className={styles['intro-section']}>
            <div className={styles['intro-img-container']}>
                <Image src={Avatar} alt='avatar' className={styles['avatar-img']} />
            </div>
            <div className={styles['intro-txt-container']}>
                <h1>Full-Stack Developer</h1>
                <p>
                    I'm Firdovsi Rzaev, Passionate about crafting high-performance,
                    user-friendly applications, I turn ideas into reality with clean
                    code and modern technologies. Let's build something amazing together!
                </p>
            </div>
            <div className={styles['intro-btn-container']}>
                <div className={styles['intro-glow-contact-btn']}>
                    <div className={styles['intro-cntc-btn-glow']}></div>
                    <a href="#" className={styles['intro-contact-btn']}>Contact</a>
                </div>
                <button>Works</button>
            </div>
            <div className={styles['tech-logo-carousel']}>
                <div className={styles['tech-logos']}>
                    <div className={styles['tech-logo-slides']}>
                        <Image src={ReactLogo} alt='React JS' className={styles['tech-carousel-img']} />
                        <Image src={NextLogo} alt='Next JS' className={styles['tech-carousel-img']} />
                        <Image src={ReduxLogo} alt='Redux' className={styles['tech-carousel-img']} />
                        <Image src={JsLogo} alt='JavaScript' className={styles['tech-carousel-img']} />
                        <Image src={TsLogo} alt='TypeScript' className={styles['tech-carousel-img']} />
                        <Image src={ScssLogo} alt='Scss' className={styles['tech-carousel-img']} />
                        <Image src={TailwindLogo} alt='Tailwind CSS' className={styles['tech-carousel-img']} />
                        <Image src={GitHubLogo} alt='Github' className={styles['tech-carousel-img']} />
                        <Image src={JavaLogo} alt='Java' className={styles['tech-carousel-img']} />
                        <Image src={SpringLogo} alt='Spring Boot' className={styles['tech-carousel-img']} />
                        <Image src={PyLogo} alt='Python' className={styles['tech-carousel-img']} />
                    </div>
                    <div className={styles['tech-logo-slides']}>
                        <Image src={ReactLogo} alt='React JS' className={styles['tech-carousel-img']} />
                        <Image src={NextLogo} alt='Next JS' className={styles['tech-carousel-img']} />
                        <Image src={ReduxLogo} alt='Redux' className={styles['tech-carousel-img']} />
                        <Image src={JsLogo} alt='JavaScript' className={styles['tech-carousel-img']} />
                        <Image src={TsLogo} alt='TypeScript' className={styles['tech-carousel-img']} />
                        <Image src={ScssLogo} alt='Scss' className={styles['tech-carousel-img']} />
                        <Image src={TailwindLogo} alt='Tailwind CSS' className={styles['tech-carousel-img']} />
                        <Image src={GitHubLogo} alt='Github' className={styles['tech-carousel-img']} />
                        <Image src={JavaLogo} alt='Java' className={styles['tech-carousel-img']} />
                        <Image src={SpringLogo} alt='Spring Boot' className={styles['tech-carousel-img']} />
                        <Image src={PyLogo} alt='Python' className={styles['tech-carousel-img']} />
                    </div>
                </div>
            </div>
        </section>
    )
}
