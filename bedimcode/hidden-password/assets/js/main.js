const showHiddenInput = (inputOverlay, inputPass, inputIcon, lockIcon) => {
  const overlay = document.getElementById(inputOverlay),
    input = document.getElementById(inputPass),
    iconEye = document.getElementById(inputIcon),
    iconLock = document.getElementById(lockIcon);

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';
      iconEye.classList.add('bx-show');
      iconLock.classList.add('bx-lock-open-alt');
    } else {
      input.type = 'password';
      iconEye.classList.remove('bx-show');
      iconLock.classList.remove('bx-lock-open-alt');
    }

    overlay.classList.toggle('overlay-content');
  });
};

showHiddenInput('input-overlay', 'password', 'eye-icon', 'lock');
