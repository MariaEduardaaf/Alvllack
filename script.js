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
            
            // Courses section
            coursesSubtitle1: 'Cursos gravados',
            coursesSubtitle2: 'Mentoria personalizada',
            
            course1Title: 'Curso Hotfy',
            course1Desc: 'Como ganhar em dólar com estratégias digitais eficazes.',
            course2Title: 'Vender como afiliado',
            course2Desc: 'Como vender como afiliado e ganhar em dólar.',
            course3Title: 'Tráfego Local Descomplicado',
            course3Desc: 'Aprenda a criar campanhas que geram leads para negócios físicos.',
            course4Title: 'Fundamentos do Tráfego Pago',
            course4Desc: 'Curso completo para iniciantes em Facebook Ads, Instagram e Google Ads.',
            course5Title: 'Estratégias para Negócios Digitais',
            course5Desc: 'Para quem deseja escalar vendas de produtos digitais e serviços.',
            course6Title: 'Mentoria individual',
            course6Desc: 'Mentoria individual com plano de ação exclusivo. Ideal para quem busca apoio direto para aplicar campanhas com resultado.',
            
            courseLink: 'Saiba mais',
            
            // About section
            aboutMission: 'Nossa Missão',
            aboutMissionText: 'Transformar negócios através de estratégias digitais eficazes, conectando empresários aos seus clientes ideais, independentemente da localização geográfica.',
            aboutVision: 'Nossa Visão',
            aboutVisionText: 'Ser a principal referência em tráfego pago internacional, oferecendo soluções personalizadas que geram resultados reais para empresários em qualquer lugar do mundo.',
            aboutWho: 'Quem Somos',
            aboutWhoText: 'Somos uma agência especializada em tráfego pago com experiência prática em campanhas no Brasil e no exterior. Nossa abordagem humanizada e foco em resultados nos diferencia no mercado digital.',
            aboutExperience: 'Nossa Experiência',
            aboutExperienceText: 'Com anos de experiência em campanhas digitais, atendemos tanto empreendedores brasileiros quanto expatriados, adaptando estratégias para diferentes culturas e mercados.',
            
            // Blog section
            blog1Title: 'Vendas no digital',
            blog1Desc: 'Estratégias e dicas para aumentar suas vendas online.',
            blog2Title: 'Dicas de tráfego pago',
            blog2Desc: 'Insights práticos para otimizar suas campanhas.',
            blog3Title: 'Para empreendedores iniciantes',
            blog3Desc: 'Primeiros passos no mundo digital.',
            blog4Title: 'Tráfego internacional',
            blog4Desc: 'Estratégias para diferentes mercados globais.',
            blogCta: 'Em breve, artigos exclusivos sobre estratégias digitais!',
            
            // Contact section
            contactFormTitle: 'Formulário de Contato',
            contactFormLoading: 'Carregando...',
            contact1Title: 'WhatsApp',
            contact1Link: 'Falar agora',
            contact2Title: 'Agendar Reunião',
            contact2Link: 'Agendar análise gratuita',
            contact3Title: 'Redes Sociais',
            
            // Footer
            footerDesc: 'Agência de Tráfego Pago Internacional',
            footerServices: 'Serviços',
            footerService1: 'Tráfego Pago',
            footerService2: 'Landing Pages',
            footerService3: 'Consultoria',
            footerService4: 'Mentoria',
            footerCompany: 'Empresa',
            footerCompany1: 'Sobre',
            footerCompany2: 'Blog',
            footerCompany3: 'Contato',
            footerContact: 'Contato',
            footerContact1: 'WhatsApp',
            footerContact2: 'Agendar',
            footerCopyright: 'Todos os direitos reservados.',
            
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
            
            // Courses section
            coursesSubtitle1: 'Recorded courses',
            coursesSubtitle2: 'Personalized mentoring',
            
            course1Title: 'Hotfy Course',
            course1Desc: 'How to earn in dollars with effective digital strategies.',
            course2Title: 'Selling as an affiliate',
            course2Desc: 'How to sell as an affiliate and earn in dollars.',
            course3Title: 'Local Traffic Simplified',
            course3Desc: 'Learn to create campaigns that generate leads for physical businesses.',
            course4Title: 'Paid Traffic Fundamentals',
            course4Desc: 'Complete course for beginners in Facebook Ads, Instagram and Google Ads.',
            course5Title: 'Digital Business Strategies',
            course5Desc: 'For those who want to scale sales of digital products and services.',
            course6Title: 'Individual mentoring',
            course6Desc: 'Individual mentoring with exclusive action plan. Ideal for those seeking direct support to apply campaigns with results.',
            
            courseLink: 'Learn more',
            
            // About section
            aboutMission: 'Our Mission',
            aboutMissionText: 'Transform businesses through effective digital strategies, connecting entrepreneurs to their ideal clients, regardless of geographical location.',
            aboutVision: 'Our Vision',
            aboutVisionText: 'To be the main reference in international paid traffic, offering personalized solutions that generate real results for entrepreneurs anywhere in the world.',
            aboutWho: 'Who We Are',
            aboutWhoText: 'We are an agency specialized in paid traffic with practical experience in campaigns in Brazil and abroad. Our humanized approach and focus on results differentiates us in the digital market.',
            aboutExperience: 'Our Experience',
            aboutExperienceText: 'With years of experience in digital campaigns, we serve both Brazilian entrepreneurs and expatriates, adapting strategies for different cultures and markets.',
            
            // Blog section
            blog1Title: 'Digital sales',
            blog1Desc: 'Strategies and tips to increase your online sales.',
            blog2Title: 'Paid traffic tips',
            blog2Desc: 'Practical insights to optimize your campaigns.',
            blog3Title: 'For beginner entrepreneurs',
            blog3Desc: 'First steps in the digital world.',
            blog4Title: 'International traffic',
            blog4Desc: 'Strategies for different global markets.',
            blogCta: 'Coming soon, exclusive articles on digital strategies!',
            
            // Contact section
            contactFormTitle: 'Contact Form',
            contactFormLoading: 'Loading...',
            contact1Title: 'WhatsApp',
            contact1Link: 'Chat now',
            contact2Title: 'Schedule Meeting',
            contact2Link: 'Schedule free analysis',
            contact3Title: 'Social Media',
            
            // Footer
            footerDesc: 'International Paid Traffic Agency',
            footerServices: 'Services',
            footerService1: 'Paid Traffic',
            footerService2: 'Landing Pages',
            footerService3: 'Consulting',
            footerService4: 'Mentoring',
            footerCompany: 'Company',
            footerCompany1: 'About',
            footerCompany2: 'Blog',
            footerCompany3: 'Contact',
            footerContact: 'Contact',
            footerContact1: 'WhatsApp',
            footerContact2: 'Schedule',
            footerCopyright: 'All rights reserved.',
            
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
            
            // Courses section
            coursesSubtitle1: 'Cursos grabados',
            coursesSubtitle2: 'Mentoría personalizada',
            
            course1Title: 'Curso Hotfy',
            course1Desc: 'Cómo ganar en dólares con estrategias digitales efectivas.',
            course2Title: 'Vender como afiliado',
            course2Desc: 'Cómo vender como afiliado y ganar en dólares.',
            course3Title: 'Tráfico Local Simplificado',
            course3Desc: 'Aprende a crear campañas que generen leads para negocios físicos.',
            course4Title: 'Fundamentos del Tráfico Pago',
            course4Desc: 'Curso completo para principiantes en Facebook Ads, Instagram y Google Ads.',
            course5Title: 'Estrategias para Negocios Digitales',
            course5Desc: 'Para quien desea escalar ventas de productos digitales y servicios.',
            course6Title: 'Mentoría individual',
            course6Desc: 'Mentoría individual con plan de acción exclusivo. Ideal para quien busca apoyo directo para aplicar campañas con resultados.',
            
            courseLink: 'Saber más',
            
            // About section
            aboutMission: 'Nuestra Misión',
            aboutMissionText: 'Transformar negocios a través de estrategias digitales efectivas, conectando empresarios con sus clientes ideales, independientemente de la ubicación geográfica.',
            aboutVision: 'Nuestra Visión',
            aboutVisionText: 'Ser la principal referencia en tráfico pago internacional, ofreciendo soluciones personalizadas que generen resultados reales para empresarios en cualquier lugar del mundo.',
            aboutWho: 'Quiénes Somos',
            aboutWhoText: 'Somos una agencia especializada en tráfico pago con experiencia práctica en campañas en Brasil y en el exterior. Nuestro enfoque humanizado y enfoque en resultados nos diferencia en el mercado digital.',
            aboutExperience: 'Nuestra Experiencia',
            aboutExperienceText: 'Con años de experiencia en campañas digitales, atendemos tanto a empresarios brasileños como expatriados, adaptando estrategias para diferentes culturas y mercados.',
            
            // Blog section
            blog1Title: 'Ventas digitales',
            blog1Desc: 'Estrategias y consejos para aumentar tus ventas online.',
            blog2Title: 'Consejos de tráfico pago',
            blog2Desc: 'Insights prácticos para optimizar tus campañas.',
            blog3Title: 'Para empresarios principiantes',
            blog3Desc: 'Primeros pasos en el mundo digital.',
            blog4Title: 'Tráfico internacional',
            blog4Desc: 'Estrategias para diferentes mercados globales.',
            blogCta: '¡Próximamente, artículos exclusivos sobre estrategias digitales!',
            
            // Contact section
            contactFormTitle: 'Formulario de Contacto',
            contactFormLoading: 'Cargando...',
            contact1Title: 'WhatsApp',
            contact1Link: 'Hablar ahora',
            contact2Title: 'Agendar Reunión',
            contact2Link: 'Agendar análisis gratuito',
            contact3Title: 'Redes Sociales',
            
            // Footer
            footerDesc: 'Agencia de Tráfico Pago Internacional',
            footerServices: 'Servicios',
            footerService1: 'Tráfico Pago',
            footerService2: 'Landing Pages',
            footerService3: 'Consultoría',
            footerService4: 'Mentoría',
            footerCompany: 'Empresa',
            footerCompany1: 'Acerca',
            footerCompany2: 'Blog',
            footerCompany3: 'Contacto',
            footerContact: 'Contacto',
            footerContact1: 'WhatsApp',
            footerContact2: 'Agendar',
            footerCopyright: 'Todos los derechos reservados.',
            
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
    
    // Courses section content
    translateCoursesSection(t);
    
    // About section content
    translateAboutSection(t);
    
    // Blog section content
    translateBlogSection(t);
    
    // Contact section content
    translateContactSection(t);
    
    // Footer content
    translateFooterSection(t);
    
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

// Função para traduzir a seção de cursos
function translateCoursesSection(t) {
    // Subtítulos das categorias de cursos
    const courseCategories = document.querySelectorAll('.course-category h3');
    if (courseCategories.length >= 2) {
        if (t.coursesSubtitle1) courseCategories[0].textContent = t.coursesSubtitle1;
        if (t.coursesSubtitle2) courseCategories[1].textContent = t.coursesSubtitle2;
    }
    
    // Traduzir items de cursos individuais
    const courseItems = document.querySelectorAll('.course-item');
    const courseTranslations = [
        { title: t.course1Title, desc: t.course1Desc },
        { title: t.course2Title, desc: t.course2Desc },
        { title: t.course3Title, desc: t.course3Desc },
        { title: t.course4Title, desc: t.course4Desc },
        { title: t.course5Title, desc: t.course5Desc }
    ];
    
    courseItems.forEach((item, index) => {
        if (courseTranslations[index]) {
            const titleElement = item.querySelector('h4');
            const descElement = item.querySelector('p');
            const linkElement = item.querySelector('.course-link');
            
            if (titleElement && courseTranslations[index].title) {
                titleElement.textContent = courseTranslations[index].title;
            }
            if (descElement && courseTranslations[index].desc) {
                descElement.textContent = courseTranslations[index].desc;
            }
            if (linkElement && t.courseLink) {
                linkElement.textContent = t.courseLink;
            }
        }
    });
    
    // Traduzir mentoria individual
    const mentorshipItem = document.querySelector('.mentorship-item');
    if (mentorshipItem) {
        const titleElement = mentorshipItem.querySelector('h4');
        const descElement = mentorshipItem.querySelector('p');
        
        if (titleElement && t.course6Title) {
            titleElement.textContent = t.course6Title;
        }
        if (descElement && t.course6Desc) {
            descElement.textContent = t.course6Desc;
        }
    }
}

// Função para traduzir a seção sobre
function translateAboutSection(t) {
    const aboutTexts = document.querySelectorAll('.about-text h3, .about-text p');
    
    // Mapear os elementos H3 e P da seção sobre
    const aboutElements = document.querySelectorAll('.about-text h3');
    if (aboutElements.length >= 4) {
        if (t.aboutMission) aboutElements[0].textContent = t.aboutMission;
        if (t.aboutVision) aboutElements[1].textContent = t.aboutVision;
        if (t.aboutWho) aboutElements[2].textContent = t.aboutWho;
        if (t.aboutExperience) aboutElements[3].textContent = t.aboutExperience;
    }
    
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    if (aboutParagraphs.length >= 4) {
        if (t.aboutMissionText) aboutParagraphs[0].textContent = t.aboutMissionText;
        if (t.aboutVisionText) aboutParagraphs[1].textContent = t.aboutVisionText;
        if (t.aboutWhoText) aboutParagraphs[2].textContent = t.aboutWhoText;
        if (t.aboutExperienceText) aboutParagraphs[3].textContent = t.aboutExperienceText;
    }
}

// Função para traduzir a seção do blog
function translateBlogSection(t) {
    const blogCategories = document.querySelectorAll('.category-item');
    const blogTranslations = [
        { title: t.blog1Title, desc: t.blog1Desc },
        { title: t.blog2Title, desc: t.blog2Desc },
        { title: t.blog3Title, desc: t.blog3Desc },
        { title: t.blog4Title, desc: t.blog4Desc }
    ];
    
    blogCategories.forEach((item, index) => {
        if (blogTranslations[index]) {
            const titleElement = item.querySelector('h3');
            const descElement = item.querySelector('p');
            
            if (titleElement && blogTranslations[index].title) {
                titleElement.textContent = blogTranslations[index].title;
            }
            if (descElement && blogTranslations[index].desc) {
                descElement.textContent = blogTranslations[index].desc;
            }
        }
    });
    
    // CTA do blog
    const blogCta = document.querySelector('.blog-cta p');
    if (blogCta && t.blogCta) {
        blogCta.textContent = t.blogCta;
    }
}

// Função para traduzir a seção de contato
function translateContactSection(t) {
    // Título do formulário
    const contactFormTitle = document.querySelector('.contact-form h3');
    if (contactFormTitle && t.contactFormTitle) {
        contactFormTitle.textContent = t.contactFormTitle;
    }
    
    // Loading do iframe
    const iframeText = document.querySelector('.contact-form iframe');
    if (iframeText && t.contactFormLoading) {
        // Note: iframe content can't be directly modified, but we can update the fallback text
        iframeText.textContent = t.contactFormLoading;
    }
    
    // Items de contato
    const contactItems = document.querySelectorAll('.contact-item');
    const contactTranslations = [
        { title: t.contact1Title, link: t.contact1Link },
        { title: t.contact2Title, link: t.contact2Link },
        { title: t.contact3Title, link: null }
    ];
    
    contactItems.forEach((item, index) => {
        if (contactTranslations[index]) {
            const titleElement = item.querySelector('h4');
            const linkElement = item.querySelector('a');
            
            if (titleElement && contactTranslations[index].title) {
                titleElement.textContent = contactTranslations[index].title;
            }
            if (linkElement && contactTranslations[index].link) {
                linkElement.textContent = contactTranslations[index].link;
            }
        }
    });
}

// Função para traduzir o footer
function translateFooterSection(t) {
    // Descrição da empresa
    const footerDesc = document.querySelector('.footer-logo p');
    if (footerDesc && t.footerDesc) {
        footerDesc.textContent = t.footerDesc;
    }
    
    // Colunas do footer
    const footerColumns = document.querySelectorAll('.footer-column h4');
    if (footerColumns.length >= 3) {
        if (t.footerServices) footerColumns[0].textContent = t.footerServices;
        if (t.footerCompany) footerColumns[1].textContent = t.footerCompany;
        if (t.footerContact) footerColumns[2].textContent = t.footerContact;
    }
    
    // Links dos serviços
    const serviceLinks = document.querySelectorAll('.footer-column:nth-child(1) ul li a');
    if (serviceLinks.length >= 4) {
        if (t.footerService1) serviceLinks[0].textContent = t.footerService1;
        if (t.footerService2) serviceLinks[1].textContent = t.footerService2;
        if (t.footerService3) serviceLinks[2].textContent = t.footerService3;
        if (t.footerService4) serviceLinks[3].textContent = t.footerService4;
    }
    
    // Links da empresa
    const companyLinks = document.querySelectorAll('.footer-column:nth-child(2) ul li a');
    if (companyLinks.length >= 3) {
        if (t.footerCompany1) companyLinks[0].textContent = t.footerCompany1;
        if (t.footerCompany2) companyLinks[1].textContent = t.footerCompany2;
        if (t.footerCompany3) companyLinks[2].textContent = t.footerCompany3;
    }
    
    // Links de contato
    const contactLinks = document.querySelectorAll('.footer-column:nth-child(3) ul li a');
    if (contactLinks.length >= 2) {
        if (t.footerContact1) contactLinks[0].textContent = t.footerContact1;
        if (t.footerContact2) contactLinks[1].textContent = t.footerContact2;
    }
    
    // Copyright
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright && t.footerCopyright) {
        const year = new Date().getFullYear();
        copyright.innerHTML = `&copy; ${year} Alvllack. ${t.footerCopyright}`;
    }
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