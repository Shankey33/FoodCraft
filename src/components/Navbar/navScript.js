
function initNavToggle() {
    const navLogo = document.querySelector('.navbar-logo');
    const links = document.querySelector('.navbar-links');
    
    if (!navLogo || !links) return;
    
    // Remove any existing listeners to prevent duplicates
    navLogo.removeEventListener('click', toggleMenu);
    
    // Add click listener only for mobile screens
    if (window.innerWidth < 768) {
        navLogo.addEventListener('click', toggleMenu);
    }
}

function toggleMenu() {
    const links = document.querySelector('.navbar-links');
    if (links) {
        links.classList.toggle('active');
    }
}

function handleResize() {
    const links = document.querySelector('.navbar-links');
    
    // Reset menu state when switching to desktop
    if (window.innerWidth >= 768 && links) {
        links.classList.remove('active');
    }
    
    // Reinitialize toggle functionality
    initNavToggle();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavToggle);
} else {
    initNavToggle();
}

// Handle window resize
window.addEventListener('resize', handleResize);

// Also initialize on window load as backup
window.addEventListener('load', initNavToggle);