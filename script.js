// Toggle profile menu dropdown
function toggleProfileMenu() {
    document.getElementById("profileMenu").classList.toggle("hidden");
}

// AUTH SYSTEM
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("profileMenuContent");
    if (!menu) return;

    let logged = localStorage.getItem("loggedIn") === "true";

    if (!logged) {
        menu.innerHTML = `
            <a href="login.html">Login</a>
            <a href="signup.html">Signup</a>
        `;
    } else {
        menu.innerHTML = `
            <a href="profile.html">Profile</a>
            <div onclick="logoutUser()">Logout</div>
        `;
    }
});

// Login function
function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    let stored = JSON.parse(localStorage.getItem("user"));

    if (!stored || stored.email !== email || stored.password !== pass) {
        alert("Invalid email or password.");
        return;
    }

    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
}

// Signup function
function signupUser() {
    let email = document.getElementById("signupEmail").value;
    let pass = document.getElementById("signupPassword").value;

    localStorage.setItem("user", JSON.stringify({ email, password: pass }));
    localStorage.setItem("loggedIn", "true");

    window.location.href = "index.html";
}

// Logout
function logoutUser() {
    localStorage.setItem("loggedIn", "false");
    window.location.reload();
}

// Restrict Shop Page
function checkShop() {
    if (localStorage.getItem("loggedIn") !== "true") {
        alert("Log in to view products.");
        window.location.href = "login.html";
    }
}
