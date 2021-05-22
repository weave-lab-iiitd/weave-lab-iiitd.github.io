
$(document).ready(function(){

  window.onload=window.onpageshow= function() {
    if($('#researchDiv').hasClass('active')){
      $(".social_media li a").css({"color":"white"});
    }
};

    // Add smooth scrolling to all links
  if($(window).scrollTop() > 500) {
    $('#menu').addClass('scrolling');
    $('.logo').attr('src', './static/WeaveLogo_sm.png');
    $(".social_media li a").css({"color":"black"});

  }

  $(".navbar a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 500, function() {
        window.location.hash = hash;
      });
    } // End if
  });


  $(".navbar-toggler").on('click',function(event){
    if($('#navbarNav').hasClass('show') && $('#menu').hasClass('scrolling')!=true){
      $('.navbar').css({'background-color':'transparent'});
    }
    else if($('#menu').hasClass('scrolling')!=true){
      $('.navbar').css({'background-color':'rgba(0, 0, 0, 0.5)'});
    }
    else {
      $('.navbar').css({'background-color':'transparent'});
    }

  });

  $(".scrollDown a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 500, function() {
        window.location.hash = hash;
      });
    } // End if
  });

  function checkOffset() {
    var off_set=Math.abs($('.page-footer').offset().top - $(window).scrollTop() - window.innerHeight);
    if($('.social_media').offset().top + $('.social_media').height() >= $('.page-footer').offset().top - 10)
        {
          $('.social_media').css('bottom', off_set);
        }      
        
    else if($(document).scrollTop() + window.innerHeight < $('.page-footer').offset().top)
        $('.social_media').css('bottom', '0'); // restore when you scroll up

    else {
      $('.social_media').css('bottom', off_set);
    }
}

  $(window).scroll(function() {
    // console.log($('.about').isInViewport());
    if($('#researchDiv').hasClass('active')){
      $(".social_media li a").css({"color":"white"});
    }
    else {
      if($('#menu').hasClass('scrolling')){
        $(".social_media li a").css({"color":"black"});
      }
    }


    if($(window).scrollTop() > 500) {

      if($('#menu').hasClass('scrolling')==false){

        $('#menu').addClass('scrolling');
        $(".social_media li a").css({"color":"black"});
        $('.logo').attr('src', './static/WeaveLogo_sm.png');
      }
    }
    else {
      if($('#menu').hasClass('scrolling')){

        $('#menu').removeClass('scrolling');
        $(".social_media li a").css({"color":"white"});
        $('.logo').attr('src', './static/logo.png');
      }
    }
    checkOffset();
  });

});
