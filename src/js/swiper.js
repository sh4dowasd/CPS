import Swiper, {Pagination} from 'swiper';

const sliderBrands = document.querySelector(".brands-slider");
const sliderViewTech = document.querySelector(".technics-slider");
// const sliderPrice = document.querySelector(".price-menu__cases");
let mySwiper1;
let mySwiper2;
let mySwiper3;

function mobileSliderBrands() {
  if (window.innerWidth < 768 && sliderBrands.dataset.mobile === "false"){
    mySwiper1 = new Swiper(sliderBrands, {
      slidesPerView:1,
      loop: true,
      slideClass: "swiper-slide",
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    });
    sliderBrands.dataset.mobile = "true";
  }
  if (window.innerWidth >= 768) {
    sliderBrands.dataset.mobile = "false";

    if (sliderBrands.classList.contains("swiper-initialized")) {
      mySwiper1.destroy();
    }
  }
}

function mobileSliderViewTech() {
  if (window.innerWidth < 768 && sliderViewTech.dataset.mobile === "false"){
    mySwiper2 = new Swiper(sliderViewTech, {
      slidesPerView:1,
      loop: true,
      slideClass: "swiper-slide",
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    });
    sliderViewTech.dataset.mobile = "true";
  }
  if (window.innerWidth >= 768) {
    sliderViewTech.dataset.mobile = "false";

    if (sliderViewTech.classList.contains("swiper-initialized")) {
      mySwiper2.destroy();
    }
  }
}

// function mobileSliderPrice() {
//   if (window.innerWidth < 768 && sliderPrice.dataset.mobile === "false"){
//     mySwiper3 = new Swiper(sliderPrice, {
//       slidesPerView:1,
//       loop: true,
//       slideClass: "swiper-slide",
//       modules: [Pagination],
//       pagination: {
//         el: ".swiper-pagination",
//         type: "bullets",
//       },
//     });
//     sliderPrice.dataset.mobile = "true";
//   }
//   if (window.innerWidth >= 768) {
//     sliderPrice.dataset.mobile = "false";

//     if (sliderPrice.classList.contains("swiper-initialized")) {
//       mySwiper3.destroy();
//     }
//   }
// }


mobileSliderBrands();
mobileSliderViewTech();
mobileSliderPrice();

window.addEventListener("resize", () => {
  mobileSliderBrands();
  mobileSliderViewTech();
  mobileSliderPrice();

});