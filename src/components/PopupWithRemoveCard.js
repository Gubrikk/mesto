import Popup from "./Popup.js";

export default class PopupWithRemoveCard extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__container');
    }

    setEventListeners() {
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._cardId);
        });
        super.setEventListeners();
    }

    open (data) {
        super.open();
        this._cardId = data;
    }

    close() {
        super.close();
        this._form.reset();
    }

}