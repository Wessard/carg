$(document).ready(function(){
    $('.menu_burger').click(function(event) {
    $('.menu_burger,.menu_wrap').toggleClass('active')});
    $('.carg_opa').addClass('_active');
    $('.main_gr').addClass('_active');
})
var mySwiper3 = new Swiper('.mySwiper3', {
    centeredSlides:true,
    spaceBetween: 10,
    allowTouchMove:false,
    loopedSlides:1.5,
    loop:true,
    speed:800,
    navigation: {
      nextEl: '.air_r .swiper-bt-next',
      prevEl: '.air_r .swiper-bt-prev',
    },
  });
  var mySwiper4 = new Swiper('.mySwiper4', {
    spaceBetween: 10,
    loop:true,
    allowTouchMove:false,
    centeredSlides: true,
    slidesPerView: 1.5,
    speed:800
  });
  mySwiper4.controller.control = mySwiper3;
  mySwiper3.controller.control = mySwiper4;