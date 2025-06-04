// Mobile menu functionality
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const header = document.querySelector('header');

// Mobile menu functionality
burger.addEventListener('click', () => {
    // Toggle nav
    nav.classList.toggle('nav-active');
    
    // Burger animation
    burger.classList.toggle('toggle');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        }
    });
});

// Add scroll event listener for header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}); 

// Add scroll event listener for navigation links
function onScroll() {
    let currentSectionId = '';
    const scrollY = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
        if (scrollY >= section.offsetTop) {
            currentSectionId = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('nav-link-active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('nav-link-active');
        }
    });
}

window.addEventListener('scroll', onScroll);