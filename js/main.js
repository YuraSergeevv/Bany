$('.top__input-phone').mask('(000)000-00-00');  


$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,  
        prevArrow:'.slider__prev-arrow',
        nextArrow: '.slider__next-arrow'
    });
});