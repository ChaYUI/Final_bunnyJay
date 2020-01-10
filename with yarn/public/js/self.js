$(document).ready(function () {
  var nice = $("html").niceScroll();
  $("#colorlib-aside").niceScroll({ cursorborder: "", cursorcolor: "#FFFFFF", boxzoom: true });

});

var burgerMenu = function () {

  $('.js-colorlib-nav-toggle').on('click', function (event) {
    event.preventDefault();
    var $this = $(this);

    if ($('body').hasClass('offcanvas')) {
      $this.removeClass('active');
      $('body').removeClass('offcanvas');
    } else {
      $this.addClass('active');
      $('body').addClass('offcanvas');
    }
  });
};
burgerMenu();