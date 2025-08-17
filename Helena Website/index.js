window.addEventListener('scroll', function(){
    let navbar = this.document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
})

let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navbarItems = document.querySelectorAll('.navbar-items');

burger.addEventListener('click', () => {
    // Loop through each item in the NodeList
    navbarItems.forEach(item => {
        item.classList.toggle('h-class');
    });
    nav.classList.toggle('v-class');
});
