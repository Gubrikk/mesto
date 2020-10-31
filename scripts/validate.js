// Включает кнопку submit.

function enableSubmitButton() {
    buttonElement.classList.remove(inactiveButtonClass);
};

// Отклюает кнопку submit.

function disableSubmitButton() {
    buttonElement.classList.add(inactiveButtonClass);
};

// Отображение ошибки в input.

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
};
  
// Скрытие ошибки в input.

const hideInputError = (formElement, inputElement, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
};

// Проверка формы на валидность.

const checkInputValidity = (formElement, inputElement, inputErrorClass) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass);
    }
};

// Проверка валидации импута

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

// Переключение кнопки submit.

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    }
};

// Обработчик полей ввода

const setEventListeners = (formElement, buttonElement, {inputSelector, inactiveButtonClass, inputErrorClass}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            checkInputValidity(formElement, inputElement, inputErrorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
    
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
}

const enableValidation = ({formSelector, buttonSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
            
        });
    
    const buttonElement = formElement.querySelector(buttonSelector);
    setEventListeners(formElement, buttonElement, rest);
    
    });
}

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__field',
    buttonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__field_state_invalid',
})