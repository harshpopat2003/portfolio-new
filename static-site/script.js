// Simple glow effect for project items

document.addEventListener('DOMContentLoaded', () => {
    
    // Background glow effect following cursor
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        
        document.documentElement.style.setProperty('--cursor-x', `${x}%`);
        document.documentElement.style.setProperty('--cursor-y', `${y}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeToggle.checked = true;
    }
    
    // Theme switch event listener
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Background glow follows cursor - already implemented above

    // Text scramble effect for name
    const nameElement = document.querySelector('.name');
    const nameText = nameElement.textContent;
    const scrambleText = new TextScramble(nameElement);
    
    // Initial scramble on load
    setTimeout(() => {
        scrambleText.setText(nameText);
    }, 500);

    // Navigation highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Initialize active nav item
    updateActiveNavItem();
    
    // Update active nav item on scroll
    window.addEventListener('scroll', updateActiveNavItem);
    
    function updateActiveNavItem() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                if (index < navItems.length) {
                    navItems[index].classList.add('active');
                }
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
            
            // Update URL
            history.pushState(null, null, targetId);
        });
    });
    
    // Animate elements when they enter viewport
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => observer.observe(el));
    
    // Add hover effect with parallax to project items
    const projectItems = document.querySelectorAll('.project-item');
    
        // Enhanced hover effects with expanded details for project items
    projectItems.forEach(item => {
        // Create expanded details container if it doesn't exist
        if (!item.querySelector('.project-expanded-details')) {
            const projectTitle = item.querySelector('.project-title').textContent;
            
            // Create detailed descriptions based on project title in index.html
            let detailedDescription = '';
            let projectLinks = '';

            if (projectTitle.includes('Secure Property Rental/Sale Website')) {
                // Property platform project (provided by user)
                detailedDescription = `
                    <p>Designed and implemented a secure property platform with FastAPI + PostgreSQL backend and Next.js/React frontend, featuring Google OAuth, role-based dashboards, advanced search, and encrypted ACID transactions with audit logging.</p>
                    <p>Built an on-chain contract verification and escrow system using Solidity smart contracts to guarantee funds release only after post-sale checks, improving trust and reducing chargebacks.</p>
                `;
                projectLinks = `
                    <div class="project-links">
                        <a href="https://github.com/harshpopat2003/Property-Rental-Sale-Website" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    </div>
                `;
            } else if (projectTitle.includes('WikiEase - Android Mobile Application')) {
                // Unique description for WikiEase Android app
                detailedDescription = `
                    <p>Developed an Android app that integrates Wikipedia content with AI-powered summarization for enhanced information access.</p>
                    <p>Built an intuitive UI for search, article details, and favorites using Kotlin and Jetpack Compose with MVVM architecture, integrating Wikipedia API and OpenAI for article summaries.</p>
                    <p>Implemented location-based suggestions and offline caching with Room database for low-connectivity usability.</p>
                `;
                projectLinks = `
                    <div class="project-links">
                        <a href="https://github.com/harshpopat2003/WikiEase" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    </div>
                `;
            } else if (projectTitle.includes('Mood-Based Song Classifier and Recommender System')) {
                // Unique description for Mood-Based Song Classifier and Recommender System
                detailedDescription = `
                    <p>Developed an ML pipeline using XGBoost to classify user mood from listening history (86.3% accuracy) and built a personalized music recommendation system.</p>
                    <p>Engineered a robust preprocessing pipeline with feature engineering, selection (via Random Forest), and dimensionality reduction (PCA, t-SNE) to uncover mood clusters.</p>
                    <p>Implemented and compared multiple models (Logistic Regression, SVM, Random Forest, Naïve Bayes, ANN, KNN), achieving 86.3% accuracy with XGBoost after hyperparameter tuning.</p>
                    <p>Designed a novel recommendation algorithm (MASRS – Mood-Attuned Sonic Recommender System) that averages user session features, infers mood, and applies Euclidean similarity search to recommend contextually aligned songs.</p>
                    <p>Project recognized as one of the best ML projects of the year for its innovative mood-driven personalization and strong empirical performance.</p>
                `;
                projectLinks = `
                    <div class="project-links">
                        <a href="https://github.com/harshpopat2003/Mood-Based-Song-Classifier-and-Recommender-System" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    </div>
                `;
            } else {
                // Fallback description if a new project is added later
                detailedDescription = `
                    <p>Project details coming soon. This entry has a unique backend, infrastructure, and security focus with production-ready implementation details.</p>
                `;
            }
            
            const detailsHTML = `
                <div class="project-expanded-details">
                    ${projectLinks}
                    <div class="project-full-description">
                        ${detailedDescription}
                    </div>
                </div>
            `;
            
            const detailsContainer = document.createElement('div');
            detailsContainer.className = 'project-details-container';
            detailsContainer.innerHTML = detailsHTML;
            item.appendChild(detailsContainer);
        }
        
        item.addEventListener('mouseenter', () => {
            // Add highlight class to current item
            item.classList.add('expanded');
        });
        
        item.addEventListener('mouseleave', () => {
            // Remove highlight class
            item.classList.remove('expanded');
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Show success message (in a real app, you'd send this to a server)
            alert(`Thanks ${name}, your message has been received! I'll get back to you at ${email} soon.`);
            contactForm.reset();
        });
    }
});

// Text scramble effect class

class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/*?^&%$#@';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }
        
        this.el.innerHTML = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}
