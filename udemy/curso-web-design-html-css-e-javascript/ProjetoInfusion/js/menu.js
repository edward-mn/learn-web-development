function Menu(config) {
  this.nav =
    typeof config.container === "string"
      ? document.querySelector(config.container)
      : config.container;

  this.btn =
    typeof config.toggleBtn === "string"
      ? document.querySelector(config.toggleBtn)
      : config.toggleBtn;

  this.maxWidth = config.widthEnabled || false;

  var _opened = false;
  var _this = this;

  this.btn.removeAttribute("style");
  closeMenu();

  if (this.maxWidth) {
    window.addEventListener("load", showMenuNormal);
  }

  function showMenuNormal() {
    if (window.innerWidth > _this.maxWidth) {
      _this.nav.removeAttribute("style");
      _opened = true;
    } else if (!_this.nav.getAttribute("style")) {
      closeMenu();
    }
  }

  if (this.maxWidth) {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > _this.maxWidth) {
        _this.nav.removeAttribute("style");
        _opened = true;
      } else if (!_this.nav.getAttribute("style")) {
        closeMenu();
      }
    });
  }

  this.btn.addEventListener("click", openOrClose);

  function openOrClose() {
    if (!_opened) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  function openMenu() {
    var top = _this.nav.getBoundingClientRect().top + "px";

    var _style = {
      maxHeight: "calc(100vh - " + top + ")",
      overflow: "hidden",
    };

    applyStyleToNav(_style);
    _opened = true;
  }

  function closeMenu() {
    var _style = {
      maxHeight: "0px",
      overflow: "hidden",
    };

    applyStyleToNav(_style);
    _opened = false;
  }

  function applyStyleToNav(theStyle) {
    Object.keys(theStyle).forEach((stl) => {
      /* Aplicando o obj _style */
      _this.nav.style[stl] = theStyle[stl];
    });
  }
}
