const burgerMenu = document.querySelector('.burger-menu');
const menuBar = document.querySelector('.menu-bar')
burgerMenu.addEventListener('click', () => {
	menuBar.classList.toggle('toggleMenu');
})
