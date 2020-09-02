(function(){
  'use strict';
  var $btn = document.querySelector('.header-nav__hamburgger');
  var $htmlRoot = document.querySelector('html');

  var ariaControl = $btn.getAttribute('aria-controls'); // Acessando atribuito

  var $menu = document.getElementById(ariaControl); // ariaControl = '#mainMenu'
  console.log($menu);

  $htmlRoot.classList.remove('no-js');
  $htmlRoot.classList.add('js');
  
  $btn.addEventListener('click', function(){
    $htmlRoot.classList.toggle('menu-opened');

    // Temos que converter, pois qualquer boolean contendo string é true 
    var ariaExpanded = this.getAttribute('aria-expanded') === "true";

    this.setAttribute('aria-expanded', !ariaExpanded);
    $menu.setAttribute('aria-expanded', !ariaExpanded);
  });
})();