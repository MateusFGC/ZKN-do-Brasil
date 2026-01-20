document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Scroll Reveal (Entrada e Saída) ---

    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Aciona quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px" // Offset para acionar um pouco antes do fim da tela
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Entrou na viewport: Adiciona classe
                entry.target.classList.add('active');
            } else {
                // Saiu da viewport: Remove classe (para repetir efeito)
                entry.target.classList.remove('active');
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // --- Menu Mobile Simples ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            // Em um cenário real, alternaria uma classe 'open' no CSS
            // para mostrar o menu em overlay
            const isHidden = window.getComputedStyle(nav).display === 'none';
            nav.style.display = isHidden ? 'block' : 'none';

            // Ajuste rápido de estilo inline para demo (ideal mover para CSS)

            if (isHidden) {
                addProperty()
            } else {
                removeProperty()
            }
        });
    }
    window.addEventListener('resize', () => {
        const tam = window.innerWidth
        if (tam => 900) {
            nav.style.removeProperty('display');
            removeProperty()
        }

    });

    function addProperty() {
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.right = '0';
        nav.style.width = '230px';
        nav.style.borderRadius = '0 0 29px 29px';
        nav.style.background = '#fff';
        nav.style.padding = '1rem';
        nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';

        const list = nav.querySelector('ul');
        list.style.flexDirection = 'column';
        list.style.alignItems = 'center';
    }

    function removeProperty() {
        nav.style.removeProperty('position');
        nav.style.removeProperty('top');
        nav.style.removeProperty('left');
        nav.style.removeProperty('width');
        nav.style.removeProperty('background');
        nav.style.removeProperty('padding');
        nav.style.removeProperty('box-shadow');

        const list = nav.querySelector('ul');
        list.style.removeProperty('flex-direction');
        list.style.removeProperty('align-items');
    }
});