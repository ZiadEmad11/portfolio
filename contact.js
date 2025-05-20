document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init('NJOP_ANlyGJWp-Ksr'); // Replace with your actual public key
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Send email using EmailJS
            emailjs.send('service_4cw692g', 'template_es3rp2h', formData)
                .then(function(response) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    alert('Failed to send message. Please try again later.');
                    console.error('EmailJS error:', error);
                });
        });
    }
});