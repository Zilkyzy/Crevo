// Main application entry point
class DevNestApp {
    constructor() {
        this.components = {};
        this.init();
    }
    
    init() {
        // Initialize all components ketika DOM siap
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeComponents();
            });
        } else {
            this.initializeComponents();
        }
    }
    
    initializeComponents() {
        try {
            // Initialize semua komponen
            this.components.navbar = new Navbar();
            this.components.animations = new ScrollAnimations();
            this.components.parallax = new ParallaxEffect();
            this.components.formHandler = new FormHandler();
            
            console.log('✅ DevNest App initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing DevNest App:', error);
        }
    }
}

// Initialize aplikasi
const devNestApp = new DevNestApp();

// Global functions jika diperlukan
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

