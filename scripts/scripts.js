// Определение переменных

const buttonOpenPopup = document.querySelector ('.profile__edit-button')
const buttonClosePopup = document.querySelector ('.popup__close-icon')
const popup = document.querySelector ('.popup')
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const popupSubmit = document.querySelector('.popup__submit-button')

// Открытие и закрытие popup формы

const popupToggle = () => {
    popup.classList.toggle('popup__is-opened')
}

buttonOpenPopup.addEventListener ('click', popupToggle)
buttonClosePopup.addEventListener ('click', popupToggle)

// Закрытие popup'a при клике вне формы

const onClickPopupBackgroundListener = (event) => {
    if(event.target !== event.currentTarget) {
        return
    }
    popupToggle()
}

// Сохранение новых значений при нажатии на submit

popup.addEventListener('click', onClickPopupBackgroundListener)

let profileForm = document.querySelector('.popup__container')

function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.popup__field-name')
    let jobInput = document.querySelector('.popup__field-job')

    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value

    buttonClosePopup.addEventListener ('click', popupToggle)

    popupToggle()

}

// Обработчик событий

profileForm.addEventListener('submit', formSubmitHandler);



