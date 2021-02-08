export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeOnOverlayClick = this._closeOnOverlayClick.bind(this);
    };

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.body.addEventListener('keydown', this._handleEscClose);
        document.body.addEventListener('click', this._closeOnOverlayClick);
    };

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.body.removeEventListener('keydown', this._handleEscClose);
        document.body.removeEventListener('click', this._closeOnOverlayClick);
    };

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
        this.close();
        }
    };

    setEventListeners() {
        const closeButton = this._popupSelector.querySelector('.popup__close-icon');
        closeButton.addEventListener('click', () => {
        this.close();
        })
    };

    _closeOnOverlayClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
        this.close();
        }
    };
}