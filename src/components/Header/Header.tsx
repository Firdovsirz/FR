"use client";

import React from 'react';
import Link from 'next/link';
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles['header-container']}>
            <nav>
                <div className={styles['logo-container']}>
                    <Link href={"/"} className={styles['logo-link']}>FR</Link>
                </div>
                <div className={styles['nav-page-anchors']}>
                    <ul>
                        <li>Work</li>
                        <li>Experience</li>
                        <li>FAQ</li>
                        <li>Get in Touch</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
