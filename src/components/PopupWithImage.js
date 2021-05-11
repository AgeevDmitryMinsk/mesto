import Popup from './Popup.js';

export default class PopupWithImage extends Popup{// PopupWithImage - наследует от Popup
    //Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage
    // нужно вставлять в попап картинку и атрибут src изображения и подпись к картинке.
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({link, name}) {
        this._popup.querySelector('.popup__image').src = link;
        this._popup.querySelector('.popup__image').alt = name;
        this._popup.querySelector('.popup__caption').textContent = name;
        super.open();
    }

}

