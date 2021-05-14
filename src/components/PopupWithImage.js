import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({link, name}) {
        this._popupIimage = this._popup.querySelector('.popup__image')
        this._popupIimage.src = link;
        this._popupIimage.alt = name;
        this._popup.querySelector('.popup__caption').textContent = name;
        super.open();
    }
}

