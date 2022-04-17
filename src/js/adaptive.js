const mediaQuery = window.matchMedia('(max-width: 1108px)')
const lSection = document.querySelector('.left-section')
const upperMenu = document.querySelector('.upper-menu')

timeout = 300

if (mediaQuery.matches) {
    upperMenu.classList.add('upper-open')
    lSection.classList.add('popup')
}else {
    upperMenu.classList.remove('upper-open')
    lSection.classList.remove('popup')
}
