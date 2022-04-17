const lPopupBtn = document.querySelector('.hamburger')
const feedPopupBtn = document.querySelector('.popup-feedback-up')
const CallPopupBtn = document.querySelector('.popup-call-up')
const closeBtn = document.querySelectorAll('.close-popup')
const lPopup = document.querySelector('.left-popup')
const feedPopup = document.querySelector('.popup_feedback')
const CallPopup = document.querySelector('.popup_call')
const popup = document.querySelectorAll('.popup')
const body = document.querySelector('body')
const lContainer = document.querySelector('.left-container')
const closebtn = document.querySelector('.popup__close-left')

let unlock = true
var lock = false

const timeout = 300

lPopupBtn.addEventListener('click', (e) => {
    lPopup.classList.toggle('open')
    lContainer.style.opacity = '1'
    lContainer.style.transform = 'translateX(0)'
    lock = false
    bodyLock()
})

feedPopupBtn.addEventListener('click', (e) => {
    feedPopup.classList.toggle('open')
    bodyLock()
})

CallPopupBtn.addEventListener('click', (e) => {
    CallPopup.classList.toggle('open')
    bodyLock()
})

closeBtn.forEach(x => x.addEventListener('click', (e) => {
    doUnlock = true
    if(unlock) {
        popup.forEach(x => x.classList.remove('open'))
        if (doUnlock) {
            bodyUnLock()
        }
    }
}))

closebtn.addEventListener('click', (e) => {
    lContainer.style.opacity = '0'
    lContainer.style.transform = 'translateX(-100%)'
    lPopup.classList.remove('open')
})

function bodyLock() {
    body.classList.add('lock')

    unlock = false
    setTimeout(() => {
        unlock = true
    }, timeout)
}

function bodyUnLock() {
    setTimeout(() => {
        body.classList.remove('lock')
    }, timeout)

    unlock = false
    setTimeout(() => {
        unlock = true
    }, timeout);
}

if (window.innerWidth <= 1108) {
    lock = true
}else {
    lock = false
}

if(lock === true) {
        closebtn.classList.add('left-open')
    }else {
        closebtn.classList.remove('left-open')
    }

