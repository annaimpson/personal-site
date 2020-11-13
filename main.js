(function() {
  "use strict";

  const navToggle = document.getElementById("nav-toggle"),
        nav = document.getElementById("nav"),
        body = document.getElementById("body");

  openNav();

  function openNav() {
    navToggle.onclick = function() {
      nav.classList.toggle("port__header-menu-wrap--open");
      body.classList.toggle("port__body-freeze");

      if (navToggle.innerHTML === "Menu") {
        navToggle.innerHTML = "Close Menu";
      } else {
        navToggle.innerHTML = "Menu";
      }
    }
  }

})();
