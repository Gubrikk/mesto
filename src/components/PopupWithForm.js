import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__container');
        this._submitButton = this._form.querySelector('.popup__submit-button');
    };

    _getInputValues() {
        this._inputValues = {};
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__field'));
        this._inputs.forEach(input => this._inputValues[input.name] = input.value);
        return this._inputValues;
    };
  
    setEventListeners() {
        this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleSubmitForm(this._getInputValues());
        });
        
    super.setEventListeners();
    };
  
    close() {
        super.close();
        this._form.reset();
    };

    loading(loading, defaultButtonText) {
        if (loading) {
          this._submitButton.textContent = 'Сохранение...';
        } else {
          this._submitButton.textContent = defaultButtonText;
        }
      }
    
}