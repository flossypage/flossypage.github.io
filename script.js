console.log("Mythical Noobs running...");

// TEMP LOGIN
const TEMP_USER = "test";
const TEMP_PASS = "1234";

// SIGNUP SYSTEM
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let u = document.getElementById("newUser").value;
        let p = document.getElementById("newPass").value;

        // save to browser
        localStorage.setItem("user", u);
        localStorage.setItem("pass", p);

        alert("Account created! Now login.");
        window.location.href = "login.html";
    });
}

// LOGIN SYSTEM
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let u = document.getElementById("loginUser").value;
        let p = document.getElementById("loginPass").value;

        let savedUser = localStorage.getItem("user");
        let savedPass = localStorage.getItem("pass");

        // TEMP LOGIN
        if (u === TEMP_USER && p === TEMP_PASS) {
            window.location.href = "dashboard.html";
            return;
        }

        // NORMAL LOGIN
        if (u === savedUser && p === savedPass) {
            window.location.href = "dashboard.html";
        } else {
            alert("bro that login ain't valid 💀");
        }
    });
}

// DROPDOWN
function toggleMenu() {
    let d = document.getElementById("dropdown");
    d.style.display = d.style.display === "flex" ? "none" : "flex";
}

// LOGOUT
function logout() {
    window.location.href = "index.html";
}
