import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper("#swiper2", {
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

    var swiper2 = new Swiper("#swiper3", {
        watchSlidesProgress: true,
        slidesPerView: 1,
        spaceBetween: 32,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    var swiper3 = new Swiper("#swiper4", {
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

    var swiper4 = new Swiper("#swiper5", {
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

    var backToPrevStepButton = document.querySelector('.booking-form__bottom__buttons__back');
    var clearAllButton = document.querySelector('.booking-form__bottom__buttons__clear');
    var days = document.querySelectorAll('.tour-page__right-block__days__list__item');
    var daysContents = document.querySelectorAll('.tour-page__right-block__days-content__list__item');
    var languageItems = document.querySelectorAll('.language-bar__item');
    var menu = document.querySelector('.menu');
    var navbar = document.querySelector('.mobile-nav');
    var navbarShadow = document.querySelector('.mobile-nav__shadow');
    var bookingFormCheckboxes = document.querySelectorAll('.booking-form .form-check-input');
    var closeBookingModal = document.querySelector('.booking-modal__close');
    // var addToCart = document.querySelector('.booking-form__add-to-cart');
    var bookingModal = document.querySelector('.booking-modal');
    var galleryButtons = document.querySelectorAll('button[data-bs-target="#galeryModal"]');
    var basket = document.querySelector('.basket');
    var orders = document.querySelector('.orders');
    var ordersClose = document.querySelector('.orders__close');
    var ordersShadow = document.querySelector('.order__shadow');
    var carPageSwipeImages = document.querySelectorAll('#swiper5 .car__slide');
    var carPageBigImage = document.querySelector('.car-page__left-block__image');
    var viedoButtons = document.querySelectorAll('button[data-bs-target="#videoModal"]');
    var orderListCunterPlus = document.querySelectorAll('.orders__list .counter__plus');
    var orderListCunterMinus = document.querySelectorAll('.orders__list .counter__minus');
    var orderListAmounts = document.querySelectorAll('[data-selector="orders-list-sum"]');
    var ordersRemoveItems = document.querySelectorAll('.orders__list__item__delete');
    var counterMinus = document.querySelectorAll('.counter__minus');
    var counterPlus = document.querySelectorAll('.counter__plus');


    function fpArithmetic(op, x, y) {
        var n = {
            '*': x * y,
            '-': x - y,
            '+': x + y,
            '/': x / y
        }[op];

        return Math.round(n * 100) / 100;
    }

    function handleOrdersRemoveItemsClick() {
        var parent = $(this).parents('.orders__list__item')[0];
        var count = +parent.querySelector('.counter__value').innerText;
        var price = +parent.querySelector('.counter__minus').getAttribute('data-price');
        var total = document.querySelector('.ordersListTotalAmount');
        var newAmount = fpArithmetic('-', +total.value, count * price);
        orderListAmounts.forEach(function (el) {
            el.textContent = `${newAmount}  ֏`;
        });
        total.setAttribute('value', newAmount);
        parent.remove();
    }

    function handleCounterMinusClick() {
        var index = this.getAttribute('data-id');
        var counter = document.querySelector(`.counter__value[data-id="${index}"]`);
        counter.innerText = +counter.innerText <= 1 ? counter.innerText : +counter.innerText - 1;
        counter.setAttribute('data-count', counter.innerText);
    }

    function handleCounterPlusClcik() {
        var dataId = this.getAttribute('data-id');
        var counter = document.querySelector(`.counter__value[data-id="${dataId}"]`);
        counter.innerText = +counter.innerText + 1;
        counter.setAttribute('data-count', counter.innerText);
    }

    function handleOrderListCunterMinusClick() {
        var dataId = this.getAttribute('data-id');
        var count = +document.querySelector(`.orders__list .counter__value[data-id='${dataId}']`).getAttribute('data-count');

        if (count > 1) {
            var dataPrice = +this.getAttribute('data-price');
            var total = document.querySelector('.ordersListTotalAmount');
            var newAmount = fpArithmetic('-', +total.value, dataPrice);
            orderListAmounts.forEach(function (el) {
                el.textContent = `${newAmount}  ֏`;
            });
            total.setAttribute('value', newAmount);
        }
    }

    function handleOrderListCunterPlusClick() {
        var dataPrice = +this.getAttribute('data-price');
        var total = document.querySelector('.ordersListTotalAmount');
        var newAmount = fpArithmetic('+', +total.value, dataPrice);
        orderListAmounts.forEach(function (el) {
            el.textContent = `${newAmount} ֏`;
        });
        total.setAttribute('value', newAmount);
    }

    function ordersListCountersFunctionalCall() {
        orderListCunterPlus = document.querySelectorAll('.orders__list .counter__plus');
        orderListCunterMinus = document.querySelectorAll('.orders__list .counter__minus');
        orderListAmounts = document.querySelectorAll('[data-selector="orders-list-sum"]');
        ordersRemoveItems = document.querySelectorAll('.orders__list__item__delete');
        counterMinus = document.querySelectorAll('.counter__minus');
        counterPlus = document.querySelectorAll('.counter__plus');

        (orderListCunterMinus || []).forEach(function (el) {
            el.removeEventListener('click', handleOrderListCunterMinusClick);
            el.addEventListener('click', handleOrderListCunterMinusClick);
        });

        (ordersRemoveItems || []).forEach(function (el) {
            el.removeEventListener('click', handleOrdersRemoveItemsClick);
            el.addEventListener('click', handleOrdersRemoveItemsClick);
        });

        (orderListCunterPlus || []).forEach(function (el) {
            el.removeEventListener('click', handleOrderListCunterPlusClick);
            el.addEventListener('click', handleOrderListCunterPlusClick);
        });

        (counterMinus || []).forEach(function (el) {
            el.removeEventListener('click', handleCounterMinusClick);
            el.addEventListener('click', handleCounterMinusClick);
        });

        (counterPlus || []).forEach(function (el) {
            el.removeEventListener('click', handleCounterPlusClcik);
            el.addEventListener('click', handleCounterPlusClcik);
        });
    }

    ordersListCountersFunctionalCall();

    function removeClassFromList(elements, className) {
        elements.forEach(function (el) {
            el.classList.remove(className);
        });
    }

    (galleryButtons || []).forEach(function (el) {
        el.addEventListener('click', function () {
            var gallerySwiper = new Swiper("#gallerySwiper", {
                watchSlidesProgress: true,
                slidesPerView: 1,
                spaceBetween: 32,
                initialSlide: +el.getAttribute('data-id'),
                navigation: {
                    prevEl: "#gallerySwiper .galeryModal-button-prev",
                    nextEl: "#gallerySwiper .galeryModal-button-next",
                },
                pagination: {
                    el: '#gallerySwiper .galeryModal-swiper-pagination',
                    type: 'bullets',
                }
            });
        });
    });

    function removeAllIframes() {
        document.querySelectorAll('#videoSwiper .swiper-slide iframe').forEach(function (el) { return el?.remove(); });
    }

    (viedoButtons || []).forEach(function (el) {
        el.addEventListener('click', function () {
            var index = +el.getAttribute('data-id');
            var activeSlide = document.querySelectorAll('#videoSwiper .swiper-slide')[index];
            removeAllIframes();
            activeSlide.innerHTML = activeSlide.getAttribute('data-iframe');
            var videoSwiper = new Swiper("#videoSwiper", {
                watchSlidesProgress: true,
                slidesPerView: 1,
                spaceBetween: 32,
                initialSlide: index,
                navigation: {
                    prevEl: "#videoSwiper .galeryModal-button-prev",
                    nextEl: "#videoSwiper .galeryModal-button-next",
                },
                pagination: {
                    el: '#videoSwiper .galeryModal-swiper-pagination',
                    type: 'bullets',
                }
            });

            videoSwiper.on('slideChange', function () {
                removeAllIframes();
                var activeSlide = document.querySelectorAll('#videoSwiper .swiper-slide')[videoSwiper.activeIndex];
                activeSlide.innerHTML = activeSlide.getAttribute('data-iframe');
            });
        });
    });

    basket.addEventListener('click', function () {
        basket.classList.toggle('basket_active');
        orders.classList.toggle('orders_active');
        ordersShadow.classList.toggle('order__shadow_active');
    });

    ordersClose.addEventListener('click', function () {
        basket.classList.remove('basket_active');
        orders.classList.remove('orders_active');
        ordersShadow.classList.remove('order__shadow_active');
    });

    ordersShadow.addEventListener('click', function () {
        basket.classList.remove('basket_active');
        orders.classList.remove('orders_active');
        ordersShadow.classList.remove('order__shadow_active');
    });

    menu?.addEventListener('click', function () {
        menu.classList.toggle('menu__animation');
        navbar.classList.toggle('mobile-nav_active');
        navbarShadow.classList.toggle('mobile-nav__shadow_active');
    });

    navbarShadow?.addEventListener('click', function () {
        menu.classList.remove('menu__animation');
        navbar.classList.remove('mobile-nav_active');
        navbarShadow.classList.remove('mobile-nav__shadow_active');
    });

    languageItems?.forEach(function (el) {
        el.addEventListener('click', function (e) {
            removeClassFromList(languageItems, 'language-bar__item_active');
            e.target.classList.add('language-bar__item_active');
        });
    });

    backToPrevStepButton?.addEventListener('click', function () {
        var bookingFormSteps = document.querySelectorAll('.booking-form__steps__step');
        bookingFormSteps[1].classList.remove('booking-form__steps__step_active');
        bookingFormSteps[0].classList.add('booking-form__steps__step_active');
    });

    days?.forEach(function (day) {
        day.addEventListener('click', function () {
            var selectedIndex = Number(day.getAttribute('data-day'));
            removeClassFromList(days, 'tour-page__right-block__days__list__item_active');
            removeClassFromList(daysContents, 'tour-page__right-block__days-content__list__item_active');
            days[selectedIndex].classList.add('tour-page__right-block__days__list__item_active');
            daysContents[selectedIndex].classList.add('tour-page__right-block__days-content__list__item_active');
        });
    });

    function handleClearBookFormCheckLists() {
        var counters = document.querySelectorAll('.booking-form .counter__value');
        var amount = document.querySelector('.booking-form .booking-form__amount__price');
        var carPrice = document.querySelector('.booking-modal .car__content__top__price').getAttribute('data-car-price');
        amount.innerHTML = `${carPrice} ֏`;
        amount.setAttribute('data-car-price', carPrice);
        amount.setAttribute('data-days', 1);
        document.querySelector('.booking-modal .startDate').value = '';
        document.querySelector('.booking-modal .endDate').value = '';

        bookingFormCheckboxes.forEach(function (el) {
            el.checked = false;
        });
        counters.forEach(function (el) {
            el.setAttribute('data-count', 1);
            el.innerHTML = 1;
        });
    }

    function handleResetBookingForm() {
        handleClearBookFormCheckLists();
        document.querySelector('.booking-modal .startDate')?.classList.remove('is-invalid');
        document.querySelector('.booking-modal .endDate')?.classList.remove('is-invalid');
    }

    clearAllButton?.addEventListener('click', handleClearBookFormCheckLists);

    closeBookingModal?.addEventListener('click', handleResetBookingForm);

    bookingModal?.addEventListener('click', function (e) {
        if (e.target.classList.contains('booking-modal')) {
            handleResetBookingForm();
        }
    });

    (bookingFormCheckboxes || []).forEach(function (el) {
        el.addEventListener('change', function (e) {
            var checked = e.target.checked;
            var price = +e.target.getAttribute('data-price');
            var amount = document.querySelector('.booking-form__amount__price');
            var newPrice = checked ? +amount.getAttribute('data-car-price') + (price) : +amount.getAttribute('data-car-price') - (price);

            amount.innerHTML = `${newPrice * +amount.getAttribute('data-days')} ֏`;
            amount.setAttribute('data-car-price', newPrice);
        });
    });

    (carPageSwipeImages || []).forEach(function (el) {
        el.addEventListener('click', function (e) {
            carPageBigImage.setAttribute('src', e.target.src);
        });
    });

    var startDates = document.querySelectorAll('.startDate');
    var endDate = document.querySelectorAll('.endDate');
    var equipmentButtons = document.querySelectorAll('.equipment__list__item__form__botom__button');

    (startDates || []).forEach(function (el) {
        $(el)?.datepicker({
            dateFormat: "yy-mm-dd",
            minDate: new Date(),
            onSelect: function (start) {
                var amount = document.querySelector('.booking-form__amount__price');
                var end = document.querySelector('.booking-modal .endDate').value;
                var difference = Math.abs((new Date(end) - new Date(start)) / 86400000);
                if (difference) {
                    var newPrice = +amount.getAttribute('data-car-price') * difference;
                    amount.innerHTML = `${newPrice} ֏`;
                    amount.setAttribute('data-days', difference);
                }
            },
            beforeShowDay: function (date) {
                var formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                var disabledDays = el.getAttribute('data-disabled-days').split(", ");
                return disabledDays.includes(formatedDate) ? [false, '.disabled'] : [true, ".enabled"];
            }
        });
    });

    (endDate || []).forEach(function (el) {
        $(el)?.datepicker({
            dateFormat: "yy-mm-dd",
            minDate: new Date(),
            onSelect: function (end) {
                var amount = document.querySelector('.booking-form__amount__price');
                var start = document.querySelector('.booking-modal .startDate').value;
                var difference = Math.abs((new Date(end) - new Date(start)) / 86400000);
                if (difference) {
                    var newPrice = +amount.getAttribute('data-car-price') * difference;
                    amount.innerHTML = `${newPrice} ֏`;
                    amount.setAttribute('data-days', difference);
                }
            },
            beforeShowDay: function (date) {
                var formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                var disabledDays = el.getAttribute('data-disabled-days').split(", ");
                return disabledDays.includes(formatedDate) ? [false, '.disabled'] : [true, ".enabled"];
            }
        });
    });

    (equipmentButtons || []).forEach(function (el) {
        el.addEventListener('click', function (e) {
            var parent = $(el).parents('.equipment__list__item')[0];
            var price = el.getAttribute('data-price');
            var title = parent.querySelector('.equipment__list__item__content__subtitle').innerText;
            var image = parent.querySelector('.equipment__list__item__image').getAttribute('src');
            var count = parent.querySelector('.equipment__list__item__form__botom__select').value;
            var id = Math.round(Math.random() * 1000000000);
            var orderItem = document.createElement('div');
            orderItem.classList.add('orders__list__item');

            var start = parent.querySelector('.startDate');
            var end = parent.querySelector('.endDate');
            var startDate = new Date(start.value).toDateString();
            var endDate = new Date(end.value).toDateString();
            var dayDifference = (new Date(endDate) - new Date(startDate)) / 86400000;
            var difference = dayDifference === 0 ? 1 : dayDifference;

            if (!start.value || !end.value || difference < 0) {
                start.classList.add('is-invalid');
                end.classList.add('is-invalid');
                return;
            } else {
                start.classList.remove('is-invalid');
                end.classList.remove('is-invalid');
            }

            orderItem.innerHTML = `
                <img src="${image}" class="orders__list__item__image">
                <div class="orders__list__item__info">
                    <h3 class="orders__list__item__info__title">${title}</h3>
                    <p class="orders__list__item__info__description">
                        ${title} ( ${startDate} - ${endDate} )
                    </p>
                </div>
                <div class="orders__list__item__price__info">
                    <p class="orders__list__item__price__info__period">${difference} Day</p>
                    <p class="orders__list__item__price__info__price">${price * difference} ֏</p>
                </div>
                <div class="d-flex">
                    <div class="counter">
                    <button type="button" class="counter__minus" data-id="${id}" data-price="${price * difference}">
                        <img src="./assets/icons/minus.svg">
                    </button>
                    <span class="counter__value" data-id="${id}">${count}</span>
                    <button type="button" class="counter__plus" data-id="${id}" data-price="${price * difference}">
                        <img src="./assets/icons/plus.svg">
                    </button>
                    </div>
                    <button class="orders__list__item__delete">
                    <img src="./assets/icons/Delete.svg" alt="Delete">
                    </button>
                </div>
            `;
            document.querySelector('.orders__list').prepend(orderItem);

            var orderListAmounts = document.querySelectorAll('[data-selector="orders-list-sum"]');
            var total = document.querySelector('.ordersListTotalAmount');
            var newPrice = price * count * difference;
            var newAmount = fpArithmetic('+', +total.value, newPrice);
            orderListAmounts.forEach(function (el) {
                el.textContent = `${newAmount} ֏`;
            });
            total.setAttribute('value', newAmount);
            ordersListCountersFunctionalCall();
        });
    });


    var bookSubmitButton = document.querySelector('.booking-form__add-to-cart');

    function onBookSubmit() {
        var parent = $(this).parents('.booking-modal')[0];
        var price = parent.querySelector('.booking-form__amount__price').getAttribute('data-car-price');
        var title = parent.querySelector('.car__content__top__title').innerText;
        var image = parent.querySelector('.booking-modal__body__top__image').getAttribute('src');
        var count = 1;
        var id = Math.round(Math.random() * 1000000000);
        var checkedFeauters = ``;
        parent.querySelectorAll('.booking-form__checklist__item').forEach(function (el) {
            var checked = el.querySelector('.form-check-input').checked;
            if (checked) {
                var label = el.querySelector('.form-check-label').innerText;
                checkedFeauters = `${checkedFeauters}<p class="orders__list__item__info__description">* ${label}</p>`;
            }
        });
        var start = parent.querySelector('.startDate');
        var end = parent.querySelector('.endDate');
        var startDate = new Date(start.value).toDateString();
        var endDate = new Date(end.value).toDateString();
        var dayDifference = (new Date(endDate) - new Date(startDate)) / 86400000;
        var difference = dayDifference === 0 ? 1 : dayDifference;

        if (!start.value || !end.value || difference < 0) {
            start.classList.add('is-invalid');
            end.classList.add('is-invalid');
            return;
        } else {
            start.classList.remove('is-invalid');
            end.classList.remove('is-invalid');
        }

        var orderItem = document.createElement('div');
        orderItem.classList.add('orders__list__item');

        orderItem.innerHTML = `
                <img src="${image}" class="orders__list__item__image">
                <div class="orders__list__item__info">
                    <h3 class="orders__list__item__info__title">${title}</h3>
                    <p class="orders__list__item__info__description">
                        ${title} ( ${startDate} - ${endDate} )
                    </p>
                    ${checkedFeauters}
                </div>
                <div class="orders__list__item__price__info">
                    <p class="orders__list__item__price__info__period">${difference} Day</p>
                    <p class="orders__list__item__price__info__price">${price * difference} ֏</p>
                </div>
                <div class="d-flex">
                    <div class="counter">
                    <button type="button" class="counter__minus" data-id="${id}" data-price="${price * difference}">
                        <img src="./assets/icons/minus.svg">
                    </button>
                    <span class="counter__value" data-id="${id}">${count}</span>
                    <button type="button" class="counter__plus" data-id="${id}" data-price="${price * difference}">
                        <img src="./assets/icons/plus.svg">
                    </button>
                    </div>
                    <button class="orders__list__item__delete">
                    <img src="./assets/icons/Delete.svg" alt="Delete">
                    </button>
                </div>
            `;
        document.querySelector('.orders__list').prepend(orderItem);

        var orderListAmounts = document.querySelectorAll('[data-selector="orders-list-sum"]');
        var total = document.querySelector('.ordersListTotalAmount');
        var newPrice = price * count * difference;
        var newAmount = fpArithmetic('+', +total.value, newPrice);
        orderListAmounts.forEach(function (el) {
            el.textContent = `${newAmount} ֏`;
        });
        total.setAttribute('value', newAmount);
        ordersListCountersFunctionalCall();
        handleClearBookFormCheckLists();
        $(parent).modal('toggle');
    }

    bookSubmitButton?.addEventListener('click', onBookSubmit);
});