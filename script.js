const loginBtn = document.getElementById("loginBtn");
const profileLink = document.getElementById("profileLink");

function updateAuthUI() {
    
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    loginBtn.classList.toggle("d-none", isLoggedIn);
    profileLink.classList.toggle("d-none", !isLoggedIn);
}

updateAuthUI();

const locationInput = document.getElementById("location");
const searchBtn = document.getElementById("searchBtn");
const errorP = document.getElementById("errorP");

searchBtn.addEventListener("click", () => {
    if (locationInput.value.trim() === "") {
        errorP.textContent = "Please enter a place to search";
    } else {
        errorP.textContent = "";
        window.location.href ="pages/search-results/search-results.html"
    }
});


const favorite = document.getElementById("favorite")


const fav = () =>{
    favorite.classList.toggle("fa-regular")
    favorite.classList.toggle("fa-solid")
    favorite.classList.toggle("fg-danger")
}
