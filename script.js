// Portfolio Configuration
const PORTFOLIO_CONFIG = {
    githubUrl: "https://github.com/jayemfabro",
    email: "fabrojayem1@gmail.com",
    linkedin: null,
};

// Projects Data
const PROJECTS = [
    // NCIP Internship Projects
    {
        id: 1,
        title: "IPITVS” Indigenous Peoples Incident Tracking and Validation System",
        category: "NCIP Internship Project",
        employer: "National Commission on Indigenous Peoples (NCIP)",
        method: "Agile / System Development",
        description: "Contributed to an internal web-based system for incident tracking and validation. Assisted with system design, workflow analysis, testing, and troubleshooting.",
        technologies: ["React.js", "Laravel", "MySQL"],
        repoUrl: null,
        demoUrl: null,
        status: "internship"
    },
    {
        id: 2,
        title: "CADT/CALT Dashboard",
        category: "NCIP Internship Project",
        employer: "National Commission on Indigenous Peoples (NCIP)",
        method: "Agile / System Development",
        description: "Contributed to a dashboard for monitoring and organizing CADT/CALT-related information. Assisted in workflow analysis, system evaluation, and usability testing.",
        technologies: ["React.js", "Laravel", "MySQL"],
        repoUrl: null,
        demoUrl: null,
        status: "internship"
    },
    {
        id: 3,
        title: "GSD Progress Tracker System",
        category: "NCIP Internship Project",
        employer: "National Commission on Indigenous Peoples (NCIP)",
        method: "Agile / System Development",
        description: "Contributed to a progress tracking system for workflow monitoring and documentation. Participated in system testing, troubleshooting, and requirements analysis.",
        technologies: ["React.js", "Laravel", "MySQL"],
        repoUrl: null,
        demoUrl: null,
        status: "internship"
    },
    // Academic/Personal Projects
    {
        id: 4,
        title: "ROOMIFY” Computer Vision-Based Room Mapping and Attendance Tracking System",
        category: "Academic Project (2025)",
        employer: "Mindoro State University",
        method: "Research & Development",
        description: "Developed a computer vision-based system for room mapping and attendance tracking, applying computer vision concepts to support automated room and attendance monitoring.",
        technologies: [],
        repoUrl: null,
        demoUrl: null,
        status: "completed"
    },
    {
        id: 5,
        title: "iMap” Web-Based Mapping for Managing and Visualizing Lot Subdivisions",
        category: "Academic Project (2025)",
        employer: "Mindoro State University",
        method: "Web Development",
        description: "Developed a web-based mapping system for managing and visualizing lot subdivisions, with an interactive interface for organizing and presenting mapping information.",
        technologies: [],
        repoUrl: null,
        demoUrl: null,
        status: "completed"
    },
    {
        id: 6,
        title: "SPEEDUP” Tutorial and Management System",
        category: "Academic Project (2025)",
        employer: "Mindoro State University",
        method: "Web Development",
        description: "Developed a tutorial and management system to support the organization and management of tutorial-related activities.",
        technologies: [],
        repoUrl: null,
        demoUrl: null,
        status: "completed"
    },
    {
        id: 7,
        title: "KAPEREST” POS and Inventory Solution with Real-Time Sales Insights",
        category: "Academic Project (2024)",
        employer: "Mindoro State University",
        method: "Web Development",
        description: "Developed a point-of-sale and inventory solution with real-time sales monitoring and sales insights.",
        technologies: [],
        repoUrl: null,
        demoUrl: null,
        status: "completed"
    },
    {
        id: 8,
        title: "Raymundo Flower Shop",
        category: "E-commerce",
        employer: "Personal Project",
        method: "Web Development",
        description: "Flower shop web application for product browsing, ordering, and customer purchase workflows.",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        repoUrl: null,
        demoUrl: null,
        status: "completed"
    },
    {
        id: 9,
        title: "School Event Registration System",
        category: "Event Management",
        employer: "Personal Project",
        method: "Web Development",
        description: "School event registration and management system with event statuses, registration tracking, and QR code scanning.",
        technologies: ["PHP", "MySQL", "JavaScript", "QR Code"],
        repoUrl: null,
        demoUrl: null,
        status: "completed"
    },
    {
        id: 10,
        title: "Resort Booking System",
        category: "Booking Management",
        employer: "Personal Project",
        method: "Web Development",
        description: "Resort booking system with user accounts, role-based access, booking records, and guest information.",
        technologies: ["Laravel 11", "PHP", "MySQL"],
        repoUrl: null,
        demoUrl: null,
        status: "completed"
    },
    {
        id: 11,
        title: "Estrella Foodhub POS",
        category: "Point of Sale",
        employer: "Personal Project",
        method: "Web Development",
        description: "Food business POS system supporting sales transactions and database-backed business operations.",
        technologies: ["PHP", "MySQL", "JavaScript"],
        repoUrl: null,
        demoUrl: null,
        status: "completed"
    },
    {
        id: 12,
        title: "Lemonade",
        category: "Game Development",
        employer: "Personal Project",
        method: "Game Development",
        description: "Open-world survival game project featuring terrain exploration, mountains, rivers, lakes, forests, and environmental exploration.",
        technologies: ["Luau"],
        repoUrl: null,
        demoUrl: null,
        status: "completed"
    },
    {
        id: 13,
        title: "Vape Shop Inventory System",
        category: "Inventory Management",
        employer: "Proposed Client",
        method: "Web Development",
        description: "Proposed client system for tracking product quantities and automatically deducting stock when purchases are recorded.",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        repoUrl: null,
        demoUrl: null,
        status: "proposed"
    }
];

// Mobile Navigation
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link[href^=\"#\"], .btn[href^=\"#\"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
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

        const techTags = (project.technologies || []).map(tech =>
            '<span class="project-tech-tag">' + escapeHtml(tech) + '</span>'
        ).join('');

        const repoUrl = project.github || project.repository || project.repo || '';
        const demoUrl = project.demo || project.demoUrl || '';

        const repoLink = repoUrl
            ? '<a href="' + escapeHtml(repoUrl) + '" target="_blank" rel="noopener noreferrer">Repository</a>'
            : '';

        const demoLink = demoUrl
            ? '<a href="' + escapeHtml(demoUrl) + '" target="_blank" rel="noopener noreferrer">Live Demo</a>'
            : '';

        projectCard.innerHTML =
            '<div class="project-content">' +
                '<h3 class="project-title">' + escapeHtml(project.name || project.title || '') + '</h3>' +
                '<p class="project-description">' + escapeHtml(project.description || '') + '</p>' +
                (techTags ? '<div class="project-tech">' + techTags + '</div>' : '') +
                ((repoLink || demoLink) ? '<div class="project-links">' + repoLink + demoLink + '</div>' : '') +
            '</div>';

        projectsGrid.appendChild(projectCard);
    });
}

// Update Contact Links
function updateContactLinks() {
    const emailContact = document.getElementById('emailLink');
    const githubContact = document.getElementById('githubLink');
    const linkedinContact = document.getElementById('linkedinLink');
    
    if (emailContact && PORTFOLIO_CONFIG.email) {
        emailContact.href = 'mailto:' + PORTFOLIO_CONFIG.email;
    }
    
    if (githubContact && PORTFOLIO_CONFIG.githubUrl) {
        githubContact.href = PORTFOLIO_CONFIG.githubUrl;
    }
    
    if (linkedinContact) {
        if (PORTFOLIO_CONFIG.linkedin) {
            linkedinContact.href = PORTFOLIO_CONFIG.linkedin;
            linkedinContact.classList.remove('contact-link-card-disabled');
            linkedinContact.removeAttribute('title');
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

// Cursor Glow Effect
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    if (window.innerWidth < 768) {
        cursorGlow.style.display = 'none';
        return;
    }
    
    cursorGlow.style.display = 'block';
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
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
    renderProjects();
    updateContactLinks();
    initFooterYear();
    initCursorGlow();
    
    window.addEventListener('resize', () => {
        const cursorGlow = document.getElementById('cursorGlow');
        if (cursorGlow) {
            if (window.innerWidth < 768) {
                cursorGlow.style.display = 'none';
            } else if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                cursorGlow.style.display = 'block';
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
