// ========================================
// PERSONAL PORTFOLIO - JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------------------
    // 1. MOBILE NAVIGATION
    // ----------------------------------------

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        // Open or close the mobile menu
        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.textContent = isOpen ? "×" : "☰";

        });

        // Close the menu after selecting a navigation link
        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";

            });

        });

        // Close the menu when clicking outside it
        document.addEventListener("click", (event) => {

            const clickedOutside =
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target);

            if (clickedOutside && navLinks.classList.contains("active")) {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";

            }

        });

        // Reset mobile-menu state when returning to desktop width
        window.addEventListener("resize", () => {

            if (window.innerWidth > 850) {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";

            }

        });

    }


    // ----------------------------------------
    // 2. AUTOMATIC COPYRIGHT YEAR
    // ----------------------------------------

    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});