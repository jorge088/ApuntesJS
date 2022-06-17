const navLogo = document.querySelector('#navLogo');
const mainContent = document.querySelector('#main');

navLogo.addEventListener('click',(e) => {
    e.preventDefault();
    scrollTo(0,mainContent.offsetTop - 70)
});