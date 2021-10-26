function getFormatedDate(date) {
    const year = date.getFullYear();
    const month = +date.getMonth() + 1;
    const day = +date.getDate();
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
        return true;
    };
    return 'The wrong email format'
};

function validateRequired(text) {
    if (Boolean(text) && Boolean(text.trim())) {
        return true
    }
    return 'This field is required to fill'
}

function validatePhoneNumber(phoneNumber) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if (re.test(String(phoneNumber).toLowerCase())) {
        return true
    }
    return 'Please fill valid phone number'
}

function validateStartDate(startDate) {
    const today = new Date();
    const selectedDate = new Date(startDate);
    if (getFormatedDate(selectedDate) === getFormatedDate(today) || selectedDate - today >= 0) {
        return true
    }
    return `The minimum value of start day should be ${getFormatedDate(today)}`
}

function validateEndDate(endDate, startDate) {
    if (!startDate) {
        return 'Select the start date'
    }
    const selectedEndDate = new Date(endDate);
    const selectedStartDate = new Date(startDate);
    if (getFormatedDate(selectedEndDate) === getFormatedDate(selectedStartDate) && selectedEndDate - selectedStartDate >= 0) {
        return true
    }
    return `The minimum value of end day should be more then start day`
}

const contactsFormValidators = {
    name: {
        required: (text) => validateRequired(text),
    },
    email: {
        required: (text) => validateRequired(text),
        email: (email) => validateEmail(email),
    },
    note: {
        required: (text) => validateRequired(text),
    }
};

const bookingFormValidators = {
    name: {
        required: (text) => validateRequired(text),
    },
    phone: {
        required: (text) => validateRequired(text),
        phone: (phoneNumber) => validatePhoneNumber(phoneNumber)
    },
    city: {
        required: (text) => validateRequired(text),
    },
    // startDate: {
    //     required: (text) => validateRequired(text),
    //     validDate: (date) => validateStartDate(date)
    // },
    // endDate: {
    //     required: (text) => validateRequired(text),
    //     validDate: (start, end) => validateEndDate(start, end)
    // },
    email: {
        required: (text) => validateRequired(text),
        email: (email) => validateEmail(email),
    },
    note: {
        required: (text) => validateRequired(text),
    }
};

const validateForm = (formProps, validationSchema, formSelector, event) => {
    let isFormInvalid;
    Object.keys(formProps).forEach(el => {
        Object.values(validationSchema[el]).some((func, i, validators) => {
            const validationMessage = el === 'endDate' ? func(formProps[el], formProps.startDate) : func(formProps[el])
            const isInvalid = validationMessage !== true;
            const selectedField = document.querySelector(`${formSelector} [name="${el}"]`);
            const label = document.querySelector(`${formSelector} [for="${el}"`)
            const errorField = document.querySelector(`.${el}-error-text`);
            if (isInvalid) {
                selectedField?.classList.add('is-invalid');
                label?.classList.add('text-danger');
                if (!errorField) {
                    let p = document.createElement("p");
                    p.classList.add('text-danger', `${el}-error-text`, 'form-error-message');
                    p.textContent = validationMessage;
                    selectedField.after(p);
                } else {
                    errorField.textContent = validationMessage
                }
            } else if (!isInvalid && i === validators.length - 1) {
                selectedField?.classList.remove('is-invalid');
                label?.classList.remove('text-danger');
                if (errorField) {
                    errorField.remove();
                }
            }
            isFormInvalid = isInvalid;
            return isInvalid;
        })
    });

    if (!isFormInvalid) {
        event?.target?.submit();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contactsForm = document.querySelector('.contact-us__form');
    const bookingForm = document.querySelector('.book-form-page');

    contactsForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        validateForm(formProps, contactsFormValidators, '.contact-us__form', e)
    });

    bookingForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        validateForm(formProps, bookingFormValidators, '.book-form-page', e)
    });
});