// Stats breakdown dropdown ****************************************************
let profileButton = document.querySelector('.profile-dropdown')
let dropdownButton = document.querySelector('.stats-dropdown-btn');
let arrow = document.querySelector('.down-arrow')

dropdownButton.addEventListener('click', () => {
  profileButton.classList.toggle('is-visible');
  // Need below to toggle
  if (arrow.innerText === '▼') {
    arrow.innerText = '▲';
  } else {
    arrow.innerText = '▼'
  }
});