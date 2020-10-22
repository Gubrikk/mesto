const popupSubmit = document.querySelector('.popup__submit-button')
const cardsList = document.querySelector('.elements')
const template = document.querySelector('.template')

// Определение переменных popupEditProfile

const buttonOpenEditProfile = document.querySelector ('.profile__edit-button')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const profileForm = document.querySelector('.popup_profile-edit')
const nameInput = profileForm.querySelector('.popup__field-name')
const jobInput = profileForm.querySelector('.popup__field-job')
const buttonCloseEditProfile = profileForm.querySelector ('.popup__close-icon_profile-edit')

// Определение переменных popupAddCard

const buttonOpenAddCard = document.querySelector ('.profile__add-button')
const AddCardForm = document.querySelector('.popup_add-card')
const placeInput = AddCardForm.querySelector('.popup__field_new-place')
const imageinput = AddCardForm.querySelector('.popup__field_link-image')
const buttonCloseAddCard = AddCardForm.querySelector ('.popup__close-icon_new-place')

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

// Функция открытия/закрытия "popup" формы.

const popupToggle = (popup) => {
  popup.classList.toggle('popup_opened')
}

// Закрытие popup'a при клике вне формы

const onClickPopupBackgroundListener = (event, popup) => {
  if(event.target !== event.currentTarget) {
      return
  }
  popupToggle(popup)
}

// Добавление карточки с функцией клонирования

const getCard = (data) => {
  const card = template.content.cloneNode(true);
  const elementPhoto = card.querySelector('.element__image');
  elementPhoto.src = data.link;
  elementPhoto.alt = data.name;
  card.querySelector('.element__info-name').innerText = data.name;
  const buttonRemove = card.querySelector('.element__trash');
  const buttonLike = card.querySelector('.element__info-like');

  elementPhoto.addEventListener('click', () => {
    imagePopup.src = data.link;
    popupPreviewText.innerText = data.name;
    popupToggle(imageForm)
  })

  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('element__info-like_active');
  })
  buttonRemove.addEventListener('click', handlerRemove)

  return card;
}

// Сохранение новых значений при нажатии на submit

function formEditProfileSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popupToggle(profileForm)
}

// Добавление карточки при нажатии на submit.

const formAddCardSubmitHandler = (evt) => {
  evt.preventDefault();

    const item = getCard({
      name: placeInput.value,
      link: imageinput.value
    });

    cardsList.prepend(item)
    popupToggle(AddCardForm)
}


// Добавление карточки в начало списка в cardsList

const renderCards = () => {
  const cards = initialCards.map(card => getCard(card));
  cardsList.append(...cards);
}

// Сбрасывание значений в input (addCardForm)

const openPopupNewPlace = () => {

  placeInput.value = '';
  imageinput.value = '';
  
  popupToggle(AddCardForm)
}

// Присвоение существующих значений в input (profileForm)

const openPopupEditProfile = () => {
  
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  popupToggle(profileForm)
}

const handlerRemove = (event) => {
  event.target.closest('.element').remove()
}

// Вызов нужной popup формы.

buttonOpenEditProfile.addEventListener('click', function() {
  openPopupEditProfile(profileForm)
})

buttonOpenAddCard.addEventListener('click', function() {
  openPopupNewPlace(AddCardForm)
})

// Закрытие popup формы

buttonCloseEditProfile.addEventListener('click', function() {
  popupToggle(profileForm)
})

buttonCloseAddCard.addEventListener('click', function() {
  popupToggle(AddCardForm)
})

buttonCloseImagePopup.addEventListener('click', function() {
  popupToggle(imageForm)
})


// Обработчики событий

AddCardForm.addEventListener('submit', formAddCardSubmitHandler)
profileForm.addEventListener('submit', formEditProfileSubmitHandler)


AddCardForm.addEventListener('click', (event) => onClickPopupBackgroundListener(event, AddCardForm))
profileForm.addEventListener('click', (event) => onClickPopupBackgroundListener(event, profileForm))
imageForm.addEventListener('click', (event) => onClickPopupBackgroundListener(event, imageForm))

renderCards()





















