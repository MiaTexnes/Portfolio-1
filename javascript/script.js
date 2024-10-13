document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarNav = document.getElementById("navbarNav");

    navbarToggler.addEventListener("click", function () {
        navbarNav.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    video.playbackRate = 1.5; // Adjust the playback speed as needed
    video.autoplay = true; // Ensure autoplay is enabled
    video.loop = true; // Ensure looping is enabled
    video.muted = true; // Mute the video to allow autoplay
    video.play(); // Start playing the video
});
