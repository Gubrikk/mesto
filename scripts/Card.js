import {openPhotoPopup} from './scripts.js';

export default class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__info-name').innerText = this._name;
        this._setEventListeners();

        return this._element;
    }

    _handleLikeClick() {
        this._element.querySelector('.element__info-like').classList.toggle('element__info-like_active');
    }

    _handleDeleteCard() {
        this._element.closest('.element').remove();
    }

    _setEventListeners() {
        this._element.querySelector('.element__info-like').addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._handleDeleteCard();
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            openPhotoPopup(this._link, this._name);
        });
    }
}