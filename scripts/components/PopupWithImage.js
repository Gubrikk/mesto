import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupText = document.querySelector('.popup__preview-text');
        this._popupImage = document.querySelector('.popup__preview-image');
    };
  
    open(name, link) {
        super.open();
        this._popupText.textContent = name;
        this._popupImage.src = link;
    };
}