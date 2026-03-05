// Form handling functionality
class FormHandler {
    constructor() {
        this.contactForm = document.getElementById('contactForm');
        this.init();
    }
    
    init() {
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission();
            });
        }
    }
    
    handleFormSubmission() {
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!this.validateForm(name, email, message)) {
            return;
        }
        
        // Create WhatsApp message
        const whatsappMessage = this.createWhatsAppMessage(name, email, phone, service, message);
        
        // Send to WhatsApp
        this.sendToWhatsApp(whatsappMessage);
        
        // Show success message
        this.showSuccessMessage(name);
        
        // Reset form
        this.contactForm.reset();
    }
    
    validateForm(name, email, message) {
        if (!name.trim()) {
            alert('Mohon masukkan nama lengkap Anda.');
            return false;
        }
        
        if (!email.trim()) {
            alert('Mohon masukkan alamat email Anda.');
            return false;
        }
        
        if (!this.isValidEmail(email)) {
            alert('Mohon masukkan alamat email yang valid.');
            return false;
        }
        
        if (!message.trim()) {
            alert('Mohon masukkan pesan atau kebutuhan Anda.');
            return false;
        }
        
        return true;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    createWhatsAppMessage(name, email, phone, service, message) {
        return `Halo DevNest! Saya ${name} tertarik dengan layanan Anda.

📋 Detail Konsultasi:
├ Nama: ${name}
├ Email: ${email}
├ WhatsApp: ${phone || 'Tidak diisi'}
├ Paket: ${service || 'Belum memilih'}
└ Pesan: ${message}

Saya ingin konsultasi lebih lanjut. Terima kasih!`;
    }
    
    sendToWhatsApp(message) {
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/6281234567890?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    }
    
    showSuccessMessage(name) {
        alert(`✅ Terima kasih ${name}! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera melalui WhatsApp.`);
    }
}