console.log('Hello, World!')
const numbers = [2, 3, 5];
// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10

import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
//import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {initialCards, clickEditButton, newUsername, newBio, formEditProfile, clickAddPhoto, formAddPhoto, photoGallery, formConfig} from '../utils/constants.js';


//Создаю попап с фото фулвью (экземпляр PopupWithImage), добавляю ему слушателей
const popupFullViewPhoto = new PopupWithImage ('.popup_place_image-popup')
popupFullViewPhoto.setEventListeners();

//Пишу функцию создания карточки
const createCard = (data) => {
  const newPhoto = new Card (
      {
        data,
        handleCardClick: () => {
          popupFullViewPhoto.open(data)
        }
      },
      '#photo')
  return newPhoto.generateCard();
}

//Создаю грид фотокарточек (экземпляр Section)
const renderGallery = new Section ({
  items: initialCards,
  renderer: (data) => {
    const newPhotoAdded = createCard(data);
    renderGallery.addItem(newPhotoAdded, true);
  },
}, photoGallery)

//Рендерю фотокарточки на странице
renderGallery.renderItems();

//Создаю экземпляр класса валидации с формой добавления фотографии
const formAddPhotoValidated = new FormValidator(formConfig, formAddPhoto);

//Запускаю валидацию формы добавления фотографии
formAddPhotoValidated.enableValidation();

//Создаю попапа добавления фото (экземпляр PopupWithForm) и добавляю ему слушателей
const popupAddPhotoForm = new PopupWithForm (
    '.popup_content_add-element',
    (values) => {
      const data = {link: values.link, name: values.name}
      const newPhotoAdded = createCard(data);
      renderGallery.addItem(newPhotoAdded, false);
      popupAddPhotoForm.close();
    },
    '.popup__form'
)

popupAddPhotoForm.setEventListeners();

//Добавляю слушателя на кнопку добавление фотографии
clickAddPhoto.addEventListener ('click', () => {

  formAddPhotoValidated.deactivateButton();
  popupAddPhotoForm.open()
})

//Создаю экземпляра класса с объектом информации о пользователе
const userinfo = new UserInfo('.profile__title', '.profile__subtitle');

//Создаю попап редактирования профиля (экземпляр класса PopupWithForm) и добавляю слушателей
const popupEditProfileInfo = new PopupWithForm (
    '.profile-popup',
    (values) => {
      const data = {username: values.username, bio: values.bio}

      userinfo.setUserInfo(data.username, data.bio)

      popupEditProfileInfo.close();
    },
    '.form__container'
)

popupEditProfileInfo.setEventListeners();

//Создаю экземпляр класса валидации с формой редактирования профиля
const formEditProfileValidated = new FormValidator(formConfig, formEditProfile);

//Запускаю валидацию формы редактирования профиля
formEditProfileValidated.enableValidation();

//Добавляю слушатель на кнопку редактирования профиля, передаю данные со страницы в форму, открываю попап

clickEditButton.addEventListener('click', () => {

  const currentUserInfo = userinfo.getUserInfo();
  newUsername.value = currentUserInfo.username;
  newBio.value = currentUserInfo.bio;


  formEditProfileValidated.deactivateButton(); // deactivateButton => disableSubmitButton
  popupEditProfileInfo.open()
})




