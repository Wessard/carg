let intervalId;
document.querySelectorAll('.dropdown-toggle').forEach((el) => {
  el.addEventListener('click', el => {
    const menu = el.currentTarget.dataset.path;
    document.querySelectorAll('.dropdown-menu').forEach(el => {
      if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
        document.querySelector(`[data-path=${menu}]`).classList.add('active_st')
        document.querySelector(`[data-target=${menu}]`).classList.add('menu_active')
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.add('open');
        }, 0);
      }
      if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
        clearTimeout(intervalId);
        document.querySelector(`[data-target=${menu}]`).classList.remove('menu_active')
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.remove('open')
          document.querySelector(`[data-path=${menu}]`).classList.remove('active_st')
        }, 0)
      }
    });
  })
})

let close = $('.close_btn');
let menuw = $('.menu_wrap');
let menu = $('.menu_burger');
let menyus = document.querySelectorAll('.dropdown-menu');
let ddTogle = document.querySelectorAll('.dropdown-toggle');
$(document).mouseup(function (e) {
  if (!close.is(e.target) && close.has(e.target).length === 0 &&
    !menuw.is(e.target) && menuw.has(e.target).length === 0
  ) {
    let closeb = document.querySelector('.close_btn')
    if (closeb.classList.contains('active')) {
      menyus.forEach((el) => {
        el.classList.remove('menu_active')
        el.classList.remove('open')
          ddTogle.forEach((el) => {
            el.classList.remove('active_st')
          })
      })
    }
    menuw.removeClass('active');
    menu.removeClass('active');
  }
})
document.addEventListener('DOMContentLoaded', function () {
  $('.menu_burger,.close_btn' || null).click(function (event) {
    $('.menu_burger,.menu_wrap,.close_btn' || null).toggleClass('active')
    let closeb = document.querySelector('.close_btn')
    if (closeb.classList.contains('active')) {
      menyus.forEach((el) => {
        el.classList.remove('menu_active')
        el.classList.remove('open')
          ddTogle.forEach((el) => {
        el.classList.remove('active_st')
          })
      })
    }
  })

  $('.carg_opa' || null).addClass('_active')
  $('.main_gr' || null).addClass('_active')
  $('.ab_gr' || null).addClass('_active')
  $('.vip_img'||null).addClass('_active')
  $('.jet_wrap' || null).addClass('_active')
  $('.avia_gr' || null).addClass('_active')
  let img = document.querySelector('.img_bg') || null;
  let left = document.querySelectorAll('.js_fade_left') || null;
  let right = document.querySelectorAll('.js_fade_right') || null;
  if (img) {
    img.classList.add('_active')

  }
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
  let home = document.getElementById('home') || null;
  let non = document.getElementById('non') || null;
  let none = document.getElementById('none') || null;
  let back = document.getElementById('back') || null;
  let btnN = document.getElementById('btn_none') || null;
  let btnD = document.getElementById('btn_del') || null;
  let btn_non = document.getElementById('btn_non') || null;
  let form = document.querySelector('.left_form') || null;
  // let left = document.querySelector('.left_side') || null;
  let formB = document.querySelector('.form_box') || null;
  if (home) {
    home.addEventListener('click', function () {
      back.classList.add('active');
      btnN.classList.remove('active');
      btnD.classList.remove('active');
    })
    non.addEventListener('click', () => {
      back.classList.remove('active');
      btnN.classList.remove('active');
      btn_non.classList.remove('active');
      btnD.classList.remove('active');
      document.location.reload();
    })
    none.addEventListener('click', () => {
      btnN.classList.add('active');
      btnD.classList.add('active');
      btn_non.classList.add('active');
    })
    btnN.addEventListener('click', (evt) => {
      const clickCount = evt.target.dataset.clicks = ~~evt.target.dataset.clicks + 1;
      if (clickCount < 3) {
        let clone = form.cloneNode(true)
        form.after(clone)
      }
      else {
        alert('Слишком много поездок:)')
      }
    })
    btnD.addEventListener('click', (event) => {
      const clickCount = event.target.dataset.clicks=~~event.target.dataset.clicks+1;
      formB.lastChild.remove()
      if (clickCount > 2) {
        btnD.setAttribute('disabled', 'true')
      }
    })
  }
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
  speed: 500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
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
  keyboard: true,
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
  loopedSlides: 1.5,
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

window.onload = function() {
  var body = document.querySelector('body');
  var links = document.querySelectorAll('a');  
  
  links.forEach(function (link) {
    link.addEventListener('click', onLinkClicked);
    
    function onLinkClicked(event) {
      event.preventDefault();
      body.classList.add('animated-show-active')
      setTimeout(onAnimationComplete, 800);
    }

    function onAnimationComplete() {
      window.location = link.href;  
    }
  });
}