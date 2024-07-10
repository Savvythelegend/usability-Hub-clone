const toggle_button = document.getElementById('nav-toggle');
const navlinks = document.getElementById('nav-links')

toggle_button.addEventListener('click', () => {
    navlinks.classList.toggle('active');
})