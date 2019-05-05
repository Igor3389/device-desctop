$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });

    var popup = new Popup({
        'popup': '.modal__popup',
        'closeModal': '.modal__popup-close',
        'overlay': '.modal__overlay'
    });

    $('.contacts__map-link').on('click', function (event) {
        event.preventDefault();
        popup.open($('.modal__map'));
    });

    $('.contacts__link').on('click', function (event) {
        event.preventDefault();
        popup.open($('.modal__write'));
    });

    $('.option').removeClass('product__option--nojs');
    $('.product').hover(
        function(){
            $(this).children('.option').slideDown();
        },
        function(){
            $(this).children('.option').slideUp();
        }
    );
    var catalogList = $('.catalog__list');
    catalogList.removeClass('no-js');

    $('html:not(.catalog__list):not(.catalog__title)').on('click', function (event) {
        catalogList.css('display', 'none');
    });

    $('.catalog__title').on('click', function (event) {
        event.stopPropagation();
        if (catalogList.css('display') == 'flex') {
            catalogList.css('display', 'none');
        } else {
            catalogList.css('display', 'flex');
        }

    });

    catalogList.on('click', function (event) {
        event.stopPropagation();
        catalogList.css('display', 'flex');
    });

    var feturesItem = $('.features__item');
    feturesItem.on('click', function () {
        feturesItem.removeClass('features__item--active');
        $(this).addClass('features__item--active');
    });


});