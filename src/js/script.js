$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 600,
        slidesToShow: 1,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        responsive: [
            {
              breakpoint: 950,
              settings: {
                speed: 1200,
                autoplay: true,
                autoplaySpeed: 2400,
                arrows: false,
                slidesToShow: 1,
                mobileFirst: true
              }
            }]
    });
});
// Owl-Carousel, Tiny Slider, Slick Slider