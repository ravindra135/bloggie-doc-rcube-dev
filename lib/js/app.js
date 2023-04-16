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
        console.log(target.offset().top)
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1500, "easeInOutQuint");
        if (window.innerWidth <= 1023) {
          $('#sidebar').toggle('hidden');
          $('#side-menu').toggle('hidden');
          $('#side-close').toggle('hidden');
        }
      }
    });
});


// Sidebar
$(document).ready(function() {
  // Toggle sidebar on button click
  $('#toggleSidebar').click(function() {
    $('#sidebar').toggle('hidden');
    $('#side-menu').toggle('hidden');
    $('#side-close').toggle('hidden');
  });
});


$(window).on('resize', function() {  
  if ($(window).width() >= 768) { 
    // Remove style attribute for screen width equal to or greater than 768 pixels
    $('#sidebar').removeAttr('style');
  }
});