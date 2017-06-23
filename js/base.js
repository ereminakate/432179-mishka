var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

var modalOpen = document.querySelector(".js-modal-open");
var modalSize = document.querySelector(".modal-size");
var modalClose = document.querySelector(".js-modal-close");


navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


if (modalOpen) {
  modalOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalSize.classList.add("modal-size__show");
  });

  modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalSize.classList.remove("modal-size__show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (modalSize.classList.contains("modal-size__show")) {
        modalSize.classList.remove("modal-size__show");
      }
    }
  });
};