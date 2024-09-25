let timerInterval;
let timeClock = document.getElementById("twp-time-clock");

function myTimer() {
  const date = new Date();
  timeClock.innerHTML = date.toLocaleTimeString();
}

jQuery(document).ready(function ($) {
  "use strict";
  // Responsive Content

  if (timeClock) {
    timerInterval = setInterval(myTimer, 1000);
  }

  // Hide Comments
  $(
    ".maglux-no-comment .booster-block.booster-ratings-block, .maglux-no-comment .comment-form-ratings, .maglux-no-comment .twp-star-rating"
  ).hide();
  $(".tooltips").append("<span></span>");
  $(".tooltips").mouseenter(function () {
    $(this).find("span").empty().append($(this).attr("data-tooltip"));
  });

  /**
   * Light & Dark Mode jQuery Toggle Using localStorage
   */

  // Check for saved 'switchMode' in localStorage
  let switchMode = localStorage.getItem("switchMode");

  // Get selector
  const switchModeToggle = $(" .theme-colormode-switcher ");

  // Dark mode function
  const enableDarkMode = function () {
    // Add the class to the body
    $("body").addClass("theme-darkmode-enabled");
    // Update switchMode in localStorage
    localStorage.setItem("switchMode", "enabled");
  };

  // Light mdoe function
  const disableDarkMode = function () {
    // Remove the class from the body
    $("body").removeClass("theme-darkmode-enabled");
    // Update switchMode in localStorage value
    localStorage.setItem("switchMode", null);
  };

  // If the user already visited and enabled switchMode
  if (switchMode === "enabled") {
    enableDarkMode();
    // Dark icon enabled
    $(".mode-icon-change").addClass("mode-icon-night");
    $(".mode-icon-change").removeClass("mode-icon-light");
  } else {
    // Light icon enabled
    $(".mode-icon-change").addClass("mode-icon-light");
    $(".mode-icon-change").removeClass("mode-icon-night");
  }

  // When someone clicks the button
  switchModeToggle.on("click", function () {
    // Change switch icon
    $(".mode-icon-change").toggleClass("mode-icon-light");
    $(".mode-icon-change").toggleClass("mode-icon-night");

    // get their switchMode setting
    switchMode = localStorage.getItem("switchMode");

    // if it not current enabled, enable it
    if (switchMode !== "enabled") {
      enableDarkMode();
      // if it has been enabled, turn it off
    } else {
      disableDarkMode();
    }
  });

  // Rating disable
  if (maglux_custom.single_post == 1 && maglux_custom.maglux_ed_post_reaction) {
    $(".tpk-single-rating").remove();
    $(".tpk-comment-rating-label").remove();
    $(".comments-rating").remove();
    $(".tpk-star-rating").remove();
  }
  // Add Class on article
  $(".theme-article-area").each(function () {
    $(this).addClass("theme-article-loaded");
  });
  // Aub Menu Toggle
  $(".submenu-toggle").click(function () {
    $(this).toggleClass("button-toggle-active");
    var currentClass = $(this).attr("data-toggle-target");
    $(currentClass).toggleClass("submenu-toggle-active");
  });
  // Header Search show
  $(".header-searchbar").click(function () {
    $(".header-searchbar").removeClass("header-searchbar-active");
  });
  $(".header-searchbar-inner").click(function (e) {
    e.stopPropagation(); //stops click event from reaching document
  });
  // Header Search hide
  $("#search-closer").click(function () {
    $(".header-searchbar").removeClass("header-searchbar-active");
    setTimeout(function () {
      $(".navbar-control-search").focus();
    }, 300);
    $("body").removeClass("body-scroll-locked");
  });
  // Focus on search input on search icon expand
  $(".navbar-control-search").click(function () {
    $(".header-searchbar").toggleClass("header-searchbar-active");
    setTimeout(function () {
      $(".header-searchbar .search-field").focus();
    }, 300);
    $("body").addClass("body-scroll-locked");
  });
  $("input, a, button").on("focus", function () {
    if ($(".header-searchbar").hasClass("header-searchbar-active")) {
      if ($(this).hasClass("skip-link-search-top")) {
        $(".header-searchbar #search-closer").focus();
      }
      if (!$(this).parents(".header-searchbar").length) {
        $(".header-searchbar .search-field").focus();
      }
    }
  });
  $(document).keyup(function (j) {
    if (j.key === "Escape") {
      // escape key maps to keycode `27`
      if ($(".header-searchbar").hasClass("header-searchbar-active")) {
        $(".header-searchbar").removeClass("header-searchbar-active");
        $("body").removeClass("body-scroll-locked");
        setTimeout(function () {
          $(".navbar-control-search").focus();
        }, 300);
      }
    }
  });
  // Action On Esc Button
  $(document).keyup(function (j) {
    if (j.key === "Escape") {
      // escape key maps to keycode `27`
      if ($("#offcanvas-menu").hasClass("offcanvas-menu-active")) {
        $(".header-searchbar").removeClass("header-searchbar-active");
        $("#offcanvas-menu").removeClass("offcanvas-menu-active");
        $(".navbar-control-offcanvas").removeClass("active");
        $("body").removeClass("body-scroll-locked");
        setTimeout(function () {
          $(".navbar-control-offcanvas").focus();
        }, 300);
      }
    }
  });
  // Toggle Menu
  $(".navbar-control-offcanvas").click(function () {
    $(this).addClass("active");
    $("body").addClass("body-scroll-locked");
    $("#offcanvas-menu").toggleClass("offcanvas-menu-active");
    $(".button-offcanvas-close").focus();
  });
  // Offcanvas Close
  $(".offcanvas-close .button-offcanvas-close").click(function () {
    $("#offcanvas-menu").removeClass("offcanvas-menu-active");
    $(".navbar-control-offcanvas").removeClass("active");
    $("body").removeClass("body-scroll-locked");
    setTimeout(function () {
      $(".navbar-control-offcanvas").focus();
    }, 300);
  });
  // Offcanvas Close
  $("#offcanvas-menu").click(function () {
    $("#offcanvas-menu").removeClass("offcanvas-menu-active");
    $(".navbar-control-offcanvas").removeClass("active");
    $("body").removeClass("body-scroll-locked");
  });
  $(".offcanvas-wraper").click(function (e) {
    e.stopPropagation(); //stops click event from reaching document
  });
  // Offcanvas re focus on close button
  $("input, a, button").on("focus", function () {
    if ($("#offcanvas-menu").hasClass("offcanvas-menu-active")) {
      if ($(this).hasClass("skip-link-off-canvas")) {
        if (!$("#offcanvas-menu #social-nav-offcanvas").length == 0) {
          $("#offcanvas-menu #social-nav-offcanvas ul li:last-child a").focus();
        } else if (!$("#offcanvas-menu #primary-nav-offcanvas").length == 0) {
          $(
            "#offcanvas-menu #primary-nav-offcanvas ul li:last-child a"
          ).focus();
        }
      }
    }
  });
  $(".skip-link-offcanvas").focus(function () {
    $(".button-offcanvas-close").focus();
  });

  // Sidr WidgetArea

  if ($("body").hasClass("rtl")) {
    $("#widgets-nav").sidr({
      name: "sidr-nav",
      side: "right",
    });
  } else {
    $("#widgets-nav").sidr({
      name: "sidr-nav",
      side: "left",
    });
  }
  $("#hamburger-one").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $("body").addClass("body-scroll-locked");
    } else {
      $("body").removeClass("body-scroll-locked");
    }

    setTimeout(function () {
      $(".sidr-offcanvas-close").focus();
    }, 300);
  });
  $(".sidr-offcanvas-close").click(function () {
    $.sidr("close", "sidr-nav");

    $("#hamburger-one").removeClass("active");

    $("body").removeClass("body-scroll-locked");

    setTimeout(function () {
      $("#hamburger-one").focus();
    }, 300);
  });
  $("input, a, button").on("focus", function () {
    if ($("body").hasClass("sidr-nav-open")) {
      if ($(this).hasClass("skip-link-offcanvas-first")) {
        $(".skip-link-offcanvas-last").focus();
      }

      if (!$(this).parents("#sidr-nav").length) {
        $(".sidr-offcanvas-close").focus();
      }
    }
  });

  $(document).keyup(function (j) {
    if ($("body").hasClass("sidr-nav-open")) {
      if (j.key === "Escape") {
        // escape key maps to keycode `27`

        $.sidr("close", "sidr-nav");
        $("#hamburger-one").removeClass("active");
        $("body").removeClass("body-scroll-locked");
        setTimeout(function () {
          $("#hamburger-one").focus();
        }, 300);
      }
    }
  });

  var rtled = false;
  if ($("body").hasClass("rtl")) {
    rtled = true;
  }
  // Single Post content gallery slide
  $(
    "figure.wp-block-gallery.has-nested-images.columns-1, .wp-block-gallery.columns-1 ul.blocks-gallery-grid, .gallery-columns-1"
  ).each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: false,
      autoplaySpeed: 8000,
      infinite: true,
      nextArrow:
        '<button type="button" class="slide-btn slide-btn-bg slide-next-icon">' +
        maglux_custom.next_svg +
        "</button>",
      prevArrow:
        '<button type="button" class="slide-btn slide-btn-bg slide-prev-icon">' +
        maglux_custom.prev_svg +
        "</button>",
      dots: false,
      rtl: rtled,
    });
  });

  $(function () {
    $("#theme-banner-navs a").click(function () {
      // Check for active
      $("#theme-banner-navs li").removeClass("active");
      $(this).parent().addClass("active");
      // Display active tab
      let currentTab = $(this).attr("href");
      $(".video-slider-right .twp-banner-tab").hide();
      $(currentTab).show();
      return false;
    });
  });

  $(".theme-slider-block").each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: false,
      autoplaySpeed: 8000,
      infinite: true,
      prevArrow: $(this)
        .closest(".theme-block-navtabs")
        .find(".slide-prev-lead"),
      nextArrow: $(this)
        .closest(".theme-block-navtabs")
        .find(".slide-next-lead"),
      dots: false,
    });
  });

  $(".theme-tiles-slide").each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: false,
      autoplaySpeed: 8000,
      infinite: true,
      prevArrow: $(this)
        .closest(".theme-block-tiles")
        .find(".slide-prev-tiles"),
      nextArrow: $(this)
        .closest(".theme-block-tiles")
        .find(".slide-next-tiles"),
      dots: false,
    });
  });
  // Banner Block 1
  $(".theme-widget-slider").each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: false,
      autoplaySpeed: 8000,
      infinite: true,
      prevArrow: $(this)
        .closest(".theme-jumbo-banner")
        .find(".slide-prev-banner"),
      nextArrow: $(this)
        .closest(".theme-jumbo-banner")
        .find(".slide-next-banner"),
      dots: false,
    });
  });

  $(".main-carousel-content").slick({
    centerMode: true,
    centerPadding: "248px",
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    prevArrow: $(".theme-main-carousel .prev"),
    nextArrow: $(".theme-main-carousel .next"),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  });

  $(".theme-widget-carousel").each(function () {
    $(this).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      prevArrow: $(".slide-widget-prev"),
      nextArrow: $(".slide-widget-next"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  $(".prime-slider-left").each(function () {
    $(this).slick({
      autoplay: true,
      speed: 900,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      rtl: rtled,
    });
  });

  var pageSection = $(".data-bg");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() / 2) {
      $(".scroll-up").fadeIn(300);
    } else {
      $(".scroll-up").fadeOut(300);
    }
  });
  // Scroll to Top on Click
  $(".scroll-up").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });
});

jQuery(document).ready(function ($) {
  // Here You can type your custom JavaScript...

  var header = document.getElementById("theme-navigation");
  if (header) {
    window.onscroll = function () {
      myFunction();
    };
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("theme-navbar-affix");
      } else {
        header.classList.remove("theme-navbar-affix");
      }
    }
  }
});

jQuery(document).ready(function ($) {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("#theme-navigation").outerHeight();

  $(window).on("scroll", function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("#theme-navigation")
        .removeClass("navbar-affix-down")
        .addClass("navbar-affix-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("#theme-navigation")
          .removeClass("navbar-affix-up")
          .addClass("navbar-affix-down");
      }
    }

    lastScrollTop = st;
  }
});

jQuery(document).ready(function ($) {
  $(".ticker-slides").marquee({
    delayBeforeStart: 0,
    duration: 25000,
    pauseOnHover: true,
    duplicated: true,
    direction: "left",
    startVisible: true,
  });

  // Masonry Grid
  if ($(".archive-layout-masonry").length > 0) {
    /*Default masonry animation*/
    var grid;
    var hidden = "scale(0.5)";
    var visible = "scale(1)";
    grid = $(".archive-layout-masonry").imagesLoaded(function () {
      grid.masonry({
        itemSelector: ".theme-article-area",
        hiddenStyle: {
          transform: hidden,
          opacity: 0,
        },
        visibleStyle: {
          transform: visible,
          opacity: 1,
        },
      });
    });
  }
});

// header ad

let adCountDown = document.querySelector(".ad-countdown-timer");
let headerAds = document.querySelector(".theme-header-ads");
let adBtn = document.querySelector(".top-header-add");

if (headerAds) {
  let headerAdsHeight = headerAds.getBoundingClientRect().height;

  let counter = 6;

  // scroll down when button is clicked and stop ad countdown timer

  adBtn.addEventListener("click", () => {
    startScroll();
  });

  // start ad countdown timer and scroll down when timer reaches to 0s

  let startCount = setInterval(() => {
    counter--;
    if (counter <= 0) {
      clearInterval(startCount);
      startScroll();
    }

    adCountDown.textContent = `${counter}s`;
  }, 1000);

  // scroll down functunality

  function startScroll() {
    window.scrollTo({
      top: headerAdsHeight,
      behavior: "smooth",
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY >= headerAdsHeight) {
        headerAds.classList.add("header-add-top");
        clearInterval(startCount);
      }
    });
  }
}

// subscribe

let subBtn = document.querySelector(".navbar-control-subscription");
let modal = document.querySelector(".theme-modal");
let closeBtn = document.querySelector(".theme-modal-close");

if (modal) {
  subBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("active");
  });
}
