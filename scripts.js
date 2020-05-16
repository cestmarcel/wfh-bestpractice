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
  });