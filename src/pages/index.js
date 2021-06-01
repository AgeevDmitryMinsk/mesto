import '../pages/index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";
import {
    initialCards,
    clickEditButton,
    newUsername,
    newBio,
    formEditProfile,
    clickAddPhoto,
    formAddPhoto,
    photoGallery,
    formConfig,
    formProfileInfo,
    selectorPopupFullViewPhoto,
    selectorPopupContentAddElement,
    selectorPopupForm,
    userNameSelector,
    bioSelector,
    cardSelector,
    profilePopupSelector,
    formContainerSelector
} from '../utils/constants.js';



const popupFullViewPhoto = new PopupWithImage (selectorPopupFullViewPhoto) //  '.popup_place_image-popup' => selectorsPopupFullViewPhoto
popupFullViewPhoto.setEventListeners();

const createCard = (data) => {
  const newPhoto = new Card (
      {
        data,
        handleCardClick: () => {
          popupFullViewPhoto.open(data)
        }
      },
      cardSelector)
  return newPhoto.generateCard();
}

const renderGallery = new Section ({
  items: initialCards,
  renderer: (data) => {
    const newPhotoAdded = createCard(data);
    renderGallery.addItem(newPhotoAdded, true);
  },
}, photoGallery)


renderGallery.renderItems();


const formAddCardValidator = new FormValidator(formConfig, formAddPhoto);


formAddCardValidator.enableValidation();


const popupAddPhotoForm = new PopupWithForm (
    selectorPopupContentAddElement,
    (values) => {
      const data = {link: values.link, name: values.name}
      const newPhotoAdded = createCard(data);
      renderGallery.addItem(newPhotoAdded, false);
      popupAddPhotoForm.close();
    },
    selectorPopupForm
)

popupAddPhotoForm.setEventListeners();

clickAddPhoto.addEventListener ('click', () => {
  formAddCardValidator.deactivateButton();
  popupAddPhotoForm.open();
    formAddCardValidator.deleteErrorMessage(formAddPhoto, formConfig);
})

const userInfo = new UserInfo(userNameSelector, bioSelector);

const popupEditProfileInfo = new PopupWithForm (
    profilePopupSelector,
    (values) => {
      const data = {username: values.username, bio: values.bio}
      userInfo.setUserInfo(data.username, data.bio)
      popupEditProfileInfo.close();
    },
    formContainerSelector
)

popupEditProfileInfo.setEventListeners();

const formEditProfileValidator = new FormValidator(formConfig, formEditProfile);

formEditProfileValidator.enableValidation();

clickEditButton.addEventListener('click', () => {

  const currentUserInfo = userInfo.getUserInfo();
  newUsername.value = currentUserInfo.username;
  newBio.value = currentUserInfo.bio;


  formEditProfileValidator.deactivateButton();
  popupEditProfileInfo.open()
    formEditProfileValidator.deleteErrorMessage(formProfileInfo, formConfig);
})


// для теста:
fetch('https://swapi.nomoreparties.co/people')
    .then((res) => {
        console.log(res, `привет`); // если всё хорошо, получили ответ
    })
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
    });

fetch('https://api.kanye.rest')
    .then((res) => {
        return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
    .then((data) => {
        console.log(data, `привет2`); // если мы попали в этот then, data — это объект
    })
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
    });

