"use client";

import React from 'react';
import styles from "./SkillsSection.module.scss";

export default function SkillsSection() {
    const skills = [
        "Frontend", "Backend", "Version Control",
        "Deployment & Cloud", "Problem Solving", "State Management",
        "Responsive Design", "RESTful APIs", "Databases",
        "Authentication & Authorization", "Testing", "Teamwork",
        "Time Management", "+ More"
    ];
    return (
        <section className={styles['skills-section']}>
            <div className={styles['skills-container']}>
                <h2>Skills</h2>
                <div className={styles['skill-container']}>
                    {skills.map((skill: string, index: number) => {
                        return (
                            <div className={styles['skill']} key={index}>
                                {skill}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
