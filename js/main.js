

const swiper = new Swiper('.swiper', {
  slidesPerView: 4.2,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      loop: false,
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2.5,
    },
    // when window width is >= 640px
    1800: {
      slidesPerView: 3.4,
    },
    1850: {
      slidesPerView: 4.2,
      centeredSlides: true,
      loop: true,
    }
  }
});

$('a[href^="#"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});
