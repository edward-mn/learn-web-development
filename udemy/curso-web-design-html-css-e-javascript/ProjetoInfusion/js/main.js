(function(){
  var $body = document.querySelector('body');
  $body.classList.remove('no-js');
  $body.classList.add('js');

  var menu = new Menu({ /* Inserindo informações que foram definidas no mains.css */
    container: '.header__nav',
    toggleBtn: '.header__btnMenu',
    widthEnabled: 1204,
  });
})()