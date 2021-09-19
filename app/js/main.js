window.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.querySelector('.carousel__btn-left'),
        btn2 = document.querySelector('.carousel__btn-right'),
        img = document.querySelectorAll('.carousel__img');

    btn1.addEventListener('click', function () {
        img.classList.toggle('carousel__img_active');
    });
});