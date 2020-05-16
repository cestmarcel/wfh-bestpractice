$(window).scroll(function(){
    var scroll_position = $(window).scrollTop()/2;
    $('section').css({
        'background-position-y' : - scroll_position + "px",
    })
})

$(document).ready(function() {
    $("#btn1").click(function() {

        console.log( $("#scroll-target").offset())

      $("body,html").animate(
        {
          scrollTop: $("#scroll-target").offset().top - 100
        },
        800 //speed
      );
    });

  var $animation_elements = $('.animate__animated');

  function checkInView() {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass($element.data("animation"));
      } else {
        $element.removeClass($element.data("animation"));
      }
    });
  }

  $(window).on('scroll', checkInView);

  });