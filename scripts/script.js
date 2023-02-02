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
//   const ab = document.querySelector('.ab_gr')
//   console.log(ab);
//   ab.classList.add('active')
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
let img=document.querySelector('.img_bg')
let imgg=document.getElementsByTagName('.js_fade_left')
console.log(img);
console.log(imgg);