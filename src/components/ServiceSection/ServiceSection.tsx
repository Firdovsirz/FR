'use client';

import Image from 'next/image';
import Service1 from "@/../public/assets/services/service-1-bg.jpg";
import Service2 from "@/../public/assets/services/service-2-bg.jpg";
import Service3 from "@/../public/assets/services/service-3-bg.jpg";
import Service4 from "@/../public/assets/services/service-4-bg.jpg";

import { useEffect, useRef } from 'react';
import styles from './ServiceSection.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const cardsData = [
    {
        id: 1,
        title: 'End-to-End Web App Development',
        description:
            'Developing complete web applications with both frontend and backend functionalities.',
        image: Service1,
    },
    {
        id: 2,
        title: 'Database Design & Management',
        description:
            'Designing and managing relational (PostgreSQL, MySQL) or NoSQL (MongoDB) databases for efficient data storage and retrieval.',
        image: Service2
    },
    {
        id: 3,
        title: 'Frontend Performance Optimization',
        description:
            'Improving load times and performance by optimizing assets, caching strategies, and efficient rendering techniques.',
        image: Service3
    },
    {
        id: 4,
        title: 'Web Application Security',
        description:
            'Implementing security best practices like HTTPS, CSRF protection, and role-based access control.',
        image: Service4
    },
];

const ScrollCards: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

    return (
        <section className={styles['services-section']}>
            <div className={styles.cards} ref={containerRef}>
                {cardsData.map((card, index) => {
                    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
                    const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
                    const brightnessFilter = brightness.get();

                    return (
                        <motion.div key={card.id} className={styles.card} style={{ paddingTop: `${20 + index * 20}px` }}>
                            <motion.div className={styles.cardInner} style={{ scale, filter: `brightness(${brightnessFilter})` }}>
                                <div className={styles.cardContent}>
                                    <h1 className={styles.cardTitle}>{card.title}</h1>
                                    <p className={styles.cardDescription}>{card.description}</p>
                                </div>
                                <div className={styles.cardImageContainer}>
                                    <Image className={styles.cardImage} src={card.image || ""} alt={card.title} width={300} height={200} />
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
            <div className={styles.space}></div>
        </section>
    );
};

export default ScrollCards;
