//MENU LEFT
$(".header .header__mobile .toggle").on("click", function () {
  $(".nav").toggleClass("active");
});
$(".btnmenu").on("click", function () {
  $(".nav").addClass("active");
});

$(".nav .close").on("click", function () {
  $(".nav").removeClass("active");
});

//SLIDER
let $carousel = $(".slider .slider__wrap");
$(document).ready(function () {
  $carousel.flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    autoPlay: true,
    selectedAttraction: 0.01,
    friction: 0.25,
    freeScroll: false,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false,
  });
});

// let sliderItem = $(".slider .slider__wrap .slider__item");
// $(window).resize(function () {
//   if (window.matchMedia("(max-width: 767px)").matches) {
//     sliderItem.css({
//       height: "60vh",
//       top: "var(--height-headermobile)",
//     });
//   } else {
//     sliderItem.css({
//       height: "100vh",
//       top: 0,
//     });
//   }
// });

//ACTIVE HEADER SCROLL
let activeHeaderHeight = 700;
$(window).on("scroll", function () {
  let scrollY = $(this).scrollTop();
  if (scrollY > activeHeaderHeight) {
    $(".header").addClass("activescroll");
    $(".header .header__scroll").addClass("active");
    $(".text__top").addClass("deactive");
  } else {
    $(".text__top").removeClass("deactive");
    $(".header .header__scroll").removeClass("active");
    $(".header").removeClass("activescroll");
  }
});

//MODAL
$(".btnorder").on("click", function (e) {
  e.preventDefault();
  $(".modal").addClass("active");
});

$(".modal .modal__wrap-close").on("click", function () {
  $(".modal").removeClass("active");
});

//DROPDOWN
$(".dropdown").on("click", function () {
  $(".dropdown__list").slideToggle(300);
});

//PRODUCT SLIDER
// const $productslider = $(".product-carousel");
// $(document).ready(function () {
//   $productslider.flickity({
//     cellAlign: "center",
//     lazyLoad: true,
//     lazyLoad: 1,
//     contain: true,
//     draggable: true,
//     wrapAround: true,
//     autoPlay: false,
//     selectedAttraction: 0.05,
//     friction: 1.9,
//     freeScroll: false,
//     pauseAutoPlayOnHover: false,
//     prevNextButtons: true,
//     imagesLoaded: true,
//     pageDots: false,
//     arrowShape: {
//       x0: 0,
//       x1: 45,
//       y1: 30,
//       x2: 25,
//       y2: 5,
//       x3: 100,
//     },
//   });
// });

//BACKTOP
$(".footer .back-to-top").on("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
  });
});
