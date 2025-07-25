// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Search functionality
    const searchButton = document.querySelector('.search-bar .btn-primary');
    const searchInput = document.querySelector('.search-input');
    const priceSelect = document.querySelector('.search-select[title="Price Range"]');
    const bedsSelect = document.querySelector('.search-select[title="Bedrooms"]');
    const bathsSelect = document.querySelector('.search-select[title="Bathrooms"]');

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value;
            const priceRange = priceSelect.value;
            const beds = bedsSelect.value;
            const baths = bathsSelect.value;
            
            // Here you would typically send this data to your backend
            console.log('Search:', {
                keywords: searchTerm,
                priceRange: priceRange,
                beds: beds,
                baths: baths
            });
            
            // For now, just show an alert
            alert('Search functionality will be implemented with backend integration.');
        });
    }

    // Property card hover effects
    const propertyCards = document.querySelectorAll('.property-card');
    
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Blog card hover effects
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Contact form simulation
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If it's a contact link, show a contact form modal
            if (this.getAttribute('href') === '#contact') {
                e.preventDefault();
                showContactModal();
            }
        });
    });

    // Initialize any additional features
    initializeAnimations();
});

// Contact modal function
function showContactModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            position: relative;
        ">
            <button onclick="this.parentElement.parentElement.remove()" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
            ">&times;</button>
            <h2 style="color: #0A2540; margin-bottom: 1rem;">Contact Dr. Jan Duffy</h2>
            <p style="color: #666; margin-bottom: 1.5rem;">Ready to find your dream home in Skye Summit? Let's connect!</p>
            <div style="margin-bottom: 1rem;">
                <strong>Phone:</strong> (702) 930-8222
            </div>
            <div style="margin-bottom: 1rem;">
                <strong>Email:</strong> DrJanSells@SkyeSummitHomes.com
            </div>
            <div style="margin-bottom: 1.5rem;">
                <strong>Location:</strong> Las Vegas, Nevada
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: #3A8DDE;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 600;
            ">Close</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
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
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Trigger first section immediately
    if (sections[0]) {
        sections[0].style.opacity = '1';
        sections[0].style.transform = 'translateY(0)';
    }
}

// Performance optimization: Lazy load images when added
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
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
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
    lazyLoadImages();
}

// Review request functionality
const reviewRequestBtn = document.getElementById('review-request-btn');

if (reviewRequestBtn) {
    reviewRequestBtn.addEventListener('click', () => {
        // Check if user has visited before
        const hasVisited = localStorage.getItem('hasVisitedBefore');
        
        if (!hasVisited) {
            // First-time visitor - show welcome message
            showReviewRequestModal('Welcome!', 
                'Thank you for visiting our Skye Summit real estate website! If you\'ve worked with Dr. Jan Duffy, we\'d love to hear about your experience.',
                'https://share.google/yoVmGzrpTUtHrvsnL&action=write_review');
            localStorage.setItem('hasVisitedBefore', 'true');
        } else {
            // Returning visitor - show review request
            showReviewRequestModal('Share Your Experience', 
                'If you\'ve had a great experience with Dr. Jan Duffy and Skye Summit real estate, please consider leaving a review to help others.',
                'https://share.google/yoVmGzrpTUtHrvsnL&action=write_review');
        }
    });
}

function showReviewRequestModal(title, message, reviewUrl) {
    const modal = document.createElement('div');
    modal.className = 'review-modal';
    modal.innerHTML = `
        <div class="review-modal-content">
            <div class="review-modal-header">
                <h3>${title}</h3>
                <button class="review-modal-close" aria-label="Close review request modal">&times;</button>
            </div>
            <div class="review-modal-body">
                <p>${message}</p>
                <div class="review-modal-stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
            <div class="review-modal-footer">
                <a href="${reviewUrl}" target="_blank" rel="noopener" class="btn btn-primary">
                    <i class="fas fa-edit"></i> Write Review on Google
                </a>
                <button class="btn btn-secondary review-modal-close">Maybe Later</button>
            </div>
        </div>
    `;

    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .review-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .review-modal-content {
            background: white;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        }
        
        .review-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.5rem 0;
        }
        
        .review-modal-header h3 {
            margin: 0;
            color: #0A2540;
            font-size: 1.5rem;
        }
        
        .review-modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .review-modal-close:hover {
            background: #f0f0f0;
        }
        
        .review-modal-body {
            padding: 1rem 1.5rem;
            text-align: center;
        }
        
        .review-modal-body p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        
        .review-modal-stars {
            display: flex;
            justify-content: center;
            gap: 0.25rem;
            margin: 1rem 0;
        }
        
        .review-modal-stars .fas.fa-star {
            color: #FFD700;
            font-size: 1.5rem;
        }
        
        .review-modal-footer {
            padding: 0 1.5rem 1.5rem;
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 480px) {
            .review-modal-footer {
                flex-direction: column;
            }
            
            .review-modal-content {
                margin: 1rem;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);

    // Close modal functionality
    const closeButtons = modal.querySelectorAll('.review-modal-close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.remove();
            style.remove();
        });
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            style.remove();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            style.remove();
        }
    });
} 