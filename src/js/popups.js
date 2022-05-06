const lPopupBtn = document.querySelector('.hamburger')
const feedPopupBtn = document.querySelectorAll('.popup-feedback')
const CallPopupBtn = document.querySelectorAll('.popup-call')
const closeBtn = document.querySelectorAll('.close-popup')
const lPopup = document.querySelector('.left-popup')
const feedPopup = document.querySelector('.popup_feedback')
const CallPopup = document.querySelector('.popup_call')
const popup = document.querySelectorAll('.popup')
const body = document.querySelector('body')
const html = document.querySelector('html')
const lContainer = document.querySelector('.left-container')
const lSection = document.querySelector('.left-section')
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
    lPopup.addEventListener('click', (e) => {
        if(!e.target.closest('.left-container')) {
            lContainer.style.opacity = '0'
            lContainer.style.transform = 'translateX(-100%)'
            lPopup.classList.remove('open')
            bodyUnLock()
        }
    })
})

feedPopupBtn.forEach(x => x.addEventListener('click', (e) => {
    feedPopup.classList.toggle('open')
    window.scrollTo(0, 0)
    bodyLock()
    feedPopup.addEventListener('click', (e) => {
        if(!e.target.closest('.left-container')) {
            doUnlock = true
            if(unlock) {
                popup.forEach(x => x.classList.remove('open'))
                if (doUnlock) {
                    bodyUnLock()
                }
            }
        }
    })
}))

CallPopupBtn.forEach(x => x.addEventListener('click', (e) => {
    CallPopup.classList.toggle('open')
    window.scrollTo(0, 0)
    bodyLock()
    CallPopup.addEventListener('click', (e) => {
        if(!e.target.closest('.left-container')) {
            doUnlock = true
            if(unlock) {
                popup.forEach(x => x.classList.remove('open'))
                if (doUnlock) {
                    bodyUnLock()
                }
            }
        }
    })
}))

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
    setTimeout(() => {
        body.classList.add('lock')
    }, 800)

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

if (window.innerWidth <= 1120) {
    lock = true
}else {
    lock = false
}

if(lock === true) {
        closebtn.classList.add('left-open')
    }else {
        closebtn.classList.remove('left-open')
    }

