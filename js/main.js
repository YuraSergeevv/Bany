$(document).ready(function(){

   
$( '.slider__inner' ).each(function(index) {
    $('.slider', $(this)).slick({
        slidesToShow: 2,
        slidesToScroll: 2,  
        prevArrow:$('.slider__prev-arrow',$(this)),
        nextArrow:$('.slider__next-arrow',$(this)),
    })
});

$( '.last-slider__inner' ).each(function(index) {
    $('.last-slider', $(this)).slick({
        slidesToShow: 2,
        slidesToScroll: 2,  
        prevArrow:$('.last-slider__prev-arrow',$(this)),
        nextArrow:$('.last-slider__next-arrow',$(this)),
    })
});

    $('.top__input-phone').mask('(000)000-00-00');  


});

