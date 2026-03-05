// Scroll animations dengan performance optimization
class ScrollAnimations {
    constructor() {
        this.fadeElements = document.querySelectorAll('.fade-in');
        this.scrollTimeout = null;
        this.init();
    }
    
    init() {
        this.setupScrollAnimations();
        this.checkInitialElements();
    }
    
    setupScrollAnimations() {
        // Throttled scroll handler untuk performance
        const throttledScrollHandler = () => {
            if (!this.scrollTimeout) {
                this.scrollTimeout = setTimeout(() => {
                    this.scrollTimeout = null;
                    this.checkElements();
                }, 100);
            }
        };
        
        window.addEventListener('scroll', throttledScrollHandler);
        window.addEventListener('resize', throttledScrollHandler);
    }
    
    checkInitialElements() {
        // Check elements on page load
        setTimeout(() => {
            this.checkElements();
        }, 500);
    }
    
    checkElements() {
        this.fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
}

// Parallax effect (optional)
class ParallaxEffect {
    constructor() {
        this.heroSection = document.querySelector('.hero');
        this.init();
    }
    
    init() {
        if (this.heroSection && window.innerWidth > 768) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.5;
                this.heroSection.style.transform = `translate3d(0px, ${rate}px, 0px)`;
            });
        }
    }
}

// Enhanced animations for new about layout
class AboutAnimations {
    constructor() {
        this.valueCards = document.querySelectorAll('.value-card');
        this.init();
    }
    
    init() {
        this.setupStaggerAnimations();
    }
    
    setupStaggerAnimations() {
        // Add delay for staggered animation
        this.valueCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
}

// Initialize in app.js
// this.components.aboutAnimations = new AboutAnimations();