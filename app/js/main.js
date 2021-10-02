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


    //catalog

    let menuCategoryItem = document.querySelectorAll('.menu__category-item'),
        menuCategoryHover = document.querySelector('.menu__category-hover');

    for (i = 0, len = menuCategoryItem.length; i < len; i++) {

        menuCategoryItem.forEach(i, function () {
            i.addEventListener('click', function () {
                menuCategoryHover.style.display = 'block';

            });
        });
    }

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