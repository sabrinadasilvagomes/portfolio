/* ********************************************************************* */
/* NAVIGATIE BRON: https://codepen.io/melnik909/pen/JpJPYp AUTHOR: STAS MELNIKOV*/ 
/* ********************************************************************* */  

(function(){
    'use strict';
  
    class Menu {
      constructor(settings) {
        this.menuRootNode = settings.menuRootNode;
        this.isOpened = false;
      }
      
      changeMenuState(menuState) {
        return this.isOpened = !menuState;
      }
    }
  
    const menuClassesNames = {
      rootClass: 'menu',
      activeClass: 'menu_activated',
      toggleClass: 'menu__toggle',
    }
    
    const jsMenuNode = document.querySelector(`.${menuClassesNames.rootClass}`);
    const demoMenu = new Menu ({
      menuRootNode: jsMenuNode
    });
    
    
    function toggleMenu(event) {
        let currentMenuState = demoMenu.changeMenuState(demoMenu.isOpened);
        demoMenu.menuRootNode.classList.toggle(`${menuClassesNames.activeClass}`);
        return currentMenuState;  
    }
    
    jsMenuNode.querySelector(`.${menuClassesNames.toggleClass}`).addEventListener('click', toggleMenu);
  })();



  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


