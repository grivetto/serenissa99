// script.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer for 'Antigravity' Scroll Entry Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opted not to unobserve to allow the animation to trigger again when scrolling back up
                // To animate only once, uncomment the next line:
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(section => {
        observer.observe(section);
    });

    // 2. Custom Glowing Cursor tracking
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    document.body.appendChild(cursorGlow);

    // Initial position offscreen
    cursorGlow.style.top = '-500px';
    cursorGlow.style.left = '-500px';

    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursorGlow.style.top = e.clientY + 'px';
            cursorGlow.style.left = e.clientX + 'px';
        });
    });

    // Handle cursor disappear when leaving window
    document.addEventListener('mouseout', () => {
        cursorGlow.style.opacity = '0';
    });
    document.addEventListener('mouseover', () => {
        cursorGlow.style.opacity = '1';
    });
});
