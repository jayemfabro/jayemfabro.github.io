// Portfolio Configuration
const PORTFOLIO_CONFIG = {
    githubUrl: "https://github.com/jayemfabro",
    email: "jayemfabro@example.com",
    linkedin: null,
};

// Projects Data
const PROJECTS = [
    {
        id: 1,
        category: "01",
        title: "School Event Registration System",
        description: "A system for managing school events and student registrations with admin dashboard.",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        repoUrl: null,
        demoUrl: null
    },
    {
        id: 2,
        category: "02",
        title: "Resort Management System",
        description: "Comprehensive resort management solution for bookings, rooms, and customer management.",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        repoUrl: null,
        demoUrl: null
    },
    {
        id: 3,
        category: "03",
        title: "POS System",
        description: "Point of Sale system for retail businesses with inventory and sales tracking.",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        repoUrl: null,
        demoUrl: null
    },
    {
        id: 4,
        category: "04",
        title: "Inventory Management System",
        description: "System to track inventory, stock levels, and product management for businesses.",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        repoUrl: null,
        demoUrl: null
    },
    {
        id: 5,
        category: "05",
        title: "SystemChecker",
        description: "System monitoring and checking tool for hardware and software diagnostics.",
        technologies: ["PHP", "HTML", "CSS", "JavaScript"],
        repoUrl: null,
        demoUrl: null
    }
];

// Mobile Navigation
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth Scroll and Active Navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Active Navigation on Scroll
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -20% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    PROJECTS.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card';
        
        const techTags = project.technologies.map(tech => 
            <span class=\"project-tech-tag\"></span>
        ).join('');
        
        const repoLink = project.repoUrl 
            ? <a href=\"\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"project-link\">→ Repository</a>
            : <span class=\"project-link project-link-disabled\">→ Private / Not published</span>;
        
        const demoLink = project.demoUrl 
            ? <a href=\"\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"project-link\">→ Live Demo</a>
            : '';
        
        projectCard.innerHTML = 
            <div class=\"project-header\">
                <span class=\"project-category\"></span>
            </div>
            <h3 class=\"project-name\"></h3>
            <p class=\"project-description\"></p>
            <div class=\"project-tech\">
                
            </div>
            <div class=\"project-links\">
                
                
            </div>
        ;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Update Contact Links
function updateContactLinks() {
    const emailLink = document.getElementById('emailLink');
    const githubLink = document.getElementById('githubLink');
    const linkedinLink = document.getElementById('linkedinLink');
    
    if (emailLink && PORTFOLIO_CONFIG.email) {
        emailLink.href = mailto:;
        const valueSpan = emailLink.querySelector('.contact-link-value');
        if (valueSpan) valueSpan.textContent = PORTFOLIO_CONFIG.email;
    }
    
    if (githubLink && PORTFOLIO_CONFIG.githubUrl) {
        githubLink.href = PORTFOLIO_CONFIG.githubUrl;
    }
    
    if (linkedinLink) {
        if (PORTFOLIO_CONFIG.linkedin) {
            linkedinLink.href = PORTFOLIO_CONFIG.linkedin;
            linkedinLink.classList.remove('contact-link-disabled');
            const valueSpan = linkedinLink.querySelector('.contact-link-value');
            if (valueSpan) valueSpan.textContent = PORTFOLIO_CONFIG.linkedin;
            linkedinLink.removeAttribute('title');
        }
    }
}

// Dynamic Footer Year
function initFooterYear() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear().toString();
    }
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize
function init() {
    initMobileNav();
    initSmoothScroll();
    initActiveNavOnScroll();
    renderProjects();
    updateContactLinks();
    initFooterYear();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
