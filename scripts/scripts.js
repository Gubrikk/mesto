// Определение переменных

const buttonOpenPopup = document.querySelector ('.profile__edit-button')
const buttonClosePopup = document.querySelector ('.popup__close-icon')
const popup = document.querySelector ('.popup')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const popupSubmit = document.querySelector('.popup__submit-button')

let profileForm = document.querySelector('.popup__container')
let nameInput = document.querySelector('.popup__field-name')
let jobInput = document.querySelector('.popup__field-job')

// Открытие и закрытие popup формы

const popupToggle = () => {
    popup.classList.toggle('popup_opened')

    console.log(popup.classList.contains('popup_opened'))
}

// Закрытие popup'a при клике вне формы

const onClickPopupBackgroundListener = (event) => {
    if(event.target !== event.currentTarget) {
        return
    }
    popupToggle()
}

buttonOpenPopup.addEventListener ('click', popupToggle)
buttonClosePopup.addEventListener ('click', popupToggle)


// Сохранение новых значений при нажатии на submit

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value

    popupToggle()

}

// Обработчик событий

popup.addEventListener('click', onClickPopupBackgroundListener)
profileForm.addEventListener('submit', formSubmitHandler);



