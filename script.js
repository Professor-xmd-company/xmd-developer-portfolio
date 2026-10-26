document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-btn');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      console.log('Mobile menu toggled');
      hamburger.classList.toggle('active');
    });
  }
});
