## *Mesto*

----------------------------------------------------------------------------------------

### 4 проект Яндекс.Практикума по изучению и закреплению базового JavaScript.

----------------------------------------------------------------------------------------

#### Проект разработан с использованием Flex. Построен на  файловой структуре Nested по БЭМ.
#### Изучение и работа с базовым JavaScript. В проекте были затронуты основные моменты по форме Popup.
#### Изучение и работа с GIT ветками.
#### Работа выполнена с адаптивной версткой от 320px до 1280px и выше. 

----------------------------------------------------------------------------------------

#### Ссылка на макет:  https://www.figma.com/file/StZjf8HnoeLdiXS7dYrLAh/JavaScript.-Sprint-4
#### Ссылка по проект: https://gubrikk.github.io/mesto/index.html


Название файла  | Содержание файла
----------------|----------------------      
normalize.css   | Нормалайзер CSS
index.css       | Основные стили блоков
texts.md        | Используемый конктент в проекте
index.html      | Индексный файл для проверки вносимых изменений
script.js       | Внешние скрипты

![screenshot of sample](https://w.wallhaven.cc/full/lm/wallhaven-lmxmxy.png)


const buttonEditProfile = document.querySelector('.profile__edit-button')
const overlayEditProfile = document.querySelector('.popup_profile-edit')
const formEditProfile = document.querySelector('.popup__container_profile-edit')
const buttonClosePopupEditProfile = document.querySelector('.popup__close-icon_profile-edit')

const nameInput = document.querySelector('.popup__field-name');
const jobInput = document.querySelector('.popup__field-job');
const profileInfo = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__job');

const overlayImagePopup = document.querySelector('.overlay_image-popup');
const imagePopup = document.querySelector('.overlay-figure__image');
const buttonCloseImagePopup = document.querySelector('.form__close-icon_image-popup');
const overlayFigureCaption = document.querySelector('.overlay-figure__caption');

const buttonNewPlace = document.querySelector('.profile__add-button');
const overlayNewPlace = document.querySelector('.popup_add-card');
const formNewPlace = document.querySelector('.popup__container_new-place');
const buttonClosePopupNewPlace = document.querySelector('.popup__close-icon_new-place');

const newPlaceName = document.querySelector('.popup__field_new-place');
const newPlaceImage = document.querySelector('.popup__field_link-image');

const cardsList = document.querySelector('.elements');
const template = document.querySelector('.template')