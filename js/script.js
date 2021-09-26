import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper("#swiper2", {
        watchSlidesProgress: true,
        slidesPerView: 3,
        spaceBetween: 41,
        breakpoints: {
            200: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1.6,
                spaceBetween: 50
            },
            569: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 50
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 41,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const swiper2 = new Swiper("#swiper3", {
        watchSlidesProgress: true,
        slidesPerView: 1,
        spaceBetween: 32,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    const swiper3 = new Swiper("#swiper4", {
        watchSlidesProgress: true,
        slidesPerView: 4,
        spaceBetween: 40,
        breakpoints: {
            200: {
                slidesPerView: 1.2,
                spaceBetween: 16
            },
            450: {
                slidesPerView: 1.6,
                spaceBetween: 16
            },
            569: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
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
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 32,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
        navigation: {
            prevEl: ".car-swiper-button-prev",
            nextEl: ".car-swiper-button-next",
        },
    });

    const nextStepButton = document.querySelector('.booking-form__bottom__buttons__next');
    const backToPrevStepButton = document.querySelector('.booking-form__bottom__buttons__back');
    const clearAllButton = document.querySelector('.booking-form__bottom__buttons__clear')
    const days = document.querySelectorAll('.tour-page__right-block__days__list__item');
    const daysContents = document.querySelectorAll('.tour-page__right-block__days-content__list__item');
    const languageItems = document.querySelectorAll('.language-bar__item');
    const menu = document.querySelector('.menu');
    const navbar = document.querySelector('.mobile-nav');
    const navbarShadow = document.querySelector('.mobile-nav__shadow');
    const counterMinus = document.querySelectorAll('.counter__minus');
    const counterPlus = document.querySelectorAll('.counter__plus');
    const galleryButtons = document.querySelectorAll(`button[data-bs-target="#galeryModal"]`)

    const removeClassFromList = (elements, className) => {
        elements.forEach((el) => {
            el.classList.remove(className);
        })
    };

    (counterMinus || []).forEach((el) => {
        el.addEventListener('click', () => {
            const index = el.getAttribute('data-id');
            const counter = document.querySelector(`.counter__value[data-id="${index}"]`);
            counter.innerText = +counter.innerText <= 1 ? counter.innerText : +counter.innerText - 1;
        });
    });

    (counterPlus || []).forEach((el) => {
        el.addEventListener('click', () => {
            const index = el.getAttribute('data-id');
            const counter = document.querySelector(`.counter__value[data-id="${index}"]`);
            counter.innerText = +counter.innerText + 1;
        });
    });

    (galleryButtons || []).forEach((el) => {
        el.addEventListener('click', () => {
            const gallerySwiper = new Swiper("#gallerySwiper", {
                watchSlidesProgress: true,
                slidesPerView: 1,
                spaceBetween: 32,
                initialSlide: +el.getAttribute('data-id'),
                navigation: {
                    prevEl: ".galeryModal-button-prev",
                    nextEl: ".galeryModal-button-next",
                },
                pagination: {
                    el: '.galeryModal-swiper-pagination',
                    type: 'bullets',
                }
            });
        });
    });

    menu?.addEventListener('click', (e) => {
        menu.classList.toggle('menu__animation');
        navbar.classList.toggle('mobile-nav_active')
        navbarShadow.classList.toggle('mobile-nav__shadow_active')
    });

    navbarShadow?.addEventListener('click', () => {
        menu.classList.remove('menu__animation');
        navbar.classList.remove('mobile-nav_active')
        navbarShadow.classList.remove('mobile-nav__shadow_active')
    });

    languageItems?.forEach((el) => {
        el.addEventListener('click', (e) => {
            removeClassFromList(languageItems, 'language-bar__item_active');
            e.target.classList.add('language-bar__item_active')
        });
    });

    nextStepButton?.addEventListener('click', () => {
        const bookingFormSteps = document.querySelectorAll('.booking-form__steps__step');
        bookingFormSteps[0].classList.remove('booking-form__steps__step_active');
        bookingFormSteps[1].classList.add('booking-form__steps__step_active');
    });

    backToPrevStepButton?.addEventListener('click', () => {
        const bookingFormSteps = document.querySelectorAll('.booking-form__steps__step');
        bookingFormSteps[1].classList.remove('booking-form__steps__step_active');
        bookingFormSteps[0].classList.add('booking-form__steps__step_active');
    });

    clearAllButton?.addEventListener('click', () => {
        const bookingFormCheckboxes = document.querySelectorAll('.form-check-input');
        bookingFormCheckboxes.forEach((el) => {
            el.checked = false;
        });
    });

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