'use client';

import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
    const [tooltip, setTooltip] = useState('¡Escríbenos!');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 21) {
            setTooltip('¡Estamos en línea!');
        } else {
            setTooltip('Déjanos tu mensaje, mañana te contactamos.');
        }
    }, []);

    return (
        <a
            href="https://wa.me/573143455483"
            id="whatsapp-btn"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fa-brands fa-whatsapp"></i>
            <span className="tooltip-text" id="whatsapp-tooltip">{tooltip}</span>
        </a>
    );
}
