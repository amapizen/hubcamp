$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var offsetHeader = $('.hero-image').offset().top;
  var heightHeader = $('.hero-image').height();
  if(scroll > offsetHeader + heightHeader){
    //if (scroll >= 800) {
    $('.nav-custom').addClass('fixed-header');
  } else {
    $('.nav-custom').removeClass('fixed-header');
  }
});
