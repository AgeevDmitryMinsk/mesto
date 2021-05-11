import Popup from './Popup.js'

export default class PopupWithForm extends Popup{// PopupWithForm - наследует от Popup
    //Кроме селектора попапа принимает в конструктор колбэк сабмита формы.

    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popup.querySelector('.popup__form');

        this._inputList.inputErrorClass = this._popup.querySelectorAll('.popup__input-error'); //

    }

    _getInputValues () {
        this._inputValues = {}
        this._inputList.querySelectorAll('.popup__input')
            .forEach ((inputElement) => {
                this._inputValues[inputElement.name] = inputElement.value
            });

        return this._inputValues;
    }

    //Перезаписывает родительский метод setEventListeners.
    //Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия,
    //но и добавлять обработчик сабмита формы.
    setEventListeners () {
        super.setEventListeners();
        this._inputList.addEventListener('submit', (evt) => {
            evt.preventDefault ();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
    }

    //Перезаписывает родительский метод close,
    //так как при закрытии попапа форма должна ещё и сбрасываться.

    close () {
        this._inputList.reset();
        this._inputList.inputErrorClass
            .forEach ((inputError) => {
                inputError.textContent = '';
            });
        super.close();
    }
}