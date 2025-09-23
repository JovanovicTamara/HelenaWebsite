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

// Copy email to clipboard
document.getElementById("copyEmail").addEventListener("click", function () {
    const email = "info.millo@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        console.log("Email copied to clipboard: " + email);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});

// Drag and drop files
function dragstartHandler(ev){
    ev.preventDefault();
}

function dropHandler(ev){
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}