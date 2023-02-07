$(document).ready(function(){
    $('.ab_gr').addClass('_active')
    $('.jet_wrap').addClass('_active')
    $('.menu_burger,.close_btn').click(function(event) {
    $('.menu_burger,.menu_wrap, .close_btn').toggleClass('active')})
})
var home=document.getElementById('home');
var non=document.getElementById('non')
var none=document.getElementById('none')
var back=document.getElementById('back')
home.addEventListener('click',function(){
    back.classList.add('active')
})
non.addEventListener('click',()=> {
    back.classList.remove('active')
})
none.addEventListener('click',()=> {
    back.classList.remove('active')
})