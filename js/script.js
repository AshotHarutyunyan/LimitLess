import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper("#swiper2", {
        watchSlidesProgress: true,
        slidesPerView: 3,
        spaceBetween: 32,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const swiper2 = new Swiper("#swiper3", {
        watchSlidesProgress: true,
        slidesPerView: 3,
        spaceBetween: 32,
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    const swiper3 = new Swiper("#swiper4", {
        watchSlidesProgress: true,
        slidesPerView: 4,
        spaceBetween: 32,
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            prevEl: ".gallery-swiper-button-prev",
            nextEl: ".gallery-swiper-button-next",
        }
    });


    document.querySelector('.booking-form__bottom__buttons__next').addEventListener('click', () => {
        const bookingFormSteps = document.querySelectorAll('.booking-form__steps__step');
        bookingFormSteps[0].classList.remove('booking-form__steps__step_active');
        bookingFormSteps[1].classList.add('booking-form__steps__step_active');
    });

    document.querySelector('.booking-form__bottom__buttons__back').addEventListener('click', () => {
        const bookingFormSteps = document.querySelectorAll('.booking-form__steps__step');
        bookingFormSteps[1].classList.remove('booking-form__steps__step_active');
        bookingFormSteps[0].classList.add('booking-form__steps__step_active');
    });

    document.querySelector('.booking-form__bottom__buttons__clear').addEventListener('click', () => {
        const bookingFormCheckboxes = document.querySelectorAll('.form-check-input');
        bookingFormCheckboxes.forEach((el) => {
            el.checked = false;
        });
    });


});