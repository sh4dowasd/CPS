import Swiper, {Pagination} from 'swiper';

const brandsSlider = document.querySelector('.brands-slider')
const technicsSlider = document.querySelector('.technics-slider')
const priceSlider = document.querySelector('.price-slider')

if (window.innerWidth <= 768) {
    new Swiper (brandsSlider, {
        slidesPerView: 1,
        spaceBetween: 16,
        slideClass: 'swiper-slide',
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
        }
    })
    new Swiper (technicsSlider, {
        slidesPerView: 1,
        spaceBetween: 16,
        slideClass: 'swiper-slide',
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
        }
    })
    new Swiper (priceSlider, {
        slidesPerView: 1,
        spaceBetween: 16,
        slideClass: 'swiper-slide',
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
        }
    })
}
