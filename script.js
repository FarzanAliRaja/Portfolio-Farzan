document.addEventListener('DOMContentLoaded', () => {
    // Contact icon links
    document.getElementById('whatsapp-link').addEventListener('click', () => {
        window.open('https://wa.me/+923421682530', '_blank');
    });

    document.getElementById('github-link').addEventListener('click', () => {
        window.open('https://github.com/FarzanAliRaja/', '_blank');
    });

    document.getElementById('linkedin-link').addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/farzan-ali-raja-b4b261240', '_blank');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Extract form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Send data to server (you can replace this URL with your actual form handling URL)
            try {
                const response = await fetch('https://your-server-endpoint.com/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    alert('Your message has been sent successfully!');
                    contactForm.reset(); // Clear the form
                } else {
                    alert('There was a problem sending your message. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            }
        });
    }

    // Scroll to top button
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
