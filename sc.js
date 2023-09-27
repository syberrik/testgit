touch = document.querySelector('.touch')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')

touch.addEventListener('click', ()=>{
    navbar.classList.toggle('v-class')
    navlist.classList.toggle('h-nav')
})