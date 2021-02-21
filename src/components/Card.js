export default class Card {
    constructor(data, cardSelector, {handleCardClick, handleDeleteCard, handleLikeClick, userData}) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
        this._handleLikeClick = handleLikeClick;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
        this._cardLike = this._element.querySelector('.element__info-like');
        this._userData = userData;
        this._data = data;
       }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }
    
    _setDeleteIcon() {
        if (this._userData._id !== this._data.owner._id) {
          this._element.querySelector('.element__trash').remove();
        }
    }
    
    isCardLiked() {
        const userId = (item) => item._id == this._userData._id;
        const isLiked = this._data.likes.some(userId);
    
        return isLiked;
    }

    setCardLiked(data) {
        this._data = data;
        this._element.querySelector('.element__info-like-counter').innerText = this._data.likes.length;
    
        if (this.isCardLiked()) {
            this._cardLike.classList.add('element__info-like_active');
        } else {
            this._cardLike.classList.remove('element__info-like_active');
        }
    }   

    _setEventListeners() {
        this._cardLike.addEventListener('click', () => {
        this._handleLikeClick(this._data._id);
    });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
        this._handleDeleteCard(this._element, this._data._id);
    });
        this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
    });
    }
    
    generateCard() {
        this._cardImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__name').innerText = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._setEventListeners();
        this._setDeleteIcon();
        this.setCardLiked(this._data);
        return this._element;
    }

}