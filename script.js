// PROFILE DROPDOWN LOGIC
const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");
let dropdownOpen = false;

profileBtn.addEventListener("click", () => {
    dropdownOpen = !dropdownOpen;
    profileDropdown.style.display = dropdownOpen ? "flex" : "none";
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.style.display = "none";
        dropdownOpen = false;
    }
});

// SIMPLE HOVER ANIMATIONS FOR ALL TEXTS
const allText = document.querySelectorAll("h1, h2, p, a, li");

allText.forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.transition = "0.2s";
        el.style.transform = "translateY(-2px)";
    });

    el.addEventListener("mouseout", () => {
        el.style.transform = "translateY(0)";
    });
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".long-section, .feature-box");

function fadeInOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "0.7s ease";
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);

// SIDEBAR TOGGLE
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-260px";
    } else {
        sidebar.style.left = "0px";
    }
});

// PROFILE DROPDOWN
const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

profileBtn.addEventListener("click", () => {
    profileDropdown.classList.toggle("show");
});

// close dropdown if clicking outside
document.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.classList.remove("show");
    }
});
