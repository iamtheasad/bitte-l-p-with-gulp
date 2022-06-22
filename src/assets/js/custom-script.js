/* ********************************** */
/* Custom Scripts */
/* ********************************** */
"use strict";

function menuOpen() {
  var mobileMenu = document.getElementById("mobileMenu");
  var toggleCross = document.getElementById("toggleCrossId");
  var toggleBar = document.getElementById("toggleBarId");
  if (
    mobileMenu.style.display === "none" &&
    toggleCross.style.display === "none"
  ) {
    mobileMenu.style.display = "block";
    toggleCross.style.display = "block";
    toggleBar.style.display = "none";
  } else {
    mobileMenu.style.display = "none";
    toggleCross.style.display = "none";
    toggleBar.style.display = "block";
  }
}

function menuClose() {
  var mobileMenu = document.getElementById("mobileMenu");
  var toggleCross = document.getElementById("toggleCrossId");
  var toggleBar = document.getElementById("toggleBarId");
  if (
    mobileMenu.style.display === "block" &&
    toggleCross.style.display === "block"
  ) {
    mobileMenu.style.display = "none";
    toggleCross.style.display = "none";
    toggleBar.style.display = "block";
  } else {
    mobileMenu.style.display = "block";
    toggleCross.style.display = "block";
    toggleBar.style.display = "none";
  }
}

(function ($) {
  /*==========================================================================
        :: All Essential Functions
    ==========================================================================*/

  /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
  $(window).on("load", function () {});

  /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
  $(window).scroll(function () {
    //
  });

  /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
  $(window).on("resize", function () {
    //
  });
})(window.jQuery);
