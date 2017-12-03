(function() {
  var scrollToSection = function(element) {
    var section = $(element).data('category');
    var $navLinks = $('nav .section-link');
    var offset = 50;

    if ($(window).width() < 640) {
      offset = 0;
    }

    $navLinks.removeClass('current');
    $(element).addClass('current');

    $('html, body').animate({
      scrollTop: $('.' + section).offset().top - offset,
    });
  };

  $(document).ready(function() {
    $('nav .section-link').on('click', function(e) {
      e.preventDefault();
      scrollToSection(this);
    });
  });
})();
