// Конфигурация для intlTelInput
const intlTelInputConfig = {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    preferredCountries: ['ru'],
    separateDialCode: false,
    initialCountry: "ru",
    formatOnDisplay: true,
};

// Инициализация intlTelInput для headerPhone
const headerPhone = document.getElementById('headerPhone');
const intlTelInputHeader = window.intlTelInput(headerPhone, intlTelInputConfig);
headerPhone.value = `+${intlTelInputHeader.getSelectedCountryData().dialCode}`;


const contactFormPhone = document.getElementById('ContactFormPhone');
const intlTelInputContact = window.intlTelInput(contactFormPhone, intlTelInputConfig);
contactFormPhone.value = `+${intlTelInputContact.getSelectedCountryData().dialCode}`;

// Функция для обработки отправки формы
function handleFormSubmit(form, intlTelInputInstance) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const phoneNumber = intlTelInputInstance.getNumber();

        if (intlTelInputInstance.isValidNumber()) {
            form.querySelector('.phone-error').style.display = "none";
            if (form.id === 'formHeader') {
                alert("\nТелефон: " + phoneNumber);
            } else if (form.id === 'contactForm') {
                alert("Имя: " + document.getElementById("ContactFormName").value + "\nEmail: " + document.getElementById("ContactFormEmail").value + "\nТелефон: " + phoneNumber);
            }
        } else {
            form.querySelector('.phone-error').style.display = "block";
        }
    });
}

// Привязка обработчиков событий к формам
handleFormSubmit(document.getElementById('formHeader'), intlTelInputHeader);
handleFormSubmit(document.getElementById('contactForm'), intlTelInputContact);



// Открытие модального окна
const openModalButtons = document.querySelectorAll('.open-modal-btn');
const modal = document.getElementById('modalForm');
const closeModalButton = modal.querySelector('.close-modal');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.remove('hidden');
       
    });
});


closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden')
    }
});

// Инициализация intlTelInput для модальной формы
const modalPhoneInput = document.getElementById('ModalContactFormPhone');
const intlTelInputModal = window.intlTelInput(modalPhoneInput, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    preferredCountries: ['ru'],
    separateDialCode: false,
    initialCountry: "ru",
    formatOnDisplay: true,
});
modalPhoneInput.value = `+${intlTelInputModal.getSelectedCountryData().dialCode}`;

// Обработка отправки модальной формы
const modalForm = document.getElementById('modalContactForm');
modalForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const phoneNumber = intlTelInputModal.getNumber();

    if (intlTelInputModal.isValidNumber()) {
        modalForm.querySelector('.phone-error').style.display = 'none';
        alert(
            "Имя: " + document.getElementById("ModalContactFormName").value +
            "\nEmail: " + document.getElementById("ModalContactFormEmail").value +
            "\nТелефон: " + phoneNumber
        );
        modal.classList.add('hidden') 
    } else {
        modalForm.querySelector('.phone-error').style.display = 'block';
    }
});