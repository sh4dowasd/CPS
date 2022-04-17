// Read More
const readMoreBtn = document.querySelector('.read-more-btn');
const el_2 = document.querySelector('.el-2')
const el_3 = document.querySelector('.el-3');
const ex_1 = document.querySelector('.ex-1');
const ex_2 = document.querySelector('.ex-2');
const ex_3 = document.querySelector('.ex-3');
const text1 = document.querySelector('.btn-text1');

const mediaQuery1 = window.matchMedia('(max-width: 1108px)')
const mediaQuery2 = window.matchMedia('(max-width: 1040px)')
const mediaQuery3 = window.matchMedia('(max-width: 840px)')
const mediaQuery4 = window.matchMedia('(max-width: 1359px)')
const mediaQuery5 = window.matchMedia('(max-width: 900px)')


el_3.classList.toggle('hide');

if(mediaQuery5.matches) {
    el_2.classList.toggle('hide')
}

readMoreBtn.addEventListener('click', (e)=> {
    el_3.classList.toggle('hide');
    el_2.classList.toggle('hide').remove
    if(text1.innerText === 'Читать далее'){
        text1.innerText = 'Скрыть'
        ex_1.style.transform = 'rotate(180deg)';
    }else {
        text1.innerText = 'Читать далее'
        ex_1.style.transform = 'rotate(0)';
    }
})

// Show All 1

const showAllBtn = document.querySelector('.show-all-btn');
const text2 = document.querySelector('.btn-text2');
const bl_1 = document.querySelectorAll('.br-bl');
const bl_2 = document.querySelectorAll('.br-bl-two');

bl_1.forEach( x => x.classList.toggle('hide'));


showAllBtn.addEventListener('click', (e)=> { 
    bl_1.forEach( x => x.classList.toggle('hide').remove);
    if(text2.innerText === 'Показать все'){
        text2.innerText = 'Скрыть'
        ex_2.style.transform = 'rotate(180deg)';

    }else {
        text2.innerText = 'Показать все'
        ex_2.style.transform = 'rotate(0)';
    }
})


// Show All 2

const showAllBtnTwo = document.querySelector('.show-all-btn-two');
const text3 = document.querySelector('.btn-text3');
const t_1 = document.querySelectorAll('.t-hide');
const t_2 = document.querySelector('.t-hide-two');

t_1.forEach( x => x.classList.toggle('hide'));

showAllBtnTwo.addEventListener('click', (e)=> { 
    t_1.forEach( x => x.classList.toggle('hide').remove);
    if(text3.innerText === 'Показать все'){
        text3.innerText = 'Скрыть'
        ex_3.style.transform = 'rotate(180deg)';

    }else {
        text3.innerText = 'Показать все'
        ex_3.style.transform = 'rotate(0)';
    }
})

if(mediaQuery1.matches) {
    bl_2.forEach( x => x.classList.toggle('hide').remove);
    t_2.classList.toggle('hide').remove;
    showAllBtn.addEventListener('click', (e)=> {
        bl_2.forEach( x => x.classList.toggle('hide'));
    })
    showAllBtnTwo.addEventListener('click', (e)=> {
        t_2.classList.toggle('hide');
    })
}

if (mediaQuery4.matches) {
    bl_2.forEach( x => x.classList.toggle('hide'));
    t_2.classList.toggle('hide');
    showAllBtn.addEventListener('click', (e)=> {
        bl_2.forEach( x => x.classList.toggle('hide').remove);
    })
    showAllBtnTwo.addEventListener('click', (e)=> {
        t_2.classList.toggle('hide').remove;
    })
}

if (mediaQuery2.matches) {
    bl_2.forEach( x => x.classList.toggle('hide'));
    t_2.classList.toggle('hide');
    showAllBtn.addEventListener('click', (e)=> {
        bl_2.forEach( x => x.classList.toggle('hide').remove);
    })
    showAllBtnTwo.addEventListener('click', (e)=> {
        t_2.classList.toggle('hide').remove;
    })
}

if (mediaQuery3.matches) {
    bl_1.forEach( x => x.classList.toggle('hide').remove);
    bl_2.forEach( x => x.classList.toggle('hide').remove);
    t_1.forEach( x => x.classList.toggle('hide').remove);
    t_2.classList.toggle('hide').remove;
}