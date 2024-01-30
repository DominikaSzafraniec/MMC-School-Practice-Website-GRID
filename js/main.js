const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');


const handleNav = () => {
  navBtn.classList.toggle('is-active')
  navMobile.classList.toggle('nav-mobile--active')
}

navBtn.addEventListener('click', handleNav)

const handleNewYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerHTML = year + ' '
}

handleNewYear()