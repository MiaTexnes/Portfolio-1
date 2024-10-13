document.addEventListener("DOMContentLoaded", function () {
    // Card hover effect
    const cards = document.querySelectorAll(".card");
    if (cards) {
        cards.forEach((card) => {
            card.addEventListener("mouseenter", function () {
                this.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            });

            card.addEventListener("mouseleave", function () {
                this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            });
        });
    }

    // Navbar toggler
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarNav = document.getElementById("navbarNav");
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener("click", function () {
            navbarNav.classList.toggle("show");
        });
    }

    // Mobile menu button
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Video settings
    const video = document.getElementById("video");
    if (video) {
        video.playbackRate = 1.5; // Adjust the playback speed as needed
        video.autoplay = true; // Ensure autoplay is enabled
        video.loop = true; // Ensure looping is enabled
        video.muted = true; // Mute the video to allow autoplay
        video.play(); // Start playing the video
    }
});
