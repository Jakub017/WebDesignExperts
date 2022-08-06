const menuBtn = document.querySelector('.nav-circle');
const menuOptions = [...document.querySelectorAll('.menu-list li')];
const menuIcons = [...document.querySelectorAll('.fa-solid')];
const menuBgc = document.querySelector(".menu");


function openMenu() {
    menuIcons.forEach((icon) => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
        } else {
            icon.classList.add('active');
        }
    })

    menuOptions.forEach((option) => {
        option.classList.toggle('active');
    })

    menuBgc.classList.toggle('active');
}

menuBtn.addEventListener('click', openMenu);