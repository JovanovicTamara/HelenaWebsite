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

window.addEventListener('scroll', function() {
    const social = document.querySelector('.social-media');
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){
        social.classList.add('hidden'); // hide social bar
        navbar.classList.add('scrolled'); // move navbar to top
    } else {
        social.classList.remove('hidden');
        navbar.classList.remove('scrolled');
    }
});
