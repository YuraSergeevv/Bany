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


    let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');
    
        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });
    
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });
    
        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }
    
        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');
    
        }
    
    };
    
    
    select();

});

