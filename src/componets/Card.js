export default class Card {
    constructor(cardData, cardSelector, functionOpenPopup) {
        this._name = cardData.name;
        this._image = cardData.link;
        this._cardSelector = cardSelector;
        this._openPopupPreview = functionOpenPopup; //пробрасываю колбэк открытия карточки в класс, а не создаю логику открытия внутри класса, тем самым дублируя код! - КРУТО!
    }
  
    _getTemplateCard() {
        return document
            .querySelector(this._cardSelector) // найдём в document template-элемент с классом this._cardSelector = `.card`,
            .content // извлечём его содержимое,
            .cloneNode(true); //клонируем его и вернём

    }
  
    getCard() {
      this._card = this._getTemplateCard();
      this._buttonLikeCard = this._card.querySelector('.element__button-like');
      this._buttonDeleteCard = this._card.querySelector('.element__remove-button');
      this._previewImageCard = this._card.querySelector('.element__image');
      this._previewImageCard.src = this._image;
      this._previewImageCard.alt = this._name;
      this._card.querySelector('.element__title').textContent = this._name;
      this._setEventListeners();
      
      return this._card;
    }
  
    _createLike() {
      this._buttonLikeCard.classList.toggle('element__button-like_active');
    }
  
    _deleteCard() {
      this._buttonDeleteCard.parentElement.parentElement.remove(); // сделал подряд 2 parentElement.parentElement по рекомеенд stackoverflow
    }
  
    _setEventListeners() {
      this._buttonLikeCard.addEventListener('click', () => {this._createLike()});
      this._buttonDeleteCard.addEventListener('click', () => {this._deleteCard()});
      this._previewImageCard.addEventListener('click', this._openPopupPreview);
    }
  }