// Navegação responsiva
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação dos elementos ao aparecer na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-item, .course-item, .category-item, .contact-item, .target-audience');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Funcionalidade de troca de idiomas
function changeLanguage() {
    const language = document.getElementById('language').value;
    
    // Objetos com traduções
    const translations = {
        pt: {
            // Header
            home: 'Home',
            services: 'Serviços',
            courses: 'Cursos',
            about: 'Sobre',
            blog: 'Blog',
            contact: 'Contato',
            
            // Home section
            homeTitle1: 'Atraia mais clientes com estratégias digitais sob medida — onde quer que você esteja.',
            homeSubtitle1: 'Se você oferece serviços ou produtos e quer vender mais, gerar autoridade ou captar leads, criamos o caminho ideal para o seu objetivo. Do tráfego à estrutura digital — cuidamos das campanhas, site, landing page e anúncios com foco em resultado.',
            homeCta1: 'Quero atrair mais clientes',
            
            homeTitle2: 'Mentoria em tráfego pago para transformar teoria em prática e resultados.',
            homeSubtitle2: 'Se você já estudou, mas ainda não conseguiu aplicar na prática ou atrair seus primeiros clientes, essa mentoria é para você. Acompanhamento direto, estratégias aplicáveis e visão de negócio para fazer você evoluir de verdade no digital.',
            homeCta2: 'Quero minha mentoria',
            
            // Section titles
            servicesTitle: 'Nossos Serviços',
            coursesTitle: 'Cursos e Treinamentos',
            aboutTitle: 'Sobre a Alvllack',
            blogTitle: 'Blog',
            contactTitle: 'Entre em Contato',
            
            // CTAs fixos
            fixedCtaText: 'Agende uma análise gratuita',
            fixedCtaSchedule: 'Agendar',
            fixedCtaWhatsapp: 'WhatsApp',
            
            // Services CTAs
            servicesCta1: 'Quero encontrar clientes para o meu negócio',
            servicesCta2: 'Quero entrar na mentoria',
            servicesCta3: 'Falar com um especialista'
        },
        
        en: {
            // Header
            home: 'Home',
            services: 'Services',
            courses: 'Courses',
            about: 'About',
            blog: 'Blog',
            contact: 'Contact',
            
            // Home section
            homeTitle1: 'Attract more clients with custom digital strategies — wherever you are.',
            homeSubtitle1: 'If you offer services or products and want to sell more, generate authority or capture leads, we create the ideal path for your goal. From traffic to digital structure — we take care of campaigns, websites, landing pages and ads focused on results.',
            homeCta1: 'I want to attract more clients',
            
            homeTitle2: 'Paid traffic mentoring to turn theory into practice and results.',
            homeSubtitle2: 'If you have already studied but still haven\'t managed to apply it in practice or attract your first clients, this mentoring is for you. Direct guidance, applicable strategies and business vision to make you truly evolve in digital.',
            homeCta2: 'I want my mentoring',
            
            // Section titles
            servicesTitle: 'Our Services',
            coursesTitle: 'Courses and Training',
            aboutTitle: 'About Alvllack',
            blogTitle: 'Blog',
            contactTitle: 'Get in Touch',
            
            // CTAs fixos
            fixedCtaText: 'Schedule a free analysis',
            fixedCtaSchedule: 'Schedule',
            fixedCtaWhatsapp: 'WhatsApp',
            
            // Services CTAs
            servicesCta1: 'I want to find clients for my business',
            servicesCta2: 'I want to join the mentoring',
            servicesCta3: 'Talk to a specialist'
        },
        
        es: {
            // Header
            home: 'Inicio',
            services: 'Servicios',
            courses: 'Cursos',
            about: 'Acerca',
            blog: 'Blog',
            contact: 'Contacto',
            
            // Home section
            homeTitle1: 'Atrae más clientes con estrategias digitales a medida — donde quiera que estés.',
            homeSubtitle1: 'Si ofreces servicios o productos y quieres vender más, generar autoridad o captar leads, creamos el camino ideal para tu objetivo. Del tráfico a la estructura digital — cuidamos las campañas, sitio web, landing page y anuncios enfocados en resultados.',
            homeCta1: 'Quiero atraer más clientes',
            
            homeTitle2: 'Mentoría en tráfico pago para transformar teoría en práctica y resultados.',
            homeSubtitle2: 'Si ya has estudiado pero aún no has logrado aplicarlo en la práctica o atraer tus primeros clientes, esta mentoría es para ti. Acompañamiento directo, estrategias aplicables y visión de negocio para hacerte evolucionar de verdad en digital.',
            homeCta2: 'Quiero mi mentoría',
            
            // Section titles
            servicesTitle: 'Nuestros Servicios',
            coursesTitle: 'Cursos y Entrenamientos',
            aboutTitle: 'Acerca de Alvllack',
            blogTitle: 'Blog',
            contactTitle: 'Ponte en Contacto',
            
            // CTAs fixos
            fixedCtaText: 'Agenda un análisis gratuito',
            fixedCtaSchedule: 'Agendar',
            fixedCtaWhatsapp: 'WhatsApp',
            
            // Services CTAs
            servicesCta1: 'Quiero encontrar clientes para mi negocio',
            servicesCta2: 'Quiero entrar en la mentoría',
            servicesCta3: 'Hablar con un especialista'
        }
    };
    
    // Aplicar traduções
    const t = translations[language];
    
    // Header navigation
    document.querySelector('a[href="#home"]').textContent = t.home;
    document.querySelector('a[href="#servicos"]').textContent = t.services;
    document.querySelector('a[href="#cursos"]').textContent = t.courses;
    document.querySelector('a[href="#sobre"]').textContent = t.about;
    document.querySelector('a[href="#blog"]').textContent = t.blog;
    document.querySelector('a[href="#contato"]').textContent = t.contact;
    
    // Home section
    const homeAudiences = document.querySelectorAll('.target-audience');
    if (homeAudiences.length >= 2) {
        homeAudiences[0].querySelector('h2').textContent = t.homeTitle1;
        homeAudiences[0].querySelector('p').textContent = t.homeSubtitle1;
        homeAudiences[0].querySelector('.cta-button').textContent = t.homeCta1;
        
        homeAudiences[1].querySelector('h2').textContent = t.homeTitle2;
        homeAudiences[1].querySelector('p').textContent = t.homeSubtitle2;
        homeAudiences[1].querySelector('.cta-button').textContent = t.homeCta2;
    }
    
    // Section titles
    document.querySelector('#servicos .section-title').textContent = t.servicesTitle;
    document.querySelector('#cursos .section-title').textContent = t.coursesTitle;
    document.querySelector('#sobre .section-title').textContent = t.aboutTitle;
    document.querySelector('#blog .section-title').textContent = t.blogTitle;
    document.querySelector('#contato .section-title').textContent = t.contactTitle;
    
    // CTAs fixos
    document.querySelector('.fixed-cta-text').textContent = t.fixedCtaText;
    document.querySelector('.fixed-btn.schedule').innerHTML = `<i class="fas fa-calendar"></i> ${t.fixedCtaSchedule}`;
    document.querySelector('.fixed-btn.whatsapp').innerHTML = `<i class="fab fa-whatsapp"></i> ${t.fixedCtaWhatsapp}`;
    
    // Services CTAs
    const serviceCtas = document.querySelectorAll('.service-ctas .cta-button');
    if (serviceCtas.length >= 3) {
        serviceCtas[0].textContent = t.servicesCta1;
        serviceCtas[1].textContent = t.servicesCta2;
        serviceCtas[2].textContent = t.servicesCta3;
    }
    
    // Course CTAs
    const courseCtas = document.querySelectorAll('.course-ctas .cta-button');
    if (courseCtas.length >= 3) {
        courseCtas[0].textContent = t.servicesCta1;
        courseCtas[1].textContent = t.servicesCta2;
        courseCtas[2].textContent = t.servicesCta3;
    }
    
    // Atualizar atributo lang
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language === 'en' ? 'en' : 'es';
}

// Header sticky com mudança de cor
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Mostrar/ocultar CTAs fixos baseado no scroll
window.addEventListener('scroll', function() {
    const fixedCtas = document.querySelector('.fixed-ctas');
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    if (scrolled > windowHeight * 0.5) {
        fixedCtas.style.opacity = '1';
        fixedCtas.style.transform = 'translateY(0)';
    } else {
        fixedCtas.style.opacity = '0';
        fixedCtas.style.transform = 'translateY(20px)';
    }
});

// Inicializar estilo dos CTAs fixos
document.addEventListener('DOMContentLoaded', function() {
    const fixedCtas = document.querySelector('.fixed-ctas');
    fixedCtas.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    fixedCtas.style.opacity = '0';
    fixedCtas.style.transform = 'translateY(20px)';
});

// Tracking de eventos (Google Analytics, Facebook Pixel, etc.)
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    // Console log para debug
    console.log('Event tracked:', eventName, eventData);
}

// Rastrear cliques nos CTAs
document.addEventListener('DOMContentLoaded', function() {
    // CTAs principais
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('CTA_Click', {
                button_text: buttonText,
                button_location: this.closest('section')?.id || 'unknown'
            });
        });
    });
    
    // CTAs fixos
    document.querySelectorAll('.fixed-btn').forEach(button => {
        button.addEventListener('click', function() {
            const buttonType = this.classList.contains('schedule') ? 'schedule' : 'whatsapp';
            trackEvent('Fixed_CTA_Click', {
                button_type: buttonType
            });
        });
    });
    
    // Links do menu
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Menu_Click', {
                menu_item: this.textContent.trim()
            });
        });
    });
});

// Lazy loading para imagens (se houver)
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Performance: preload de recursos críticos
function preloadResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Inicializar recursos críticos
document.addEventListener('DOMContentLoaded', preloadResources);

// Formulário de contato - validação básica
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Tracking
            trackEvent('Form_Submit', {
                form_type: 'contact'
            });
            
            // Aqui você pode adicionar integração com APIs de email
            console.log('Form submitted:', data);
        });
    }
});

// Smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Inicializar reveal elements
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-item, .course-item, .category-item').forEach(el => {
        el.classList.add('reveal');
    });
});

// Dark mode toggle (opcional - para futuras implementações)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Carregar preferência de dark mode
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Accessibility: navegação por teclado melhorada
document.addEventListener('keydown', function(e) {
    // ESC para fechar menu mobile
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Otimização de performance: debounce para scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce aos event listeners de scroll
const debouncedScrollHandler = debounce(function() {
    revealOnScroll();
}, 10);

window.removeEventListener('scroll', revealOnScroll);
window.addEventListener('scroll', debouncedScrollHandler);