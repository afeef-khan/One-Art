const hamIcon = document.querySelector('.ham-icon');
const navList = document.querySelector('.nav-list');
const hamCross = document.querySelector('.ham-cross');
const navLink = document.querySelectorAll('.nav-list li a');

hamIcon.addEventListener('click', () => {
    hamIcon.classList.add('ham-active');
    navList.classList.add('ham-active');
    hamCross.classList.add('ham-active');
})

hamCross.addEventListener('click', () => {
    hamIcon.classList.remove('ham-active');
    navList.classList.remove('ham-active');
    hamCross.classList.remove('ham-active');
})

// Close menu if clicking outside
document.addEventListener('click', (event) => {
    if (
        !navList.contains(event.target) &&
        !hamIcon.contains(event.target)
    ) {
        hamIcon.classList.remove('ham-active');
        navList.classList.remove('ham-active');
    }
});

// Close menu if click on NavLink
navLink.forEach(link => {
    link.addEventListener('click', () => {
        hamIcon.classList.remove('ham-active');
        navList.classList.remove('ham-active');
        hamCross.classList.remove('ham-active');
    })
});


// ============================================
// SMOOTH SCROLLING FOR NAVIGATION
// ============================================
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

// ============================================
// SCROLL ANIMATIONS - INTERSECTION OBSERVER
// ============================================

// Fade in from bottom animation
const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Fade in from left animation
const fadeLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px'
});

// Fade in from right animation
const fadeRightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px'
});

// Scale up animation
const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

// ============================================
// APPLY ANIMATIONS TO ELEMENTS
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // Animate section titles - fade up
    document.querySelectorAll('.section-title').forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(40px)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeUpObserver.observe(title);
    });

    // Animate product cards - fade up with stagger
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        fadeUpObserver.observe(card);
    });

    // Animate about text - fade from left
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(-50px)';
        aboutText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeLeftObserver.observe(aboutText);
    }

    // Animate about image - fade from right
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        aboutImage.style.opacity = '0';
        aboutImage.style.transform = 'translateX(50px)';
        aboutImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeRightObserver.observe(aboutImage);
    }

    // Animate contact form - fade from left
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.style.opacity = '0';
        contactForm.style.transform = 'translateX(-50px)';
        contactForm.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeLeftObserver.observe(contactForm);
    }

    // Animate contact info - fade from right
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.style.opacity = '0';
        contactInfo.style.transform = 'translateX(50px)';
        contactInfo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeRightObserver.observe(contactInfo);
    }

    // Animate tagline - scale up
    const tagline = document.querySelector('.tagline-container');
    if (tagline) {
        tagline.style.opacity = '0';
        tagline.style.transform = 'scale(0.8)';
        tagline.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scaleObserver.observe(tagline);
    }

    // Animate hero content - fade from left
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(-50px)';
        heroContent.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
        fadeLeftObserver.observe(heroContent);
    }

    // Animate hero visual - fade from right
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'translateX(50px)';
        heroVisual.style.transition = 'opacity 1s ease 0.5s, transform 1s ease 0.5s';
        fadeRightObserver.observe(heroVisual);
    }

    // Animate footer content - fade up
    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
        footerContent.style.opacity = '0';
        footerContent.style.transform = 'translateY(30px)';
        footerContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeUpObserver.observe(footerContent);
    }
});

// ============================================
// PARALLAX EFFECT FOR HERO IMAGE
// ============================================
window.addEventListener('scroll', () => {
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        heroImg.style.transform = `translateY(${rate}px)`;
    }
});

// ============================================
// HOVER EFFECTS FOR SOCIAL ICONS
// ============================================
document.querySelectorAll('.social-links i').forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px) rotate(10deg)';
    });

    icon.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ============================================
// FORM SUBMISSION HANDLER
// ============================================
const contactFormElement = document.getElementById('contactForm');
if (contactFormElement) {
    contactFormElement.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Show success message
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    });
}

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(47, 79, 79, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'var(--deep-teal)';
        nav.style.backdropFilter = 'none';
    }
});


// -------

// Animate testimonial cards - fade up with stagger
    document.querySelectorAll('.masonry-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`;
        fadeUpObserver.observe(item);
    });