const navBtnResponsive = document.querySelector('.navBar__btnResponsiveNav');
const navCategorys = document.querySelector('.navBar__categorys');
const navClassesLink = document.querySelector('.navBar__classesLink');
const navClassesList = document.querySelector('.navBar__category__classesList');
const navActualClassLink = document.querySelector('#actualClassPage');

navBtnResponsive.addEventListener('click', () => {
    navCategorys.classList.toggle('show');
});
navClassesLink.addEventListener('click', (e) =>{
    e.preventDefault();
    navClassesList.classList.toggle('show');
});
navActualClassLink.addEventListener('click', (e) =>{
    e.preventDefault();
})