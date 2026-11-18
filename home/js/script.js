const loginBtn = document.getElementById("loginBtn");
const profileLink = document.getElementById("profileLink");

function updateAuthUI() {
    
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    loginBtn.classList.toggle("d-none", isLoggedIn);
    profileLink.classList.toggle("d-none", !isLoggedIn);
}

updateAuthUI();