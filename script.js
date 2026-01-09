// --- 1. Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the .active class on the nav menu
    navLinks.classList.toggle('nav-active');
    
    // Optional: Animate the hamburger to turn into an X
    hamburger.classList.toggle('toggle');
});


// --- 2. Cyberpunk Button Interaction ---
// OLD WAY: const primaryButtons = document.querySelectorAll('.btn-primary');

// NEW WAY: Selects the main Pre-Order button AND all buttons inside pricing cards
const buyButtons = document.querySelectorAll('.btn-primary, .pricing-card .btn');

buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent default jump behavior if needed
        // e.preventDefault(); 
        
        // Cyberpunk style alert
        alert("SYSTEM ALERT: Neural Link integration initialized. Welcome to the future.");
    });
});

// --- 3. Console Easter Egg (Inspect Element to see) ---
console.log("%c APPLE NEURAL SYSTEM v1.0 ONLINE ", "background: #000; color: #39ff14; font-size: 20px; border: 1px solid #39ff14;");