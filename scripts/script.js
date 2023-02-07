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
    $('.menu_burger,.close_btn').click(function(event) {
    $('.menu_burger,.menu_wrap,.close_btn').toggleClass('active')})
    $('.carg_opa').addClass('_active')
    $('.main_gr').addClass('_active')
    $('.ab_gr').addClass('_active')
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
