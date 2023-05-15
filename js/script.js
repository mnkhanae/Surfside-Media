$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
  $("#vticker").vTicker({
    speed: 500,
    pause: 3000,
    animation: "fade",
    mousePause: false,
    showItems: 1,
  });
});
