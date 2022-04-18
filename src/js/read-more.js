const readMoreBtn = document.querySelector('.read-more-btn')
const el_2 = document.querySelector('.el-2')
const el_3 = document.querySelector('.el-3')
const ex_1 = document.querySelector('.ex-1')
const ex_2 = document.querySelector('.ex-2')
const ex_3 = document.querySelector('.ex-3')
const text1 = document.querySelector('.btn-text1')
const text2 = document.querySelector('.btn-text2')
const text3 = document.querySelector('.btn-text3')
const showAllBtn = document.querySelector('.show-all-btn')
const bl_1 = document.querySelectorAll('.br-bl')
const bl_2 = document.querySelectorAll('.br-bl-two')
const showAllBtnTwo = document.querySelector('.show-all-btn-two')
const t_1 = document.querySelectorAll('.t-hide')
const t_2 = document.querySelector('.t-hide-two')

// Read More

el_3.classList.add('hide')

if (window.innerWidth <= 768) {
    el_2.classList.add('hide')
    readMoreBtn.addEventListener('click', (e) => {
        el_3.classList.toggle('hide').remove
        el_2.classList.toggle('hide').remove
    if(text1.innerText === 'Читать далее'){
        text1.innerText = 'Скрыть'
        ex_1.style.transform = 'rotate(180deg)'

    }else {
        text1.innerText = 'Читать далее'
        ex_1.style.transform = 'rotate(0)'
    }
    })
}
readMoreBtn.addEventListener('click', (e) => {
    el_3.classList.toggle('hide').remove
    if(text1.innerText === 'Читать далее'){
        text1.innerText = 'Скрыть'
        ex_1.style.transform = 'rotate(180deg)'

    }else {
        text1.innerText = 'Читать далее'
        ex_1.style.transform = 'rotate(0)'
    }
})

// Show All 1

bl_1.forEach( x => x.classList.toggle('hide'))


showAllBtn.addEventListener('click', (e)=> { 
    bl_1.forEach( x => x.classList.toggle('hide').remove)
    if(text2.innerText === 'Показать все'){
        text2.innerText = 'Скрыть'
        ex_2.style.transform = 'rotate(180deg)'

    }else {
        text2.innerText = 'Показать все'
        ex_2.style.transform = 'rotate(0)'
    }
})


// Show All 2

t_1.forEach( x => x.classList.toggle('hide'))

showAllBtnTwo.addEventListener('click', (e)=> { 
    t_1.forEach( x => x.classList.toggle('hide').remove)
    if(text3.innerText === 'Показать все'){
        text3.innerText = 'Скрыть'
        ex_3.style.transform = 'rotate(180deg)'

    }else {
        text3.innerText = 'Показать все'
        ex_3.style.transform = 'rotate(0)'
    }
})

if (window.innerWidth <= 768) {
    bl_1.forEach( x => x.classList.toggle('hide').remove)
    bl_2.forEach( x => x.classList.toggle('hide').remove)
    t_1.forEach( x => x.classList.toggle('hide').remove)
    t_2.classList.toggle('hide').remove
}

if(window.innerWidth <= 1007) {
    bl_2.forEach( x => x.classList.toggle('hide'))
    t_2.classList.toggle('hide')
    showAllBtn.addEventListener('click', (e)=> {
        bl_2.forEach( x => x.classList.toggle('hide').remove)
    })
    showAllBtnTwo.addEventListener('click', (e)=> {
        t_2.classList.toggle('hide').remove
    })
}

if(window.innerWidth <= 1119) {
    bl_2.forEach( x => x.classList.toggle('hide').remove)
    t_2.classList.toggle('hide').remove
    showAllBtn.addEventListener('click', (e)=> {
        bl_2.forEach( x => x.classList.toggle('hide'))
    })
    showAllBtnTwo.addEventListener('click', (e)=> {
        t_2.classList.toggle('hide')
    })
}

if (window.innerWidth <= 1359) {
    bl_2.forEach( x => x.classList.toggle('hide'))
    t_2.classList.toggle('hide')
    showAllBtn.addEventListener('click', (e)=> {
        bl_2.forEach( x => x.classList.toggle('hide').remove)
    })
    showAllBtnTwo.addEventListener('click', (e)=> {
        t_2.classList.toggle('hide').remove
    })
}