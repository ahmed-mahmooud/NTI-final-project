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


const auth = (id) => document.getElementById(id);
const dlg = auth('loginDialog');
const email = auth('email');
const otpCode = auth('otpCode');
const loginBtn = auth('loginBtn');
const profileLink = auth('profileLink');
let timer, sec;

function updateAuthUI() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  loginBtn.classList.toggle('d-none', isLoggedIn);
  profileLink.classList.toggle('d-none', !isLoggedIn);
}

function show(step) {
  auth('stepLogin').classList.toggle('d-none', step !== 'login');
  auth('stepVerify').classList.toggle('d-none', step !== 'verify');
  auth('backBtn').classList.toggle('invisible', step !== 'verify');
}

function renderTimer() {
  auth('sec').textContent = sec;
  auth('timerText').classList.toggle('d-none', sec <= 0);
  auth('resendBtn').classList.toggle('d-none', sec > 0);
}

function startTimer() {
  clearInterval(timer);
  sec = 58;
  renderTimer();
  timer = setInterval(() => {
    sec--;
    renderTimer();
    if (sec <= 0) clearInterval(timer);
  }, 1000);
}

function checkButtons() {
  auth('continueBtn').disabled = !email.checkValidity();
  auth('verifyBtn').disabled = otpCode.value.length !== 4;
}

function resetOtpMessages() {
  auth('otp').classList.remove('is-valid', 'is-invalid');
  auth('otpError').classList.add('d-none');
  auth('otpSuccess').classList.add('d-none');
}

function backToLogin() {
  clearInterval(timer);
  resetOtpMessages();
  show('login');
  checkButtons();
}


dlg.addEventListener('show.bs.dialog', () => {
  backToLogin();
  auth('continueSpinner').classList.add('d-none');
  auth('verifySpinner').classList.add('d-none');
});
dlg.addEventListener('hidden.bs.dialog', () => clearInterval(timer));

auth('continueBtn').addEventListener('click', () => {
  auth('continueBtn').disabled = true;
  auth('continueSpinner').classList.remove('d-none');
  setTimeout(() => {
    auth('continueSpinner').classList.add('d-none');
    auth('shownEmail').textContent = email.value;
    resetOtpMessages();
    show('verify');
    startTimer();
    checkButtons();
  }, 800);
});


auth('verifyBtn').addEventListener('click', () => {
  auth('verifyBtn').disabled = true;
  auth('verifySpinner').classList.remove('d-none');
  resetOtpMessages();
  setTimeout(() => {
    auth('verifySpinner').classList.add('d-none');
    const ok = otpCode.value === '0000';
    auth('otp').classList.add(ok ? 'is-valid' : 'is-invalid');
    auth(ok ? 'otpSuccess' : 'otpError').classList.remove('d-none');
    checkButtons();

    if (ok) {
      localStorage.setItem('isLoggedIn', 'true');
      updateAuthUI();
      setTimeout(() => auth('closeBtn').click(), 600);
    }
  }, 800);
});

auth('resendBtn').addEventListener('click', startTimer);
auth('editEmail').addEventListener('click', backToLogin);
auth('backBtn').addEventListener('click', backToLogin);

email.addEventListener('input', checkButtons);
otpCode.addEventListener('input', () => { resetOtpMessages(); checkButtons(); });

checkButtons();
updateAuthUI();


