export default function WhyUs() {
    const WHYS = [
        { icon: 'fa-bolt', title: 'ENERGÍA PURA', desc: 'No somos un gimnasio silencioso. Aquí el sonido del hierro y la música te empujan a dar más.' },
        { icon: 'fa-users', title: 'COMUNIDAD', desc: 'Entrena con personas que comparten tu misma hambre de superación. Aquí nadie se rinde.' },
        { icon: 'fa-medal', title: 'RESULTADOS', desc: 'Programas diseñados por expertos para maximizar tu tiempo y esfuerzo.' }
    ];

    return (
        <section className="why-us-section">
            <div className="why-us-grid">
                {WHYS.map(why => (
                    <div className="why-card" key={why.title}>
                        <i className={`fa-solid ${why.icon}`}></i>
                        <h4>{why.title}</h4>
                        <p>{why.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
