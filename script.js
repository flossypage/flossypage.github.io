console.log("Mythical Noobs running...");

// signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let u = document.getElementById("newUser").value;
        let p = document.getElementById("newPass").value;

        localStorage.setItem("user", u);
        localStorage.setItem("pass", p);

        alert("Account created!");
        window.location.href = "login.html";
    });
}

// login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let u = document.getElementById("loginUser").value;
        let p = document.getElementById("loginPass").value;

        if (u === localStorage.getItem("user") && p === localStorage.getItem("pass")) {
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid login.");
        }
    });
}

// dropdown menu
function toggleMenu() {
    document.getElementById("dropdown").style.display =
        document.getElementById("dropdown").style.display === "flex" ? "none" : "flex";
}

// logout
function logout() {
    window.location.href = "start.html";
}
