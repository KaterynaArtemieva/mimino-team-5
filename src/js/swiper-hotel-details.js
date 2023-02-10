const swiper = new Swiper('.swiper-hotel-details', {
  // Optional parameters
  direction: 'horizontal',

  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.arrow-button-next',
    prevEl: '.arrow-button-prev',
  },

  slidesPerView: 'auto',

  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    414: {
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 25,
    },
    1280: {
      spaceBetween: 50,
    },
  },
});
