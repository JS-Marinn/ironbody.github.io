'use client';

import { useState, FormEvent } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    planName?: string;
}

export default function Modal({ isOpen, onClose, planName }: ModalProps) {
    const [phone, setPhone] = useState('');
    const [isShaking, setIsShaking] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (phone.length < 7) {
            if (typeof navigator !== 'undefined' && navigator.vibrate) {
                navigator.vibrate(200);
            }
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
            return;
        }

        alert('¡Solicitud enviada! Te contactaremos pronto.');
        onClose();
        setPhone('');
    };

    return (
        <div
            className={`modal-overlay ${isOpen ? 'active' : ''}`}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="modal-content glass-effect">
                <span className="close-modal" onClick={onClose}>&times;</span>
                <h2>ÚNETE A LA LEGIÓN</h2>
                <p id="modal-plan-info">
                    {planName ? `Has elegido: ${planName}. ¡Excelente decisión!` : 'Estás a un paso de tu mejor versión.'}
                </p>
                <form id="registration-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">NOMBRE COMPLETO</label>
                        <input type="text" id="name" required placeholder="EJ: JUAN PÉREZ" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">TELÉFONO (WHATSAPP)</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            placeholder="EJ: 300 123 4567"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={isShaking ? { animation: 'shake 0.5s', borderColor: 'red' } : {}}
                        />
                    </div>
                    <button type="submit" className="submit-btn pulse-effect">¡INSCRIBIRME AHORA!</button>
                </form>
            </div>
        </div>
    );
}
