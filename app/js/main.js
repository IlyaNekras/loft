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

    let btnPoint = document.querySelector('.menu__category-point'),
        listHidden = document.querySelector('.menu__category-list');


    btnPoint.addEventListener('click', function () {
        listHidden.classList.toggle('menu__category-list_active');
    });




    //catalog - рабочий не до конца

    let catalogName = document.querySelectorAll('.catalog__name'),
        catalogItem1 = document.querySelector('.catalog__item-1');


    catalogName.forEach(function (name) {
        name.addEventListener('mouseover', function () {
            catalogItem1.classList.toggle('catalog__item-1_active');
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
                  



    // const items = document.querySelectorAll('.catalog__item'),
    //     catalogItem1 = document.querySelector('.catalog__item-1');
    // for (const name of items) {
    //     name.addEventListener('click', function () {
    //         catalogItem1.classList.toggle('catalog__item-1_active');
    //     });
    // }

    // let catalogItem = document.querySelectorAll('.catalog__item'),
    //     catalogItem1 = document.querySelector('.catalog__item-1'),
    //     catalogName = document.querySelector('.catalog__name');


    // catalogName.addEventListener('click', function () {
    //     catalogItem1.classList.toggle('catalog__item-1_active');
    // });





    // for (i = 0, len = menuCategoryItem.length; i < len; i++) {

    //     menuCategoryItem.forEach(i, function () {
    //         i.addEventListener('click', function () {
    //             menuCategoryHover.style.display = 'block';

    //         });
    //     });
    // }

    // menuCategoryItem.addEventListener('click', function () {
    //     menuCategoryHover.style.display = 'block';
    // });
    // };
    // menuCategoryItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         menuCategoryHover.style.display = 'block';

    //     });

    // menuCategoryItem.addEventListener('click', function() {
    //     menuCategoryHover.style.display = 'block';
    // });


    // [].forEach.call(like,function(el){
    //     el.addEventListener('click', function (e) {...})
    // });

    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('menu_active');
    //     })
    // })



});