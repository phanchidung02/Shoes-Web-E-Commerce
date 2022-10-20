var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
        draggable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});

var swiper = new Swiper('.mySwiperBanner', {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    speed: 2000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});
