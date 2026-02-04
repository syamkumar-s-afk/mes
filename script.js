// Initialize EmailJS with your public key
(function () {
    emailjs.init("ZldIPW7qXycYVhTZa");
})();

// DOM Elements
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');
const closeErrorBtn = document.getElementById('closeErrorBtn');
const errorText = document.getElementById('errorText');

// Form submission handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.querySelector('.btn-text').textContent = 'Sending';

    // Get form data
    const formData = {
        from_name: document.getElementById('name').value,
        reply_to: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        // Send email using EmailJS
        const response = await emailjs.send(
            'service_pf729tq',
            'template_onyalui',
            formData
        );

        console.log('SUCCESS!', response.status, response.text);

        // Hide form and show success message
        contactForm.style.display = 'none';
        successMessage.classList.add('show');

        // Reset form
        contactForm.reset();

    } catch (error) {
        console.error('FAILED...', error);

        // Hide form and show error message
        contactForm.style.display = 'none';
        errorMessage.classList.add('show');

        // Set error message based on error type
        if (error.text) {
            errorText.textContent = `Error: ${error.text}`;
        } else if (error.message) {
            errorText.textContent = `Error: ${error.message}`;
        } else {
            errorText.textContent = 'Unable to send message. Please check your internet connection and try again.';
        }
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.querySelector('.btn-text').textContent = 'Send Message';
    }
});

// Close success message and show form again
closeSuccessBtn.addEventListener('click', () => {
    successMessage.classList.remove('show');
    contactForm.style.display = 'flex';
});

// Close error message and show form again
closeErrorBtn.addEventListener('click', () => {
    errorMessage.classList.remove('show');
    contactForm.style.display = 'flex';
});

// Add input validation and styling
const inputs = document.querySelectorAll('.form-input, .form-textarea');

inputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });

    // Real-time validation
    input.addEventListener('input', () => {
        if (input.validity.valid) {
            input.style.borderColor = 'rgba(102, 126, 234, 0.5)';
        } else {
            input.style.borderColor = 'rgba(245, 87, 108, 0.5)';
        }
    });
});

// Add smooth scroll behavior
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

// Add parallax effect to gradient orbs
window.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;

        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Form field character counter (optional enhancement)
const messageField = document.getElementById('message');
const maxLength = 500;

messageField.addEventListener('input', () => {
    const currentLength = messageField.value.length;

    // You can add a character counter display here if needed
    if (currentLength > maxLength) {
        messageField.value = messageField.value.substring(0, maxLength);
    }
});

// Email validation helper
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Enhanced form validation before submission
const validateForm = (e) => {
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    // Validate name
    if (nameInput.value.trim().length < 2) {
        e.preventDefault();
        alert('Please enter a valid name (at least 2 characters)');
        nameInput.focus();
        return false;
    }

    // Validate email
    if (!isValidEmail(emailInput.value)) {
        e.preventDefault();
        alert('Please enter a valid email address');
        emailInput.focus();
        return false;
    }

    // Validate message
    if (messageInput.value.trim().length < 10) {
        e.preventDefault();
        alert('Please enter a message (at least 10 characters)');
        messageInput.focus();
        return false;
    }

    return true;
};

// Add animation on scroll (for future enhancements)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature items for scroll animations
document.querySelectorAll('.feature-item').forEach(item => {
    observer.observe(item);
});

console.log('Contact form initialized successfully!');
console.log('EmailJS configured with Service ID: service_pf729tq');
