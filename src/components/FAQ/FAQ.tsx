"use client";

import styles from "./FAQ.module.scss";
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FAQ() {
    const questions = [
        {
            question: "What technologies do you specialize in?",
            answer: "I specialize in React.js (Next.js) for frontend and Java (Spring Boot), Python (Flask, Fast API) for backend. Additionally, I work with SCSS for styling, PostgreSQL/MySQL for databases, and Git for version control."
        }, {
            question: "How do you stay updated with the latest technologies?",
            answer: "I actively follow tech blogs, contribute to open-source projects, and take online courses to stay up-to-date with industry trends."
        }, {
            question: "How can I contact you for a project or collaboration?",
            answer: "You can reach out via firdovsirz@gmail.com, LinkedIn, or my GitHub profile. I’m open to freelance projects, full-time roles, and collaborations!"
        }
    ];
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const handleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    }
    return (
        <section className={styles['faq-section']}>
            <div className={styles['faq-container']}>
                <h2>Frequently asked questions</h2>
                <div className={styles['questions-container']}>
                    {questions.map((item, index) => {
                        return (
                            <div className={styles['question-main-container']} key={index}>
                                <div className={styles['question-head-container']}>
                                    <h3>{item.question}</h3>
                                    <KeyboardArrowDownIcon style={openDropdown === index ? { rotate: "180deg" } : undefined} className={styles['faq-dropdown-icon']} onClick={() => handleDropdown(index)} />
                                </div>
                                <div style={
                                    openDropdown === index ? { marginTop: 0, opacity: 1 } : { marginTop: "-50px", opacity: 0 }
                                }>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
