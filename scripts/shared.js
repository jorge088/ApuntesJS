// NavBar
const navBtnResponsive = document.querySelector('.navBar__btnResponsiveNav');
const navCategorys = document.querySelector('.navBar__categorys');
const navClassesLink = document.querySelector('.navBar__classesLink');
const navClassesList = document.querySelector('.navBar__category__classesList');
const navActualClassLink = document.querySelector('#actualClassPage');

// darkMode
const btnChangeTheme = document.querySelector('.navBar__btnChangeTheme');
const body = document.querySelector('body');
const moonIcon = document.querySelector('#moonIcon');
const sunIcon = document.querySelector('#sunIcon');

// NavBar Animations
navBtnResponsive.addEventListener('click', () => {
    navCategorys.classList.toggle('show');
});
navClassesLink.addEventListener('click', (e) => {
    e.preventDefault();
    navClassesList.classList.toggle('show');
});
navActualClassLink.addEventListener('click', (e) => {
    e.preventDefault();
})
window.addEventListener('DOMContentLoaded', () => {
    checkLocalStorageTheme();
});

console.log();
// Dark mode funcionality
btnChangeTheme.addEventListener('click', () => {
    body.classList.toggle('dark')
    changeBtnThemeIcon();
    if (body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
})

const changeBtnThemeIcon = () => {
    if (body.classList.contains('dark')) {
        moonIcon.classList.add('hide');
        sunIcon.classList.remove('hide');
    } else {
        moonIcon.classList.remove('hide');
        sunIcon.classList.add('hide');
    }
}

const checkLocalStorageTheme = () => {
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        changeBtnThemeIcon()

    }
}
