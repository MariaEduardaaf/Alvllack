// Navegação responsiva
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
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
    }
    
    // Carregar idioma salvo
    loadSavedLanguage();
});

// Carregar idioma salvo do localStorage
function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const languageSelect = document.getElementById('language');
    
    if (savedLanguage && languageSelect) {
        languageSelect.value = savedLanguage;
        changeLanguage();
    }
}

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
    const languageSelect = document.getElementById('language');
    if (!languageSelect) {
        console.error('Language selector not found');
        return;
    }
    
    const language = languageSelect.value;
    console.log('Changing language to:', language);
    
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
            
            // Services section
            servicesSubtitle1: 'Para quem quer vender no digital',
            servicesSubtitle2: 'Mentoria em tráfego pago',
            servicesSubtitle3: 'Para brasileiros no exterior e expatriados',
            
            // Service items
            service1Title: 'Criação de funil de vendas',
            service1Desc: 'Estrutura completa para converter visitantes em clientes.',
            service2Title: 'Gestão de tráfego pago',
            service2Desc: 'Google Ads, Meta Ads com foco em ROI positivo.',
            service3Title: 'Landing pages e sites',
            service3Desc: 'Páginas otimizadas para conversão e vendas.',
            service4Title: 'Otimização local',
            service4Desc: 'Google Meu Negócio e SEO básico para presença local.',
            service5Title: 'Consultoria estratégica',
            service5Desc: 'Planejamento digital personalizado para seu negócio.',
            service6Title: 'Mentoria individual e em grupo',
            service6Desc: 'Acompanhamento personalizado para acelerar resultados.',
            service7Title: 'Diagnóstico de campanhas',
            service7Desc: 'Análise detalhada do que está funcionando ou não.',
            service8Title: 'Acompanhamento prático',
            service8Desc: 'Para quem estudou tráfego, mas não tem resultado.',
            service9Title: 'Estratégias locais e globais',
            service9Desc: 'Campanhas adaptadas para diferentes mercados.',
            service10Title: 'Anúncios multilíngues',
            service10Desc: 'Português, inglês e espanhol com copy nativo.',
            service11Title: 'Consultoria cultural',
            service11Desc: 'Adaptação de linguagem e cultura digital.',
            
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
            
            // Services section
            servicesSubtitle1: 'For those who want to sell digital',
            servicesSubtitle2: 'Paid traffic mentoring',
            servicesSubtitle3: 'For Brazilians abroad and expatriates',
            
            // Service items
            service1Title: 'Sales funnel creation',
            service1Desc: 'Complete structure to convert visitors into customers.',
            service2Title: 'Paid traffic management',
            service2Desc: 'Google Ads, Meta Ads focused on positive ROI.',
            service3Title: 'Landing pages and websites',
            service3Desc: 'Pages optimized for conversion and sales.',
            service4Title: 'Local optimization',
            service4Desc: 'Google My Business and basic SEO for local presence.',
            service5Title: 'Strategic consulting',
            service5Desc: 'Personalized digital planning for your business.',
            service6Title: 'Individual and group mentoring',
            service6Desc: 'Personalized guidance to accelerate results.',
            service7Title: 'Campaign diagnosis',
            service7Desc: 'Detailed analysis of what\'s working or not.',
            service8Title: 'Practical follow-up',
            service8Desc: 'For those who studied traffic but have no results.',
            service9Title: 'Local and global strategies',
            service9Desc: 'Campaigns adapted for different markets.',
            service10Title: 'Multilingual ads',
            service10Desc: 'Portuguese, English and Spanish with native copy.',
            service11Title: 'Cultural consulting',
            service11Desc: 'Language and digital culture adaptation.',
            
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
            
            // Services section
            servicesSubtitle1: 'Para quien quiere vender en digital',
            servicesSubtitle2: 'Mentoría en tráfico pago',
            servicesSubtitle3: 'Para brasileños en el exterior y expatriados',
            
            // Service items
            service1Title: 'Creación de embudo de ventas',
            service1Desc: 'Estructura completa para convertir visitantes en clientes.',
            service2Title: 'Gestión de tráfico pago',
            service2Desc: 'Google Ads, Meta Ads enfocados en ROI positivo.',
            service3Title: 'Landing pages y sitios web',
            service3Desc: 'Páginas optimizadas para conversión y ventas.',
            service4Title: 'Optimización local',
            service4Desc: 'Google My Business y SEO básico para presencia local.',
            service5Title: 'Consultoría estratégica',
            service5Desc: 'Planificación digital personalizada para tu negocio.',
            service6Title: 'Mentoría individual y grupal',
            service6Desc: 'Acompañamiento personalizado para acelerar resultados.',
            service7Title: 'Diagnóstico de campañas',
            service7Desc: 'Análisis detallado de lo que funciona o no.',
            service8Title: 'Seguimiento práctico',
            service8Desc: 'Para quien estudió tráfico pero no tiene resultados.',
            service9Title: 'Estrategias locales y globales',
            service9Desc: 'Campañas adaptadas para diferentes mercados.',
            service10Title: 'Anuncios multiidioma',
            service10Desc: 'Portugués, inglés y español con copy nativo.',
            service11Title: 'Consultoría cultural',
            service11Desc: 'Adaptación de lenguaje y cultura digital.',
            
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
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        switch(href) {
            case '#home':
                link.textContent = t.home;
                break;
            case '#servicos':
                link.textContent = t.services;
                break;
            case '#cursos':
                link.textContent = t.courses;
                break;
            case '#sobre':
                link.textContent = t.about;
                break;
            case '#blog':
                link.textContent = t.blog;
                break;
            case '#contato':
                link.textContent = t.contact;
                break;
        }
    });
    
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
    const sectionTitles = [
        { selector: '#servicos .section-title', text: t.servicesTitle },
        { selector: '#cursos .section-title', text: t.coursesTitle },
        { selector: '#sobre .section-title', text: t.aboutTitle },
        { selector: '#blog .section-title', text: t.blogTitle },
        { selector: '#contato .section-title', text: t.contactTitle }
    ];
    
    sectionTitles.forEach(({ selector, text }) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    });
    
    // Services section content
    translateServicesSection(t);
    
    // CTAs fixos
    const fixedCtaText = document.querySelector('.fixed-cta-text');
    if (fixedCtaText) fixedCtaText.textContent = t.fixedCtaText;
    
    const scheduleBtn = document.querySelector('.fixed-btn.schedule');
    if (scheduleBtn) scheduleBtn.innerHTML = `<i class="fas fa-calendar"></i> ${t.fixedCtaSchedule}`;
    
    const whatsappBtn = document.querySelector('.fixed-btn.whatsapp');
    if (whatsappBtn) whatsappBtn.innerHTML = `<i class="fab fa-whatsapp"></i> ${t.fixedCtaWhatsapp}`;
    
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
    
    // Log de sucesso
    console.log('Translation applied successfully for language:', language);
    
    // Salvar preferência no localStorage
    localStorage.setItem('selectedLanguage', language);
}

// Função para traduzir a seção de serviços
function translateServicesSection(t) {
    // Subtítulos das categorias de serviços
    const serviceCategories = document.querySelectorAll('.service-category h3');
    if (serviceCategories.length >= 3) {
        if (t.servicesSubtitle1) serviceCategories[0].textContent = t.servicesSubtitle1;
        if (t.servicesSubtitle2) serviceCategories[1].textContent = t.servicesSubtitle2;
        if (t.servicesSubtitle3) serviceCategories[2].textContent = t.servicesSubtitle3;
    }
    
    // Traduzir items de serviços individuais
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceTranslations = [
        { title: t.service1Title, desc: t.service1Desc },
        { title: t.service2Title, desc: t.service2Desc },
        { title: t.service3Title, desc: t.service3Desc },
        { title: t.service4Title, desc: t.service4Desc },
        { title: t.service5Title, desc: t.service5Desc },
        { title: t.service6Title, desc: t.service6Desc },
        { title: t.service7Title, desc: t.service7Desc },
        { title: t.service8Title, desc: t.service8Desc },
        { title: t.service9Title, desc: t.service9Desc },
        { title: t.service10Title, desc: t.service10Desc },
        { title: t.service11Title, desc: t.service11Desc }
    ];
    
    serviceItems.forEach((item, index) => {
        if (serviceTranslations[index]) {
            const titleElement = item.querySelector('h4');
            const descElement = item.querySelector('p');
            
            if (titleElement && serviceTranslations[index].title) {
                titleElement.textContent = serviceTranslations[index].title;
            }
            if (descElement && serviceTranslations[index].desc) {
                descElement.textContent = serviceTranslations[index].desc;
            }
        }
    });
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