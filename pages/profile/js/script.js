const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn');
  window.location.href = '../../index.html'; 
});