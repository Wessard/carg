const swiper = new Swiper('.swiper', {
    speed:800,
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
$(document).ready(function(){
    $('.menu_burger').click(function(event) {
    $('.menu_burger,.menu_wrap').toggleClass('active')})
    $('.carg_opa').addClass('_active')
    $('.main_gr').addClass('_active')
})

window.onload=function(){
    let img=document.querySelector('.img_bg');
    let left=document.querySelectorAll('.js_fade_left');
    let right=document.querySelectorAll('.js_fade_right');
    img.classList.add('_active')
    left.forEach((el)=> {
        el.classList.add('js_fade_active')
        el.style.transition='1.5s';
    })
    right.forEach((el)=> {
        el.classList.add('js_fade_active')
        el.style.transition='1.5s';
    })
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
    document.getElementById('menu_wrap').style.top="0";
  } else {
    document.getElementById("menu").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}
var headerBurger=document.querySelector('.header_burger.active');
var menuActive=document.querySelector('.menu_burger');
var menuWrap=document.querySelector('.menu_wrap');
var burList=document.querySelector('.burger_list');
console.log(burList.clientHeight);
console.log(menuActive.clientHeight);
menuWrap.addEventListener('scroll',function(){
  console.log(menuActive.scrollHeight);
})