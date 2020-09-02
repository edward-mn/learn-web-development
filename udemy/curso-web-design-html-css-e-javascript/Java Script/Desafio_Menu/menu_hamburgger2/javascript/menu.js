(function(){
  'use strict';
  var $mainMenu = document.querySelector('.header-nav__hamburgger');
  var $htmlRoot = document.querySelector('html');

  $htmlRoot.classList.remove('no-js');
  $htmlRoot.classList.add('js');
  
  $mainMenu.addEventListener('click', openMenu);

  function openMenu(){
    $htmlRoot.classList.toggle('menu-opened');
  };
})();