"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface HeaderProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    experienceRef: React.RefObject<HTMLElement>;
    faqRef: React.RefObject<HTMLElement>;
}

export default function Header({
    scrollToSection,
    experienceRef,
    faqRef,
}: HeaderProps) {
    const [burger, setBurger] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);

    const toggleMenu = () => {
        setBurger(!burger);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${styles["header-container"]} ${isSticky ? styles["sticky"] : ""}`}>
            <nav>
                <div className={styles["logo-container"]}>
                    <Link href={"/"} className={styles["logo-link"]}>
                        FR
                    </Link>
                </div>
                <div className={styles["nav-page-anchors"]}>
                    <ul>
                        <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
                        <li onClick={() => scrollToSection(faqRef)}>FAQ</li>
                        <li>
                            <a href="/cv_Last_Version.pdf" download='cv.pdf' className={styles["download-link"]}>
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles['menu-icon-container']}>
                    <MenuIcon className={styles['menu-icon']} onClick={toggleMenu} />
                </div>
            </nav>
            <div
                className={styles['burger-menu-container']}
                style={burger ? { marginTop: 0 } : { marginTop: "-400px" }}>
                <div className={styles['menu-container']}>
                    <CloseIcon className={styles['burger-menu-close-icon']} onClick={toggleMenu} />
                    <ul>
                        <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
                        <li onClick={() => scrollToSection(faqRef)}>FAQ</li>
                        <li>
                            <a href="/cv_Last_Version.pdf" download='cv.pdf' className={styles["download-link"]}>
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}