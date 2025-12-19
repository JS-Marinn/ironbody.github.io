export default function Testimonials() {
    const TESTIMONIALS = [
        { quote: "Nunca había sentido una energía así. No es solo entrenar, es transformarte. Los entrenadores realmente te empujan al límite.", author: "Carlos M." },
        { quote: "Las instalaciones son brutales. La zona de pesas tiene todo lo que necesito para powerlifting. Recomendado 100%.", author: "Andrea R." },
        { quote: "El ambiente de boxeo es increíble. Salgo renovado después de cada sesión. Iron Body es mi terapia.", author: "David S." }
    ];

    return (
        <section className="testimonials-section">
            <h2 className="section-title">VOCES DE LA <span className="text-accent">LEGIÓN</span></h2>
            <div className="testimonials-grid">
                {TESTIMONIALS.map((t, i) => (
                    <div className="testimonial-card" key={i}>
                        <p className="testimonial-quote">"{t.quote}"</p>
                        <p className="testimonial-author">- {t.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
