export default class Card {
    constructor(data, cardSelector, {handleCardClick, userData}) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
        this._cardLike = this._element.querySelector('.element__info-like');
        this._data = data;
        this._userData = userData;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }
    
    _handleLikeClick() {
        this._cardLike.classList.toggle('element__info-like_active');
    }
    
    _handleDeleteCard() {
        this._element.closest('.element').remove();
    }

    _setEventListeners() {
        this._cardLike.addEventListener('click', () => {
        this._handleLikeClick();
    });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
        this._handleDeleteCard();
    });
        this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
    });
    }
    
    generateCard() {
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__info-name').innerText = this._name;
        this._setEventListeners();
        return this._element;
    }

}