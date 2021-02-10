export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeOnOverlayClick = this._closeOnOverlayClick.bind(this);
    };

    // Открытие модального окна
    
    open() {
        this._popup.classList.add('popup_opened');
        document.body.addEventListener('keydown', this._handleEscClose);
        document.body.addEventListener('click', this._closeOnOverlayClick);
    };

    // Закрытие модального окна

    close() {
        this._popup.classList.remove('popup_opened');
        document.body.removeEventListener('keydown', this._handleEscClose);
        document.body.removeEventListener('click', this._closeOnOverlayClick);
    };

    // Закрытие при нажатии Esc

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
        this.close();
        }
    };

    // Слушатели на кнопку закрытия формы

    setEventListeners() {
        const closeButton = this._popup.querySelector('.popup__close-icon');
        closeButton.addEventListener('click', () => {
        this.close();
        })
    };

    // Закрытие при клике вне формы

    _closeOnOverlayClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
        this.close();
        }
    };
}