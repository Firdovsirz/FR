"use client";

import React, { useState } from 'react';
import styles from "./ExperienceSection.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ExperienceSection() {
    const experiences = [
        {
            title: "Full-Stack Developer Intern",
            company: "Azerbaijan Technical University",
            date: "March 2025 - Present",
            jobDoneTitle: "Plan reporting information system",
            jobDesc: "System for managing, analyzing and evaluating the annual reports of university officials.",
            usedTechnologies: "Next JS, Typescript, Redux / Redux Toolkit, Fast API, Sqlite, Postgre SQL, Flask, Python, Javascript, Scss, Tail Admin"
        }, {
            title: "Frontend Developer Intern",
            company: "Azerbaijan Technical University",
            date: "Nov 2024 - March 2025",
            jobDoneTitle: "DigiMeal",
            jobDesc: "QR code system that provides free daily meals for children receiving social assistance.",
            usedTechnologies: "React JS, Javascript, Scss, Redux / Redux Toolkit, Material UI, i18n"
        }
    ];

    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const handleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    }

    return (
        <section className={styles['experience-section']}>
            <div className={styles['experience-main-container']}>
                <h2>Experience</h2>
                <div className={styles['experience-container']}>
                    {experiences.map((item, index) => (
                        <div className={styles['experience-full']}>
                            <div className={styles['experience']} key={index}>
                                <h3>{item.title}</h3>
                                <div>
                                    <div>
                                        <h3>{item.company}</h3>
                                        <p>{item.date}</p>
                                    </div>
                                    <KeyboardArrowDownIcon
                                        style={openDropdown === index ? { rotate: "180deg" } : undefined}
                                        className={styles['experience-dropdown-icon']}
                                        onClick={() => handleDropdown(index)}
                                    />
                                </div>
                            </div>
                            <div className={styles['experience-additional-details']} style={
                                openDropdown === index ? { marginTop: 0, opacity: 1 } : { marginTop: "-150px", opacity: 0 }
                            }>
                                <h3>{item.jobDoneTitle}</h3>
                                <p>{item.jobDesc}</p>
                                <h4>Used Technologies:</h4>
                                <p>{item.usedTechnologies}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
