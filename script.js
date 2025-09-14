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
            
            // Create detailed descriptions based on project title
            let detailedDescription = '';
            let projectImage = 'https://via.placeholder.com/600x400?text=Project+Screenshot';
            
            // Custom descriptions for different projects
            if (projectTitle.includes('Portfolio')) {
                detailedDescription = `
                    <p>A modern, responsive portfolio website built from scratch using semantic HTML5, CSS3, and vanilla JavaScript. The site features:</p>
                    <ul>
                        <li>Responsive design that works seamlessly across all devices</li>
                        <li>Custom cursor effects and animations for enhanced user experience</li>
                        <li>Dark/light theme toggle with persistent user preferences</li>
                        <li>Optimized performance with lazy loading images and minimal dependencies</li>
                        <li>Accessibility features following WCAG guidelines</li>
                    </ul>
                    <p>The biggest challenge was implementing the custom theme system while maintaining a consistent visual hierarchy across both themes.</p>
                `;
                projectImage = 'https://via.placeholder.com/600x400/112240/64ffda?text=Portfolio+Website';
            } 
            else if (projectTitle.includes('E-commerce') || projectTitle.includes('Dashboard')) {
                detailedDescription = `
                    <p>A comprehensive e-commerce dashboard that provides real-time analytics and inventory management. Key features include:</p>
                    <ul>
                        <li>Interactive data visualization with Chart.js</li>
                        <li>Real-time sales tracking and inventory monitoring</li>
                        <li>User authentication with role-based permissions</li>
                        <li>Order management system with filtering and sorting</li>
                        <li>Integration with payment gateways and shipping APIs</li>
                    </ul>
                    <p>This project required deep understanding of state management and optimization techniques to handle large datasets without compromising performance.</p>
                `;
                projectImage = 'https://via.placeholder.com/600x400/112240/64ffda?text=E-commerce+Dashboard';
            }
            else if (projectTitle.includes('Weather')) {
                detailedDescription = `
                    <p>A feature-rich weather application that provides accurate forecasts and weather data visualization. Built with:</p>
                    <ul>
                        <li>OpenWeatherMap API integration for real-time weather data</li>
                        <li>Geolocation services to detect user's current location</li>
                        <li>Interactive maps showing weather patterns</li>
                        <li>7-day forecast with hourly breakdowns</li>
                        <li>Customizable alerts for severe weather conditions</li>
                    </ul>
                    <p>The main challenge was optimizing API calls to maintain responsiveness while limiting usage to stay within free tier limits.</p>
                `;
                projectImage = 'https://via.placeholder.com/600x400/112240/64ffda?text=Weather+App';
            }
            else {
                detailedDescription = `
                    <p>This project showcases my skills in frontend development with a focus on user experience and clean code. Key features include:</p>
                    <ul>
                        <li>Modern UI/UX design principles with attention to detail</li>
                        <li>Responsive layouts that adapt to any screen size</li>
                        <li>Performance optimization for fast loading times</li>
                        <li>Cross-browser compatibility and progressive enhancement</li>
                        <li>Comprehensive documentation and maintainable code structure</li>
                    </ul>
                    <p>Throughout development, I focused on writing clean, maintainable code while ensuring the best possible user experience.</p>
                `;
                projectImage = `https://via.placeholder.com/600x400/112240/64ffda?text=${projectTitle.replace(/\s+/g, '+')}`;  
            }
            
            const detailsHTML = `
                <div class="project-expanded-details">
                    <div class="project-screenshot">
                        <img src="${projectImage}" alt="${projectTitle} Screenshot">
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link"><i class="fab fa-github"></i> View Code</a>
                        <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    </div>
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
