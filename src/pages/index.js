import './index.css'
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {initialCards} from '../components/initialCards.js';

const settings = {
    formSelector: '.popup__container',
    inputSelector: '.popup__field',
    buttonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__field_state_invalid',
};

const cardsList = document.querySelector('.elements')
const buttonOpenEditProfile = document.querySelector ('.profile__edit-button')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const nameInput = document.querySelector('.popup__field-name')
const jobInput = document.querySelector('.popup__field-job')
const buttonOpenAddCard = document.querySelector ('.profile__add-button')
const profileForm = '.popup_profile-edit';
const addCardForm = '.popup_add-card';
const imageForm = '.popup_image';

const user = new UserInfo({
    profileName,
    profileJob
});

const popupImage = new PopupWithImage(imageForm);
const formEditProfileValidate = new FormValidator(settings, '.popup__container_profile-edit');
const formNewPlaceValidate = new FormValidator(settings, '.popup__container_new-place');

const formEditProfileClass = new PopupWithForm({
    popupSelector: profileForm,
    handleSubmitForm: (input) => {
        user.setUserInfo(input['name'], input['job']);
        formEditProfileClass.close();
    }
});

const formAddCardClass = new PopupWithForm({
    popupSelector: addCardForm,
    handleSubmitForm: (input) => {
        const cardData = {
            name: input['new-place'],
            link: input['link-image']
        }
        
        const cardElement = createCard(cardData)
        cardList.addNewItem(cardElement);
  
        formAddCardClass.close();
    }
});

const createCard = (item) => {
    const cardInstance = new Card(item, '.template', {

        handleCardClick: () => {
        popupImage.open(item.name, item.link);
      }
    });
  
    const card = cardInstance.generateCard();
    return card;
  };

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item)
        cardList.addItem(cardElement);
    }
},  cardsList
);

buttonOpenEditProfile.addEventListener('click', () => {
    formEditProfileClass.open();
    nameInput.value = user.getUserInfo().profileName;
    jobInput.value = user.getUserInfo().profileJob;
});

buttonOpenAddCard.addEventListener('click', () => {
    formAddCardClass.open();
    formNewPlaceValidate.toggleButtonState();
});

formEditProfileValidate.enableValidation();
formNewPlaceValidate.enableValidation();

formAddCardClass.setEventListeners();
formEditProfileClass.setEventListeners();
popupImage.setEventListeners();

cardList.renderItems();
