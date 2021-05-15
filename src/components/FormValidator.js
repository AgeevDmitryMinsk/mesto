export default class FormValidator {
    constructor(validationConfig, validationForm) {
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._formElement = validationForm;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _showInputError() {
        this._inputElement.classList.add(this._inputErrorClass);
        this._errorMessege.textContent = this._inputElement.validationMessage;
        this._errorMessege.classList.add(this._errorClass);
    }

    _hideInputError() {
        this._inputElement.classList.remove(this._inputErrorClass);
        this._errorMessege.classList.remove(this._errorClass);
        this._errorMessege.textContent = '';
    }


    deleteErrorMessage(formItem) {
        this._formItem = formItem
        const errorList = Array.from(this._formItem.querySelectorAll(`.${this._inputErrorClass}`));
        errorList.forEach((errorItem) => {
            this._hideInputError(this._formItem, errorItem, this._inputErrorClass, this._errorClass);
        });
    }

    _checkInputValidity(inputElement) {
        this._inputElement = inputElement;
        this._errorMessege = this._formElement.querySelector(`#${this._inputElement.id}-error`);

        if (!inputElement.validity.valid) {
            this._showInputError();
        } else {
            this._hideInputError();
        }
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.deactivateButton();
        } else {
            this._activateButton();
        }
    }

    _activateButton() {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false;
    }

    deactivateButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => !inputElement.validity.valid);
    }

    enableValidation() {
        this._setEventListeners();
    }

}

