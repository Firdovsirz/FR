"use client";

import React from 'react';
import styles from "./DescriptionSection.module.scss";

export default function DescriptionSection() {
    return (
        <section className={styles['description-section']}>
            <div className={styles['description-container']}>
                <h2>
                    A highly skilled <span>Full-stack developer</span>. Expertise spans both <br />
                    <span> Frontend </span> and <span> Backend </span> technologies, enabling them to <br />
                    create scalable, efficient, and user-friendly web applications. <br />
                    Currently works as a <span>Full-stack developer</span> at <span>Azerbaijan Technical University</span>.
                </h2>
            </div>
        </section>
    )
}
