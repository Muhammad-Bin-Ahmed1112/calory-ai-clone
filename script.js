/* ============================================================
   Slick carousel init for BOTH carousels (Screens + Reviews).
   Waits for jQuery + Slick to be ready, then initializes.
   Both carousels share identical options so they look the same.
   ============================================================ */

(function waitForSlick() {
  if (typeof window.jQuery === 'undefined' ||
      typeof window.jQuery.fn.slick === 'undefined') {
    return setTimeout(waitForSlick, 50);
  }

  var $ = window.jQuery;

  $(function () {

    console.log('[Calory] jQuery version:', $.fn.jquery);
    console.log('[Calory] Slick available:', typeof $.fn.slick !== 'undefined');

    var carouselOptions = {
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '50px',
      dots: true,
      arrows: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      pauseOnDotsHover: true,
      focusOnSelect: true,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4, centerPadding: '40px' } },
        { breakpoint: 992,  settings: { slidesToShow: 3, centerPadding: '30px' } },
        { breakpoint: 768,  settings: { slidesToShow: 2, centerPadding: '20px' } },
        { breakpoint: 480,  settings: { slidesToShow: 1, centerPadding: '10px' } }
      ]
    };

    function resetSlick($el) {
      if ($el.hasClass('slick-initialized')) {
        $el.removeData('slick');
        $el.removeClass('slick-initialized slick-slider slick-dotted');
        $el.find('.slick-list, .slick-track, .slick-prev, .slick-next, .slick-dots').remove();
        $el.find('.slick-slide').each(function () {
          var $slide = $(this);
          $slide.removeClass('slick-slide slick-active slick-center slick-cloned slick-current');
          $slide.removeAttr('data-slick-index aria-hidden tabindex role aria-describedby style');
        });
        $el.find('.slick-cloned').remove();
      }
    }

    var $screens = $('.screens-carousel');
    if ($screens.length) {
      resetSlick($screens);
      $screens.slick(carouselOptions);
      console.log('[Calory] Screens carousel initialized.');
    } else {
      console.warn('[Calory] .screens-carousel not found.');
    }

    var $reviews = $('.reviews-carousel');
    if ($reviews.length) {
      resetSlick($reviews);
      $reviews.slick(carouselOptions);
      console.log('[Calory] Reviews carousel initialized.');
    } else {
      console.warn('[Calory] .reviews-carousel not found.');
    }

  });
})();
