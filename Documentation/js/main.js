(function ($) {
  "use strict";

  var $window = $(window);
  var didScroll,
    lastScrollTop = 0,
    delta = 5,
    $mainNav = $("#sticky"),
    $mainNavHeight = $mainNav.outerHeight(),
    scrollTop;

  $window.on("scroll", function () {
    didScroll = true;
    scrollTop = $(this).scrollTop();
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 200);

  function hasScrolled() {
    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
      return;
    }
    if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
      $mainNav
        .removeClass("fadeInDown")
        .addClass("fadeInUp")
        .css("top", -$mainNavHeight);
    } else {
      if (scrollTop + $(window).height() < $(document).height()) {
        $mainNav.removeClass("fadeInUp").addClass("fadeInDown").css("top", 0);
      }
    }
    lastScrollTop = scrollTop;
  }

  function navbarFixed() {
    if ($("#sticky").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll) {
          $("#sticky").addClass("navbar_fixed");
          $(".sticky-nav-doc .body_fixed").addClass("body_navbar_fixed");
        } else {
          $("#sticky").removeClass("navbar_fixed");
          $(".sticky-nav-doc .body_fixed").removeClass("body_navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  function navbarFixedTwo() {
    if ($("#stickyTwo").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll) {
          $("#stickyTwo").addClass("navbar_fixed");
        } else {
          $("#stickyTwo").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixedTwo();

  //*=============menu sticky js =============*//

  //         page scroll
  function bodyFixed() {
    var windowWidth = $(window).width();
    if ($("#sticky_doc").length) {
      if (windowWidth > 576) {
        var tops = $("#sticky_doc");
        var leftOffset = tops.offset().top;

        $(window).on("scroll", function () {
          var scroll = $(window).scrollTop();
          if (scroll >= leftOffset) {
            tops.addClass("body_fixed");
          } else {
            tops.removeClass("body_fixed");
          }
        });
      }
    }
  }

  bodyFixed();
})(jQuery);
