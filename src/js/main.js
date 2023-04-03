const burgerIcon = document.querySelector('.burger-icon')
const menuMobile = document.querySelector('.menu-mobile')
const dropdownReval = document.querySelectorAll('.main-item')
const nav = document.querySelector('nav')

const ulDropdown = document.querySelectorAll('.ul-dropdown')

burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('active')
	menuMobile.classList.toggle('active')
	nav.classList.toggle('active')
})

/* dropdown */

dropdownReval.forEach(el => {
	el.addEventListener('click', () => {
		el.classList.toggle('active')
		if (dropdownReval[1].classList.contains('active')) {
			ulDropdown[1].classList.add('active')
		} else {
			ulDropdown[1].classList.remove('active')
		}
		if (dropdownReval[2].classList.contains('active')) {
			ulDropdown[2].classList.add('active')
		} else {
			ulDropdown[2].classList.remove('active')
		}
	})
})

/* YEAR */

const setCurrentDate = () => {
	let spanYear = document.querySelector('.year')
	let date = new Date()
	let year = date.getFullYear()
	spanYear.textContent = year
}
setCurrentDate()
