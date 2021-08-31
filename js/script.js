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

    const swiper4 = new Swiper("#swiper5", {
        watchSlidesProgress: true,
        slidesPerView: 3,
        spaceBetween: 32,

        navigation: {
            prevEl: ".car-swiper-button-prev",
            nextEl: ".car-swiper-button-next",
        },
    });

    const nextStepButton = document.querySelector('.booking-form__bottom__buttons__next');

    nextStepButton?.addEventListener('click', () => {
        const bookingFormSteps = document.querySelectorAll('.booking-form__steps__step');
        bookingFormSteps[0].classList.remove('booking-form__steps__step_active');
        bookingFormSteps[1].classList.add('booking-form__steps__step_active');
    });

    const backToPrevStepButton = document.querySelector('.booking-form__bottom__buttons__back')

    backToPrevStepButton?.addEventListener('click', () => {
        const bookingFormSteps = document.querySelectorAll('.booking-form__steps__step');
        bookingFormSteps[1].classList.remove('booking-form__steps__step_active');
        bookingFormSteps[0].classList.add('booking-form__steps__step_active');
    });

    const clearAllButton = document.querySelector('.booking-form__bottom__buttons__clear')

    clearAllButton?.addEventListener('click', () => {
        const bookingFormCheckboxes = document.querySelectorAll('.form-check-input');
        bookingFormCheckboxes.forEach((el) => {
            el.checked = false;
        });
    });

    const days = document.querySelectorAll('.tour-page__right-block__days__list__item');
    const daysContents = document.querySelectorAll('.tour-page__right-block__days-content__list__item');
    const removeClassFromList = (elements, className) => {
        elements.forEach((el) => {
            el.classList.remove(className);
        })
    }

    days?.forEach((day) => {
        day.addEventListener('click', () => {
            const selectedIndex = Number(day.getAttribute('data-day'));
            removeClassFromList(days, 'tour-page__right-block__days__list__item_active');
            removeClassFromList(daysContents, 'tour-page__right-block__days-content__list__item_active');
            days[selectedIndex].classList.add('tour-page__right-block__days__list__item_active');
            daysContents[selectedIndex].classList.add('tour-page__right-block__days-content__list__item_active');
        });
    });

});