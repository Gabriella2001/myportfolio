let menu= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle(active);
}

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new typed('.multiple-text',{
    strings: ['Brand Designer', 'Photographer', 'Marketing and Front end Developer'],
    typeSpeed: 80,
    backspeed: 80,
    backdelay: 1200,
    loop: true,
});

document.querySelector('.hamburger').addEventListener('click', funtion(){
    document.querySelector('.menu').classList.toggle('show');
});