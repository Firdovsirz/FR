"use client";

import React from 'react';
import styles from "./PageBg.module.scss";

export default function PageBg() {
    return (
        <div className={styles['bg-animation-container']}>
            <div className={styles['move-1']} />
            <div className={styles['move-2']} />
            <div className={styles['move-3']} />
            <div className={styles['move-4']} />
        </div>
    )
}
