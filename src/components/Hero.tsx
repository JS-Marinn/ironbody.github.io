import Image from 'next/image';

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="glitch" data-text="FORJA TU MEJOR VERSIÓN">FORJA TU MEJOR VERSIÓN</h1>
                <h2 className="sub-headline">EN EL CORAZÓN DE NEIVA</h2>
                <button
                    id="cta-hero"
                    className="cta-button pulse-effect"
                    onClick={onOpenModal}
                >
                    ¡RECLAMA TU CLASE DE CORTESÍA!
                </button>
            </div>
            <div className="hero-bg">
                <Image
                    src="/hero_bg.webp"
                    alt="Iron Body Gym Atmosphere"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </section>
    );
}
