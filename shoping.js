let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active')
    loginform.classList.remove('active');
}
let loginform = document.querySelector('#login-form-container');
document.querySelector('#log-btn').onclick = () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active')
}
document.querySelector('#close-btn').onclick = () =>{
    loginform.classList.remove('active');}

let searchform=document.querySelector('#search-form');
document.querySelector('#srch-btn').onclick=()=>{
    searchform.classList.toggle('active')
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    searchform.classList.remove('active')
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}