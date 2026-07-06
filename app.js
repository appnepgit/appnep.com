/**
 * AppNep Landing Page Script
 * --------------------------------------------------
 * Easily configure your App and YouTube links below.
 */

// 1. Centralized Configuration
const CONFIG = {
    APP_LINK: "https://appnep.com/app",
    YOUTUBE_LINK: "https://youtube.com/"
};

document.addEventListener("DOMContentLoaded", () => {
    
    // 2. Bind Configured Links to UI Elements
    function bindLinks() {
        // App links
        document.querySelectorAll(".js-app-link, .js-app-btn").forEach(elem => {
            elem.setAttribute("href", CONFIG.APP_LINK);
        });

        // YouTube links
        document.querySelectorAll(".js-youtube-link, .js-youtube-btn").forEach(elem => {
            elem.setAttribute("href", CONFIG.YOUTUBE_LINK);
        });
    }
    
    bindLinks();

    // Initialize Lucide Icons after links are bound
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 3. Header Scroll Effect
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 4. Hamburger Menu / Mobile Navigation
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        navMenu.classList.toggle("open");
    });

    // Close menu when navigation links are clicked
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Avoid closing if it's the contact trigger (handled separately)
            if (link.id === "contact-nav-trigger") return;
            
            hamburgerBtn.classList.remove("active");
            navMenu.classList.remove("open");
        });
    });

    // 5. Contact Modal logic
    const contactNavTrigger = document.getElementById("contact-nav-trigger");
    const contactFooterTrigger = document.getElementById("contact-footer-trigger");
    const contactModal = document.getElementById("contact-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalOverlay = document.getElementById("modal-overlay");
    const contactForm = document.getElementById("contact-form");
    const formSuccess = document.getElementById("form-success");
    const successCloseBtn = document.getElementById("success-close-btn");

    function openModal(e) {
        if (e) e.preventDefault();
        
        // Reset form states
        contactForm.reset();
        contactForm.classList.remove("hidden");
        formSuccess.classList.remove("visible");

        // Open modal
        contactModal.classList.add("open");
        contactModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Prevent scrolling behind modal

        // Close mobile menu if open
        hamburgerBtn.classList.remove("active");
        navMenu.classList.remove("open");
    }

    function closeModal() {
        contactModal.classList.remove("open");
        contactModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Re-enable scrolling
    }

    contactNavTrigger.addEventListener("click", openModal);
    contactFooterTrigger.addEventListener("click", openModal);
    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);

    // Escape key to close modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && contactModal.classList.contains("open")) {
            closeModal();
        }
    });

    // Form Submission Handler
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Get form values for later usage (e.g. API submission)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulate successful form submission
        console.log("Form Submitted:", { name, email, message });

        // Transition views in modal
        contactForm.classList.add("hidden");
        formSuccess.classList.add("visible");
    });

    successCloseBtn.addEventListener("click", closeModal);

    // 6. Smooth Scroll Reveal (Optional Premium Polish)
    const revealElements = document.querySelectorAll(".feature-card, .app-card, .youtube-card");
    
    // Add initial opacity/transform styling via JS so page isn't blank if JS fails
    revealElements.forEach(elem => {
        elem.style.opacity = "0";
        elem.style.transform = "translateY(30px)";
        elem.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });

    // 7. Under Construction Centered Banner
    // The banner is set to always display on page load. No dismissal logic is required.
});
