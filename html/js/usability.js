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
  console.log(offsetHeader);
});


// jQuery
$(
  () => {
    // Code here
    $('.news h2')
      .addClass('horizontal');
    $('.news .container')
      .addClass('horizontal');
    $('#motion-bars')
      .addClass('colored-bars');

    $('#motion-bars')
      .next()
      //.addClass('highlight');

    $('.services h3:contains(BIG DATA)')
      .parent()
      .children()
      //.addClass('highlight');

    $('.services h3:contains(BIG DATA)')

      //.parent()
      //.addClass('highlight');

  }
);


