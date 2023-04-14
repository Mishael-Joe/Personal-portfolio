const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const menuNav = document.querySelector('.menu-nav');
const nav = document.querySelector('.nav');
const navMenuItem = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggle);

function toggle() {
    if(!showMenu) {
        hamburger.classList.add('open');
        menuNav.classList.add('open');
        nav.classList.add('open');
        navMenuItem.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        menuNav.classList.remove('open');
        nav.classList.remove('open');
        navMenuItem.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}



// var icon = document.getElementById("icon")
//     icon.onclick = function() {
//         document.body.classList.toggle("dark-theme");
//         if (document.body.classList.toggle("dack-theme")) {
//            icon.src = "images/sun.png";
//         }else {
//            icon.src = "images/moon.png";
//         }
//     }