import '../pages/index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
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
  deleteErrorMessege(formAddPhoto, formConfig);
})

const userinfo = new UserInfo(userNameSelector, bioSelector);

const popupEditProfileInfo = new PopupWithForm (
    profilePopupSelector,
    (values) => {
      const data = {username: values.username, bio: values.bio}
      userinfo.setUserInfo(data.username, data.bio)
      popupEditProfileInfo.close();
    },
    formContainerSelector
)

popupEditProfileInfo.setEventListeners();

const formEditProfileValidator = new FormValidator(formConfig, formEditProfile);

formEditProfileValidator.enableValidation();

clickEditButton.addEventListener('click', () => {

  const currentUserInfo = userinfo.getUserInfo();
  newUsername.value = currentUserInfo.username;
  newBio.value = currentUserInfo.bio;


  formEditProfileValidator.deactivateButton();
  popupEditProfileInfo.open()
  deleteErrorMessege(formProfileInfo, formConfig);
})

const hideInputError = (formElement, inputElement, {inputErrorClass}) => {
    inputElement.classList.remove(inputErrorClass);
}

const deleteErrorMessege = (formItem, {inputErrorClass, errorClass}) => {
    const errorList = Array.from(formItem.querySelectorAll(`.${inputErrorClass}`));
    errorList.forEach((errorItem) => {
        hideInputError(formItem, errorItem, {inputErrorClass, errorClass});
    });
}

