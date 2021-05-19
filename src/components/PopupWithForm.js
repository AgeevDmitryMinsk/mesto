import Popup from './Popup.js'

export default class PopupWithForm extends Popup{

    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues () {
        this._inputValues = {}
        this._form.querySelectorAll('.popup__input')
            .forEach ((inputElement) => {
                this._inputValues[inputElement.name] = inputElement.value
            });

        return this._inputValues;
    }

    setEventListeners () {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault ();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
    }

    close () {
        this._form.reset();
        super.close();
    }
}