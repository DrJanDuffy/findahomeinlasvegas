
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
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Search functionality
document.querySelector('.search-bar .btn').addEventListener('click', function() {
    const keyword = document.querySelector('.search-input').value;
    const priceRange = document.querySelectorAll('.search-select')[0].value;
    const beds = document.querySelectorAll('.search-select')[1].value;
    const baths = document.querySelectorAll('.search-select')[2].value;
    
    // In a real application, this would filter the listings
    console.log('Search parameters:', { keyword, priceRange, beds, baths });
    alert('Search functionality would be implemented here with real MLS data.');
});

// Property card hover effects
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Contact form submission (placeholder)
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    if (this.textContent.includes('Schedule a Free Consultation')) {
        e.preventDefault();
        alert('Contact form would be implemented here. For now, please call (702) 555-0123 or email jan.duffy@bhhsnv.com');
    }
});

// Mobile menu toggle (for future mobile menu implementation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        if (!document.querySelector('.scroll-top')) {
            const scrollTop = document.createElement('button');
            scrollTop.className = 'scroll-top';
            scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollTop.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #d4af37;
                color: white;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                cursor: pointer;
                z-index: 1000;
                transition: all 0.3s ease;
            `;
            document.body.appendChild(scrollTop);
            
            scrollTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    } else {
        const scrollTop = document.querySelector('.scroll-top');
        if (scrollTop) {
            scrollTop.remove();
        }
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Skye Summit Real Estate Website Loaded');
    
    // Add fade-in animation for sections
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
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
