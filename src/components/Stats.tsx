'use client';

import { useEffect, useRef, useState } from 'react';

const STATS_DATA = [
    { target: 500, label: 'M² DE MÁQUINAS' },
    { target: 15, label: 'ENTRENADORES' },
    { target: 4, label: 'ZONAS DE PODER' },
];

export default function Stats() {
    const [counts, setCounts] = useState(STATS_DATA.map(() => 0));
    const sectionRef = useRef<HTMLElement>(null);
    const startedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !startedRef.current) {
                startedRef.current = true;
                animateCounts();
            }
        }, { threshold: 0.5 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const animateCounts = () => {
        const speed = 200;

        STATS_DATA.forEach((stat, index) => {
            let current = 0;
            const inc = stat.target / 100;

            const timer = setInterval(() => {
                current += inc;
                if (current >= stat.target) {
                    setCounts(prev => {
                        const next = [...prev];
                        next[index] = stat.target;
                        return next;
                    });
                    clearInterval(timer);
                } else {
                    setCounts(prev => {
                        const next = [...prev];
                        next[index] = Math.ceil(current);
                        return next;
                    });
                }
            }, 20);
        });
    };

    return (
        <section id="stats" className="stats-bar" ref={sectionRef}>
            {STATS_DATA.map((stat, index) => (
                <div className="stat-item" key={stat.label}>
                    <span className="stat-number">{counts[index]}</span>
                    <span className="stat-label">{stat.label}</span>
                </div>
            ))}
        </section>
    );
}
