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

    // ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // Respect the visitor's motion preference.
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Keep content visible if animations aren't supported.
    if (
        prefersReducedMotion ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }

    // Elements that reveal themselves as visitors scroll.
    const selectors = [
        ".hero-content",
        ".hero-profile",
        ".tech-strip-inner",
        ".section-kicker",
        ".section-heading-row",
        ".about-layout",
        ".skill-panel",
        ".project-feature",
        ".more-projects",
        ".workflow-item",
        ".contact-panel"
    ];

    const elements = document.querySelectorAll(
        selectors.join(",")
    );

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    // Animate each element only once.
                    observerInstance.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    elements.forEach((element, index) => {

        element.classList.add("reveal");

        // Slightly stagger nearby elements.
        element.style.setProperty(
            "--reveal-delay",
            `${(index % 4) * 80}ms`
        );

        observer.observe(element);

    });

});

});