// Navbar functionality
class Navbar {
    constructor() {
        this.header = document.getElementById('header');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        this.lastScrollY = window.scrollY;
        this.scrollThreshold = 100;
        this.isScrolling = null;
        
        this.init();
    }
    
    init() {
        this.setupMobileMenu();
        this.setupScrollBehavior();
        this.setupSmoothScroll();
    }
    
    setupMobileMenu() {
        if (this.mobileMenuBtn && this.navLinks) {
            this.mobileMenuBtn.addEventListener('click', () => {
                this.navLinks.classList.toggle('active');
                this.mobileMenuBtn.innerHTML = this.navLinks.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
        }
    }
    
    setupScrollBehavior() {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Clear timeout throughout the scroll
            window.clearTimeout(this.isScrolling);
            
            // Header background effect
            if (currentScrollY > this.scrollThreshold) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
                this.header.classList.remove('hidden');
            }
            
            // Determine scroll direction
            if (currentScrollY > this.lastScrollY && currentScrollY > this.scrollThreshold) {
                // Scroll down - hide navbar
                this.header.classList.add('hidden');
            } else {
                // Scroll up - show navbar
                this.header.classList.remove('hidden');
            }
            
            // Mobile menu close when scrolling
            if (this.navLinks.classList.contains('active')) {
                this.navLinks.classList.remove('active');
                this.mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Set timeout to run after scrolling ends
            this.isScrolling = setTimeout(() => {
                if (currentScrollY <= this.scrollThreshold) {
                    this.header.classList.remove('hidden');
                }
            }, 66);
            
            this.lastScrollY = currentScrollY;
        });
    }
    
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    if (this.navLinks.classList.contains('active')) {
                        this.navLinks.classList.remove('active');
                        this.mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                    
                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

