// Scroll To Top
$("#scroll_to_top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutQuint");
    return false;
});

// Smooth Scrolling to Section;
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 85
        }, 1500, "easeInOutQuint");
      }
    });
});