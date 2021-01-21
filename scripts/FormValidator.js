export default class FormValidator {
    constructor(settings, formElement) {
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._buttonSelector = settings.buttonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._formElement = formElement;
        this._formList = document.querySelector(this._formElement);
        this._inputList = Array.from(this._formList.querySelectorAll(this._inputSelector));
    }

    // Отображение ошибки в input.
    
    _showInputError(inputElement) {
        const errorElement = document.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }
    
    // Скрытие ошибки в input.

    _hideInputError(inputElement) {
        const errorElement = document.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    }

    // Проверка формы на валидность.

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } 
        else {
            this._hideInputError(inputElement);
        }
    }

    // Проверка валидации инпута

    _hasInvalidInput(_inputList) {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    // Переключение кнопки submit.

    toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        } 
        else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }

    // Обработчик полей ввода

    _setEventListeners() {
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', (evt) => {
                this._checkInputValidity(evt.target);
                this.toggleButtonState();
            })
        })
        
        this.toggleButtonState();
    }

    enableValidation() {
        this._formList.addEventListener('submit', (evt) => {
            evt.preventDefault();
                
            })

        this._buttonElement = this._formList.querySelector(this._buttonSelector);
        this._setEventListeners();
        
        }
}