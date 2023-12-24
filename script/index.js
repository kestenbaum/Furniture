//const
const getSelectorHeaderNavigate = document.querySelector('.header__nav')
const getSelectorBurgerMenu = document.querySelector('.burger__wrap')

//BurgerMenu functional
getSelectorBurgerMenu.onclick = function () {
    getSelectorBurgerMenu.classList.toggle('burger__active')
    getSelectorHeaderNavigate.classList.toggle('header__active')
}


