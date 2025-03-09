"use client";

import React from 'react';
import Link from 'next/link';
import styles from "./Footer.module.scss";
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    return (
        <footer className={styles['footer-container']}>
            <div className={styles['footer-copyright']}>
                <CopyrightIcon className={styles['footer-copyright-icon']}/>
                Firdovsi Rzaev 2025
            </div>
            <div className={styles['footer-socials']}>
                <Link href={"#"} className={styles['footer-social-link']}>LinkedIn</Link>
                <Link href={"#"} className={styles['footer-social-link']}>Mail</Link>
                <Link href={"#"} className={styles['footer-social-link']}>Website</Link>
            </div>
        </footer>
    )
}
