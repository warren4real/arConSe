// ===== MOBILE MENU TOGGLE =====
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobileMenu').classList.remove('open');
        });
    });
});

// ===== LIGHTBOX FUNCTIONS =====
function openLightbox(imageSrc, title) {
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    
    if (lightboxImage) {
        lightboxImage.src = imageSrc;
        lightboxImage.alt = title || 'Enlarged image';
    }
    
    if (lightboxOverlay) {
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    
    if (lightboxOverlay) {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lightboxOverlay = document.getElementById('lightbox-overlay');
        if (lightboxOverlay && lightboxOverlay.classList.contains('active')) {
            closeLightbox();
        }
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close lightbox if open
            const lightboxOverlay = document.getElementById('lightbox-overlay');
            if (lightboxOverlay && lightboxOverlay.classList.contains('active')) {
                closeLightbox();
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize: ensure lightbox is hidden on page load
document.addEventListener('DOMContentLoaded', function() {
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    if (lightboxOverlay) {
        lightboxOverlay.classList.remove('active');
    }
    document.body.style.overflow = 'auto';
});
