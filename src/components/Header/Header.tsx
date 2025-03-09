"use client";

import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

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
    return (
        <header className={styles["header-container"]}>
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
                        {/* Download CV button */}
                        <li>
                            <a href="/cv_Last_Version.pdf" download='cv.pdf' className={styles["download-link"]}>
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}