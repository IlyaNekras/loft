window.addEventListener('DOMContentLoaded', () => {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="prev"><img src="icons/left_arr.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/left_arr.svg"></button>',
        // responsive: [
        //   {
        //     breakpoint: 992,
        //     settings: {
        //       dots: true,
        //       arrows: false
        //     }
        //   }
        // ]
    });



    //показать/скрыть элементы категорий

    let listHidden = document.querySelector('.menu__category-list'),
        liItem = document.querySelectorAll('.menu__category-li');

    document.addEventListener('click', menu);

    function menu(event) {
        if(event.target.closest('.menu__category-point')) {
            listHidden.classList.toggle('menu__category-list_active');
        }
        if(!event.target.closest('.menu__category-point')) {
            listHidden.classList.remove('menu__category-list_active');
        }
    }


    liItem.forEach(function (el) {
        el.addEventListener('click', function () {
            listHidden.classList.remove('menu__category-list_active');
        });

    });


    //слайдер карточка товара

    $('.cart__carousel-item').slick({
        speed: 1200,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.cart__carousel-items'
    });
    $('.cart__carousel-items').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="prev"><img src="icons/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/arrow-right.svg"></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.cart__carousel-item',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    //показ дополнительных цветов товара

    let colorImg = document.querySelector('.cart__color-img'),
        colorAct = document.querySelector('.cart__color');

    colorImg.addEventListener('click', function () {
        colorAct.classList.toggle('cart__color_active');
    });


    //показ количества товара

    let numImg = document.querySelector('.cart__number-img'),
        numAct = document.querySelector('.cart__number');

    numImg.addEventListener('click', function () {
        numAct.classList.toggle('cart__number_active');
    });



});