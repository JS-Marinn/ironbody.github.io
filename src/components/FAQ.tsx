'use client';

import { useState } from 'react';

const FAQS = [
    { q: '¿Tienen parqueadero?', a: 'Sí, contamos con parqueadero vigilado gratuito para motos y carros para nuestros afiliados.' },
    { q: '¿Cuál es el horario de atención?', a: 'Lunes a Viernes de 5:00 AM a 10:00 PM. Sábados, Domingos y Festivos de 7:00 AM a 2:00 PM.' },
    { q: '¿Incluye entrenador?', a: 'Sí, todos nuestros planes incluyen acompañamiento de entrenadores de planta para guiarte en tu rutina.' }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2 className="section-title">PREGUNTAS <span className="text-accent">FRECUENTES</span></h2>
            <div className="faq-container">
                {FAQS.map((faq, i) => (
                    <div className={`faq-item ${activeIndex === i ? 'active' : ''}`} key={i}>
                        <button className="faq-question" onClick={() => toggle(i)}>
                            {faq.q}
                        </button>
                        <div className="faq-answer">
                            <p>{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
