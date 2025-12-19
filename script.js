document.addEventListener('DOMContentLoaded', () => {

    // --- Stats Counter Animation ---
    const statsSection = document.querySelector('#stats');
    const stats = document.querySelectorAll('.stat-number');
    let started = false;

    const startCount = (el) => {
        const target = +el.getAttribute('data-target');
        const count = +el.innerText;
        const speed = 200; // Lower is faster
        const inc = target / speed;

        if (count < target) {
            el.innerText = Math.ceil(count + inc);
            setTimeout(() => startCount(el), 20);
        } else {
            el.innerText = target;
        }
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !started) {
            stats.forEach(stat => startCount(stat));
            started = true;
        }
    });

    if (statsSection) {
        observer.observe(statsSection);
    }

    // --- Draggable Slider ---
    const slider = document.getElementById('slider-track');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });


    // --- Modal Logic ---
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close-modal');
    const ctaButtons = document.querySelectorAll('.cta-button, .pricing-btn');
    const modalPlanInfo = document.getElementById('modal-plan-info');

    window.openModal = (planName) => {
        modal.classList.add('active');
        if (planName) {
            modalPlanInfo.innerText = `Has elegido: ${planName}. ¡Excelente decisión!`;
        } else {
            modalPlanInfo.innerText = "Estás a un paso de tu mejor versión.";
        }
    };

    // Attach event to hero CTA
    document.getElementById('cta-hero').addEventListener('click', () => openModal('Clase de Cortesía'));

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- Form Validation & Vibration ---
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const phoneInput = document.getElementById('phone');

        if (phoneInput.value.length < 7) {
            // Vibrate
            if (navigator.vibrate) {
                navigator.vibrate(200);
            }

            // CSS Shake animation
            phoneInput.style.animation = "shake 0.5s";
            phoneInput.style.borderColor = "red";

            setTimeout(() => {
                phoneInput.style.animation = "none";
                phoneInput.style.borderColor = "#333";
            }, 500);

            return;
        }

        alert('¡Solicitud enviada! Te contactaremos pronto.');
        modal.classList.remove('active');
        form.reset();
    });

    // Add shake keyframes dynamically
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(styleSheet);


    // --- WhatsApp Logic ---
    const whatsappTooltip = document.getElementById('whatsapp-tooltip');
    const now = new Date();
    const hour = now.getHours();

    // Horario laboral: 6am - 9pm (18:00)
    // Adjust logic as needed. Let's say 6 to 21.
    if (hour >= 6 && hour < 21) {
        whatsappTooltip.innerText = "¡Estamos en línea!";
    } else {
        whatsappTooltip.innerText = "Déjanos tu mensaje, mañana te contactamos.";
    }

    // --- FAQ Logic ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

});
