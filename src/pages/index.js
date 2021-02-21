import './index.css'
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithRemoveCard from '../components/PopupWithRemoveCard.js'

const settings = {
    formSelector: '.popup__container',
    inputSelector: '.popup__field',
    buttonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__field_state_invalid',
};

const profileAvatar = document.querySelector('.profile__avatar')
const profileAvatarImage = document.querySelector('.profile__avatar-ellipse');
const formEditProfileAvatar = document.querySelector('.popup__container_edit-profile-avatar');
const inputAvatarImage = formEditProfileAvatar.querySelector('.popup__field_avatar');

const cardsList = document.querySelector('.elements')
const buttonOpenEditProfile = document.querySelector ('.profile__edit-button')
const buttonOpenAddCard = document.querySelector ('.profile__add-button')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const nameInput = document.querySelector('.popup__field-name')
const jobInput = document.querySelector('.popup__field-job')
const removeCardForm = '.popup_delete-card';
const avatarEditForm = '.popup_edit-profile-avatar';
const profileForm = '.popup_profile-edit';
const addCardForm = '.popup_add-card';
const imageForm = '.popup_image';

const user = new UserInfo({
    profileName,
    profileJob,
    profileAvatarImage
});

const popupImage = new PopupWithImage(imageForm);
const formEditProfileValidate = new FormValidator(settings, '.popup__container_profile-edit');
const formEditProfileAvatarValidate = new FormValidator(settings, '.popup__container_edit-profile-avatar');
const formNewPlaceValidate = new FormValidator(settings, '.popup__container_new-place');

const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-20/",
    headers: {
        'content-type': 'application/json',
        'authorization': '80281606-7e64-45b0-a996-6277fb44273c',
    }
})

const promises = [api.getInitialCards(), api.getUserInfo()];

Promise.all(promises)
	.then(([resCardData, resUserData]) => {
    user.setUserInfo(resUserData._id, resUserData.name, resUserData.about, resUserData.avatar);
    cardList.setRenderedItems(resCardData);
    cardList.renderItems(resUserData);
	})
	.catch((error) => {
		console.log(error);
	});

const formEditProfileClass = new PopupWithForm({
    popupSelector: profileForm,
    handleSubmitForm: (input) => {
        formEditProfileClass.loading(true);
        api.setUserInfo({
            name: input['name'],
            about: input['job']
        })
        .then(data => {
            user.setUserInfo(data._id, data.name, data.about, data.avatar);
        })
        .catch((error) => {
            console.log(error);
          })
        .finally(() => {
            formEditProfileClass.loading(false, 'Сохранить');
            formEditProfileClass.close();
        })
        
    }
});

const formEditProfileAvatarClass = new PopupWithForm({
    popupSelector: avatarEditForm,
    handleSubmitForm: (input) => {
        formEditProfileAvatarClass.loading(true);
        api.updateAvatar(input['avatar-edit'])
        .then(data => {
        user.setUserInfo(data._id, data.name, data.about, data.avatar);

        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            formEditProfileAvatarClass.loading(false, 'Сохранить');
            formEditProfileAvatarClass.close();
        }) 
    }
});

const formAddCardClass = new PopupWithForm({
    popupSelector: addCardForm,
    handleSubmitForm: (input) => {
        formAddCardClass.loading(true)
        api.addNewCard({
            name: input['new-place'],
            link: input['link-image']
        })
        .then(data => {
            const card = createCard(data, '.template', user.getUserInfo());
            const cardElement = card.generateCard();
            cardList.addNewItem(cardElement);

        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            formAddCardClass.loading(false, 'Сохранить');
            formAddCardClass.close();
        }) 
    }
});

const formDeleteCard = new PopupWithRemoveCard({
	popupSelector: removeCardForm,
	handleSubmitForm: ( {element, cardId} ) => {
		api.deleteCard(cardId)
        .then(() => {
            element.remove();
            formDeleteCard.close();
        })
        .catch((error) => {
            console.log(error);
        })
	}
});

const createCard = function (data, cardSelector, userData) {
    const card = new Card(
        data,
        cardSelector,{
            handleCardClick: (name, link) => {
                popupImage.open(name, link);
            },
            handleDeleteCard: (element, cardId) => {
                formDeleteCard.open({ element, cardId });
            },
            handleLikeClick: (cardId) => {
            if(card.isCardLiked()) {
                api.deleteLikeCard(cardId)
                .then((data) => {
                    card.setCardLiked(data);
                })
                .catch((error) => {
                    console.log(error);
                });
            } else {
                api.addLikeCard(cardId)
                .then((data) => {
                    card.setCardLiked(data);
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        userData: userData
    });
    return card;
};
  
const cardList = new Section({
        renderer: (item, userData) => {
            const card = createCard(item, '.template', userData);
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
        }
    }, cardsList);


profileAvatar.addEventListener('click', () => {
    formEditProfileAvatarClass.open();
})

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
formEditProfileAvatarValidate.enableValidation();

formAddCardClass.setEventListeners();
formEditProfileClass.setEventListeners();
formEditProfileAvatarClass.setEventListeners();
popupImage.setEventListeners();
formDeleteCard.setEventListeners();

