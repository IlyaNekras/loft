window.addEventListener('DOMContentLoaded', () => {
            // const btn1 = document.querySelector('.carousel__btn-left'),
            //     btn2 = document.querySelector('.carousel__btn-right'),
            //     img = document.querySelectorAll('.carousel__img');

            // btn1.addEventListener('click', function () {
            //     img.classList.toggle('carousel__img_active');
            // });


            //catalog

            let menuCategoryItem = document.querySelectorAll('.menu__category-item'),
                menuCategoryHover = document.querySelector('.menu__category-hover');

            for(i = 0, len = menuCategoryItem.length; i < len; i++) {

            menuCategoryItem.forEach(i, function() {
                i.addEventListener('click', function() {
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