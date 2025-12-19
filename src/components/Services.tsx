'use client';

import { useRef, useState, MouseEvent, TouchEvent } from 'react';

const SERVICES = [
    {
        title: 'CARDIO HIT',
        desc: 'Quema calorías y mejora tu sistema cardiovascular con tecnología de punta.',
        icon: 'fa-person-running',
        bgClass: 'cardio-bg',
        features: ['Cintas Curvas', 'Air Bikes'],
        schedule: 'Sin límite de tiempo'
    },
    {
        title: 'BOXING CLUB',
        desc: 'Técnica, defensa y desahogo. Golpea fuerte, vive fuerte.',
        icon: 'fa-hand-fist',
        bgClass: 'boxing-bg',
        features: ['Sacos Profesionales', 'Técnica de Combate'],
        schedule: 'Mar y Jue: 7pm'
    },
    {
        title: 'ZONA DE HIERRO',
        desc: 'Maquinaria de carga libre y peso integrado para hipertrofia pura.',
        icon: 'fa-weight-hanging',
        bgClass: 'weights-bg',
        features: ['Racks de Potencia', 'Mancuernas hasta 50kg'],
        schedule: 'Lun-Dom: 5am - 10pm'
    }
];

export default function Services() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDown(false);
    const handleMouseUp = () => setIsDown(false);

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e: TouchEvent) => {
        if (!sliderRef.current) return;
        setIsDown(true);
        setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDown || !sliderRef.current) return;
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="services" className="services-section">
            <h2 className="section-title">NUESTRAS <span className="text-accent">ZONAS DE COMBATE</span></h2>
            <p className="section-subtitle">ESPACIOS DISEÑADOS PARA ROMPER TUS LÍMITES</p>

            <div
                className={`slider-container ${isDown ? 'active' : ''}`}
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={() => setIsDown(false)}
                onTouchMove={handleTouchMove}
            >
                <div className="slider-track" id="slider-track">
                    {SERVICES.map((service) => (
                        <div className="service-card" key={service.title}>
                            <div className={`card-image ${service.bgClass}`}>
                                <i className={`fa-solid ${service.icon} card-icon`}></i>
                            </div>
                            <div className="card-content">
                                <h3>{service.title}</h3>
                                <p className="card-desc">{service.desc}</p>
                                <ul className="card-features">
                                    {service.features.map(f => (
                                        <li key={f}><i className="fa-solid fa-check"></i> {f}</li>
                                    ))}
                                </ul>
                                <p className="schedule">{service.schedule}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
