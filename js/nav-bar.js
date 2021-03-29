let menu_burger = document.querySelector(".header__nav-mobile");
let menu_line = document.querySelectorAll(".header__nav-mobile span");
let nav__bar = document.querySelector(".header__nav");
let nav__links = document.querySelectorAll('.header__nav a');

menu_burger.addEventListener("click", function openMenu(e) {

    menu_line[0].classList.toggle('topLineMenu');
    menu_line[2].classList.toggle('bottomLineMenu');
    menu_line[1].classList.toggle('hidden');
    
   nav__bar.classList.toggle('mobile');
   for (let i = 0; i < nav__links.length; i++) {
       
        nav__links[i].classList.toggle('visible');
   }
  
   

});