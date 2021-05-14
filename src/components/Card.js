export default class Card {

    constructor( { data, handleCardClick }, cardSelector) {
        this._name = data.name;
        this._image = data.link;
        this._imageAlt = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        return document.querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    _likeButtonClicked() {
        this._element
            .querySelector('.element__button-like')
            .classList
            .toggle('element__button-like_active');
    }

    _deleteButtonClicked() {
        this._element.remove();
        this._element = null;
    }


    _setEventListeners() {
        this._element.querySelector('.element__button-like').addEventListener('click', () => {
            this._likeButtonClicked();
        });

        this._element.querySelector('.element__remove-button').addEventListener('click', () => {
            this._deleteButtonClicked();
        });

        this._element.querySelector('.element__image').addEventListener('click', () => { this._handleCardClick();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._elementImage = this._element.querySelector('.element__image')
        this._elementImage.src = this._image;
        this._elementImage.alt = this._imageAlt;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }
}