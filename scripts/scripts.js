import Card from './Card.js';
import FormValidator from './FormValidator.js'

const settings = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  buttonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__field_state_invalid',
};

const formEditProfileValidate = new FormValidator(settings, '.popup__container_profile-edit');
const formNewPlaceValidate = new FormValidator(settings, '.popup__container_new-place');

const cardsList = document.querySelector('.elements')
const buttonOpenEditProfile = document.querySelector ('.profile__edit-button')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const profileForm = document.querySelector('.popup_profile-edit')
const nameInput = profileForm.querySelector('.popup__field-name')
const jobInput = profileForm.querySelector('.popup__field-job')
const buttonCloseEditProfile = profileForm.querySelector ('.popup__close-icon_profile-edit')

// Определение переменных popupAddCard

const buttonOpenAddCard = document.querySelector ('.profile__add-button')
const addCardForm = document.querySelector('.popup_add-card')
const placeInput = addCardForm.querySelector('.popup__field_new-place')
const imageInput = addCardForm.querySelector('.popup__field_link-image')
const buttonCloseAddCard = addCardForm.querySelector ('.popup__close-icon_new-place')

// Определение переменных popupImage 

const imageForm = document.querySelector('.popup_image')
const imagePopup = document.querySelector('.popup__preview-image')
const buttonCloseImagePopup = imageForm.querySelector('.popup__close-icon_image')
const popupPreviewText = document.querySelector('.popup__preview-text')

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]

// Функция открытия "popup" формы.

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

// Функция открытия "popup" формы для popup_image

export const openPhotoPopup = (link, name) => {
  imagePopup.src = link;
  popupPreviewText.innerText = name;
  openPopup(imageForm);
}

// Функция закрытия "popup" формы.

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

// Закрытие popup'a при клике вне формы

const onClickPopupBackgroundListener = (event, popup) => {
  if(event.target !== event.currentTarget) {
      return
  }
  closePopup(event.currentTarget)
}

// Проверка на закрытие popup'a при клике на ESC

const closePopupOnEsc = (evt) => {
  const activePopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(activePopup);
  };
};


// Сохранение новых значений при нажатии на submit

function formEditProfileSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(profileForm)
}

// Добавление карточки при нажатии на submit.

const formAddCardSubmitHandler = (evt) => {
  evt.preventDefault();
    const card = new Card({
      name: placeInput.value,
      link: imageInput.value
    }, '.template');
    
    const cardElement = card.generateCard();
    cardsList.prepend(cardElement);
    closePopup(addCardForm);
}



// Добавление карточки в начало списка в cardsList

const renderCards = () => {
  initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();
    cardsList.append(cardElement);
  });
}

// Сбрасывание значений в input (addCardForm)

const openPopupNewPlace = () => {

  placeInput.value = '';
  imageInput.value = '';
  
  openPopup(addCardForm)
}

// Присвоение существующих значений в input (profileForm)

const openPopupEditProfile = () => {
  
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(profileForm)
}


// Вызов нужной popup формы.

buttonOpenEditProfile.addEventListener('click', function() {
  openPopupEditProfile(profileForm)
})

buttonOpenAddCard.addEventListener('click', function() {
  openPopupNewPlace(addCardForm)
})

// Закрытие popup формы

buttonCloseEditProfile.addEventListener('click', function() {
  closePopup(profileForm)
})

buttonCloseAddCard.addEventListener('click', function() {
  closePopup(addCardForm)
})

buttonCloseImagePopup.addEventListener('click', function() {
  closePopup(imageForm)
})

// Вызов функции на проверку валидации

formEditProfileValidate.enableValidation();
formNewPlaceValidate.enableValidation();

// Обработчики событий

addCardForm.addEventListener('submit', formAddCardSubmitHandler)
profileForm.addEventListener('submit', formEditProfileSubmitHandler)


addCardForm.addEventListener('click', onClickPopupBackgroundListener)
profileForm.addEventListener('click', onClickPopupBackgroundListener)
imageForm.addEventListener('click', onClickPopupBackgroundListener)


renderCards()





















