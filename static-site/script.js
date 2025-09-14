// Copied from root script.js
// Simple glow effect for project items

document.addEventListener('DOMContentLoaded', () => {
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        document.documentElement.style.setProperty('--cursor-x', `${x}%`);
        document.documentElement.style.setProperty('--cursor-y', `${y}%`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeToggle.checked = true;
    }
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const nameText = nameElement.textContent;
        const scrambleText = new TextScramble(nameElement);
        setTimeout(() => { scrambleText.setText(nameText); }, 500);
    }

    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    function updateActiveNavItem() {
        const scrollPosition = window.scrollY + 100;
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                if (index < navItems.length) navItems[index].classList.add('active');
            }
        });
    }
    updateActiveNavItem();
    window.addEventListener('scroll', updateActiveNavItem);

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({ top: targetElement.offsetTop - 50, behavior: 'smooth' });
            history.pushState(null, null, targetId);
        });
    });

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('animate'); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    animateElements.forEach(el => observer.observe(el));

    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        if (!item.querySelector('.project-expanded-details')) {
            const projectTitle = item.querySelector('.project-title').textContent;
            let detailedDescription = '';
            let projectImage = 'https://via.placeholder.com/600x400?text=Project+Screenshot';
            if (projectTitle.includes('Portfolio')) {
                detailedDescription = `<p>This portfolio site showcases responsive design, theme toggling, and custom animations.</p>`;
                projectImage = 'https://via.placeholder.com/600x400/112240/64ffda?text=Portfolio+Website';
            } else {
                detailedDescription = `<p>A project highlighting frontend polish and performance best practices.</p>`;
                projectImage = `https://via.placeholder.com/600x400/112240/64ffda?text=${projectTitle.replace(/\s+/g,'+')}`;
            }
            const detailsHTML = `
                <div class="project-expanded-details">
                    <div class="project-screenshot"><img src="${projectImage}" alt="${projectTitle} Screenshot"></div>
                    <div class="project-links">
                        <a href="#" class="project-link"><i class="fab fa-github"></i> View Code</a>
                        <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    </div>
                    <div class="project-full-description">${detailedDescription}</div>
                </div>`;
            const detailsContainer = document.createElement('div');
            detailsContainer.className = 'project-details-container';
            detailsContainer.innerHTML = detailsHTML;
            item.appendChild(detailsContainer);
        }
        item.addEventListener('mouseenter', () => { item.classList.add('expanded'); });
        item.addEventListener('mouseleave', () => { item.classList.remove('expanded'); });
    });
});

class TextScramble {
    constructor(el) { this.el = el; this.chars = '!<>-_\\/*?^&%$#@'; this.update = this.update.bind(this); }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''; const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest); this.frame = 0; this.update(); return promise;
    }
    update() {
        let output = ''; let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) { complete++; output += to; }
            else if (this.frame >= start) { if (!char || Math.random() < 0.28) { char = this.randomChar(); this.queue[i].char = char; } output += `<span class="dud">${char}</span>`; }
            else { output += from; }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) { this.resolve(); }
        else { this.frameRequest = requestAnimationFrame(this.update); this.frame++; }
    }
    randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
}
