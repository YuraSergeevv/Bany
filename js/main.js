$(document).ready(function(){

   
$( '.slider__inner' ).each(function(index) {
    $('.slider', $(this)).slick({
        slidesToShow: 2,
        slidesToScroll: 1,  
        prevArrow:$('.slider__prev-arrow',$(this)),
        nextArrow:$('.slider__next-arrow',$(this)), 
        responsive:[{
            breakpoint: 769,
            settings:
            {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
]
    })
});

$( '.last-slider__inner' ).each(function(index) {
    $('.last-slider', $(this)).slick({
        slidesToShow: 3,
        slidesToScroll: 1,  
        infinite: false,
        prevArrow:$('.last-slider__prev-arrow',$(this)),
        nextArrow:$('.last-slider__next-arrow',$(this)),
        responsive:[{
            breakpoint: 1101,
            settings:
            {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings:
            {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
]
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

    $('.menu__btn').on('click',function(){
        $('.header__content').toggleClass('active')
        $('.menu__btn').toggleClass('pressed')
    })

    $('.menu__list-link').on('click',function(){
        $('.header__content').removeClass('active')
        $('.menu__btn').removeClass('pressed')
    })

    //Плавная прокрутка к якорю
        $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
        scrollTop: $(el).offset().top}, 1000);
        return false;
        });

});

