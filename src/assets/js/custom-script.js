/* ********************************** */
/* Custom Scripts */
/* ********************************** */
'use strict';

// Responsive Toggle Button Open
function menuOpen() {
  var mobileMenu = document.getElementById('mobileMenu');
  var toggleCross = document.getElementById('toggleCrossId');
  var toggleBar = document.getElementById('toggleBarId');
  if (
    mobileMenu.style.display === 'none' &&
    toggleCross.style.display === 'none'
  ) {
    mobileMenu.style.display = 'block';
    toggleCross.style.display = 'block';
    toggleBar.style.display = 'none';
  } else {
    mobileMenu.style.display = 'none';
    toggleCross.style.display = 'none';
    toggleBar.style.display = 'block';
  }
}

// Responsive Toggle Button Close
function menuClose() {
  var mobileMenu = document.getElementById('mobileMenu');
  var toggleCross = document.getElementById('toggleCrossId');
  var toggleBar = document.getElementById('toggleBarId');
  if (
    mobileMenu.style.display === 'block' &&
    toggleCross.style.display === 'block'
  ) {
    mobileMenu.style.display = 'none';
    toggleCross.style.display = 'none';
    toggleBar.style.display = 'block';
  } else {
    mobileMenu.style.display = 'block';
    toggleCross.style.display = 'block';
    toggleBar.style.display = 'none';
  }
}

(function ($) {
  /*==========================================================================
        :: All Essential Functions
    ==========================================================================*/
  // Video Popup
  setTimeout(function () {
    $('#myModal').modal('show');
  }, 300);

  $('#myModal').on('shown.bs.modal', function () {
    $('#myModal video').get(0).play();
  });

  $('#myModal .btn-close').on('click', function () {
    $('#myModal video').get(0).pause();
  });

  // Registration Popup
  $('.registrationButton').click(function () {
    $('#registration').show(100);
    $('html body').addClass('scroll-hide-show');
    $('main').css({ display: 'none' });
    $('footer').css({ display: 'none' });
    $('.header-banner').css({ display: 'none' });
  });
  $('#registrationCloseButton').click(function () {
    $('#registration').hide();
    $('main').css({ display: 'block' });
    $('footer').css({ display: 'block' });
    $('.header-banner').css({ display: 'block' });
  });

  /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
  $(window).on('load', function () {});

  /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
  $(window).scroll(function () {
    //
  });

  /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
  $(window).on('resize', function () {
    //
  });
})(window.jQuery);
