/* ============================================================
   Slick carousel init for the Calory landing page.
   The saved HTML contained Slick's already-rendered DOM,
   but no working init. This rebuilds both carousels.
   Autoplay: advances every 3 seconds, pauses on hover.
   ============================================================ */

jQuery(document).ready(function ($) {

  console.log('[Calory] jQuery version:', $.fn.jquery);
  console.log('[Calory] Slick available:', typeof $.fn.slick !== 'undefined');

  if (typeof $.fn.slick === 'undefined') {
    console.error('[Calory] Slick is NOT loaded. Check the CDN <script> tag.');
    return;
  }

  /* ---------- SCREENSHOTS CAROUSEL ---------- */
  var $screens = $('.screens-carousel');
  if ($screens.length) {
    if ($screens.hasClass('slick-initialized')) {
      $screens.slick('unslick');
    }
    $screens.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '50px',
      dots: true,
      arrows: true,
      infinite: true,
      speed: 1000,

      /* ----- AUTOPLAY (3 seconds) ----- */
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
    });
    console.log('[Calory] Screens carousel initialized with 3s autoplay.');
  } else {
    console.warn('[Calory] .screens-carousel not found.');
  }

  /* ---------- REVIEWS CAROUSEL ---------- */
  var $reviews = $('.reviews-carousel');
  if ($reviews.length) {
    if ($reviews.hasClass('slick-initialized')) {
      $reviews.slick('unslick');
    }
    $reviews.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      dots: true,
      arrows: true,
      infinite: true,
      speed: 1000,

      /* ----- AUTOPLAY (3 seconds) ----- */
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      pauseOnDotsHover: true,

      focusOnSelect: true,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } }
      ]
    });
    console.log('[Calory] Reviews carousel initialized with 3s autoplay.');
  } else {
    console.warn('[Calory] .reviews-carousel not found.');
  }

});
