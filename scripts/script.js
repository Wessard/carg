document.addEventListener('DOMContentLoaded', function () {
  $('.menu_burger,.close_btn' || null).click(function (event) {
  $('.menu_burger,.menu_wrap,.close_btn' || null).toggleClass('active')
    
  })
  $('.carg_opa' || null).addClass('_active')
  $('.main_gr' || null).addClass('_active')
  $('.ab_gr' || null).addClass('_active')
  $('.jet_wrap' || null).addClass('_active')
  $('.avia_gr' || null).addClass('_active')
  // $('.av1,.av2,.Ellipse'||null).addClass('active')
  let img = document.querySelector('.img_bg') || null;
  let left = document.querySelectorAll('.js_fade_left') || null;
  let right = document.querySelectorAll('.js_fade_right') || null;
  img.classList.add('_active')
  left.forEach((el) => {
    el.classList.add('js_fade_active')
    el.style.transition = '1.5s';
  })
  right.forEach((el) => {
    el.classList.add('js_fade_active')
    el.style.transition = '1.5s';
  })

})

window.addEventListener('DOMContentLoaded', function () {
  var home = document.getElementById('home') || null;
  var non = document.getElementById('non') || null;
  var none = document.getElementById('none') || null;
  var back = document.getElementById('back') || null;
  var btnN = document.getElementById('btn_none') || null;
  var btn_non = document.getElementById('btn_non') || null;
  home.addEventListener('click', function () {
    back.classList.add('active');
    btnN.classList.remove('active');
  })
  non.addEventListener('click', () => {
    back.classList.remove('active');
    btnN.classList.remove('active');
    btn_non.classList.remove('active');
  })
  none.addEventListener('click', () => {
    btnN.classList.add('active');
    btn_non.classList.add('active');
  })
})
/* ,..,..,..,..,..,Слайдер СвайперJS..,..,..,..,..,.., */
var sliderSelector1 = document.querySelector(".mySwiper") || null;
var sliderSelector2 = document.querySelector(".mySwiper2") || null;
var sliderSelector3 = document.querySelector(".mySwiper3") || null;
var sliderSelector4 = document.querySelector(".mySwiper4") || null;
var sliderSelector5 = document.querySelector(".mySwiper5") || null;
var sliderSelector6 = document.querySelector(".mySwiper6") || null;
var swiper = new Swiper(sliderSelector1, {
  spaceBetween: 10,
  freeMode: true,
  allowTouchMove: false,
  watchSlidesProgress: false,
  speed: 600,
});
var swiper2 = new Swiper(sliderSelector2, {
  spaceBetween: 40,
  navigation: {
    nextEl: ".f_bl_r .swiper-btn-next",
    prevEl: ".f_bl_r .swiper-btn-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var mySwiper3 = new Swiper(sliderSelector3, {
  centeredSlides: true,
  spaceBetween: 10,
  allowTouchMove: false,
  loopedSlides: 1.5,
  slidesPerView: 1,
  keyboard:true,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.air_r .swiper-bt-next',
    prevEl: '.air_r .swiper-bt-prev',
  },
});
var mySwiper4 = new Swiper(sliderSelector4, {
  spaceBetween: 10,
  loop: true,
  allowTouchMove: false,
  centeredSlides: true,
  loopedSlides:1.5,
  slidesPerView: 1.5,
  speed: 800
});
mySwiper4.controller.control = mySwiper3;
mySwiper3.controller.control = mySwiper4;
var mySwiper5 = new Swiper(sliderSelector5, {
  speed: 800,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
var mySwiper6 = new Swiper(sliderSelector6, {
  speed: 800,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
