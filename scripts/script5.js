$(document).ready(function(){
    $('.menu_burger').click(function(event) {
    $('.menu_burger,.menu_wrap').toggleClass('active')});
    $('.main_gr').addClass('_active');
    $('.carg_opa').addClass('_active');
})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress:false,
    speed:600,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 40,
    navigation: {
        nextEl: ".f_bl_r .swiper-btn-next",
        prevEl: ".f_bl_r .swiper-btn-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
var burger=document.querySelector('.menu_burger')
var idd=document.getElementById('d_no');
if(burger.classList.contains('active')){
    burger.style.display = 'none'
}
