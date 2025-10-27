// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get the hamburger icon and the navigation links
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Check if both elements exist
    if (hamburger && navLinks) {
        // Add click event listener to the hamburger icon
        hamburger.addEventListener("click", function() {
            // Toggle the 'active' class on the nav links
            navLinks.classList.toggle("active");
            
            // Optional: Animate the hamburger icon itself
            const icon = hamburger.querySelector("i");
            if (icon.classList.contains("fa-bars")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times"); // Change to an 'X' icon
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars"); // Change back to 'bars'
            }
        });
    }

    // Optional: Close the mobile menu when a link is clicked
    const allNavLinks = document.querySelectorAll('.nav-links a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Reset hamburger icon
                const icon = hamburger.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    });

});