interface PricingProps {
    onOpenModal: (plan: string) => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
    const PLANS = [
        { name: 'DIARIO', price: '$15.000', features: ['Acceso total por 1 día', 'Sin matrícula'], recommended: false },
        { name: 'MENSUAL', price: '$80.000', features: ['Acceso ilimitado', 'Valoración física', 'Sin cláusula de permanencia'], recommended: true },
        { name: 'SEMESTRAL', price: '$400.000', features: ['Ahorras 1 mes', 'Congelación por 15 días', 'Camiseta oficial'], recommended: false }
    ];

    return (
        <section id="pricing" className="pricing-section">
            <h2 className="section-title">TARIFAS</h2>
            <div className="pricing-grid">
                {PLANS.map(plan => (
                    <div className={`pricing-card ${plan.recommended ? 'recommended' : ''}`} key={plan.name}>
                        {plan.recommended && <div className="badge">RECOMENDADO</div>}
                        <h3>{plan.name}</h3>
                        <p className="price">{plan.price}</p>
                        <ul className="features">
                            {plan.features.map(f => <li key={f}>{f}</li>)}
                        </ul>
                        <button
                            className={`pricing-btn ${plan.recommended ? 'primary' : ''}`}
                            onClick={() => onOpenModal(`Plan ${plan.name.charAt(0) + plan.name.slice(1).toLowerCase()}`)}
                        >
                            ELEGIR
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
