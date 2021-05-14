export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this) // в конструкторе нужно создать функцию с привязанным контекстом
        //this._closePopupByOverlayClick = this._closePopupByOverlayClick.bind(this) // и далее использовать ее при добавлении и удалении слушателя
        //Михаил Зятьков:  привязывать this через bind нужно раньше, не в самом callback, а в конструкторе нужно создать функцию с
        // привязанным контекстом (можно вот так this._handleEscClose = this._handleEscClose.bind(this) ) и далее использовать ее при добавлении и удалении слушателя
    }
    open() {
        this._popup.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClose)
    }

    close() {
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose (evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }


    setEventListeners() {
        this._popup.querySelector('.popup__button-close').addEventListener('click', () =>{
            this.close()
        });

        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_active')) {
                this.close()
            }
        })
    }
}