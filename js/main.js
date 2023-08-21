new Swiper('.swiper', {
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination', // "String with CSS selector or HTML element of the container with pagination" - цитата из документации, обратие внимание
        clickable: true,
        },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },

    spacebetween: 90,
});