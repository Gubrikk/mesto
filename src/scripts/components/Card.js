export default class Card {
    constructor(data, cardSelector, {handleCardClick}) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__info-name').innerText = this._name;
        this._setEventListeners();
        return this._element;
    }
    
    _setEventListeners() {
        this._element.querySelector('.element__info-like').addEventListener('click', () => {
        this._handleLikeClick();
    });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
        this._handleDeleteCard();
    });
        this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
    });
    }
    
    _handleLikeClick() {
        this._element.querySelector('.element__info-like').classList.toggle('element__info-like_active');
    }
    
    _handleDeleteCard() {
        this._element.closest('.element').remove();
    }
    
}