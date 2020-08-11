const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link') /* creates a node list to find all nav links */

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); /*  closes the navigation bar once you click on a directory */
    })
})