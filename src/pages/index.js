const spinner = document.querySelector('.spinner');
import {
    clickAddPhoto,
    clickAvatarImage,
    clickEditButton,
    formAddPhoto,
    formChangeAvatar,
    formConfig,
    formEditProfile,
    newAvatarURL,
    newBio,
    newPhotoName,
    newPhotoURL,
    newUsername,
    photoGallery
} from '../utils/constants.js'

import FormValidator from '../components/FormValidator.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import './index.css'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'

//Создаю экземляр класса Api 
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-24/', // Идентификатор группы: cohort-24 by Nasy126@mail.ru Анастасия Житкова
    headers: {
        authorization: 'f00e309e-31f2-4bad-9fcd-5ea849544e69', // Токен by Nasy126@mail.ru Анастасия Житкова
        'Content-type': 'application/json',
    }
})

let userID

api.getDataForPageRender()
    .then((argums) => {
        const [initialCardsData, userData] = argums;
        userinfo.setUserInfo(userData);
        userID = userData._id;
        renderGallery.renderItems(initialCardsData)
    })
    .catch((error) => {
        console.log(error);
    })

//Создаю попап с фото фулвью (экземпляр PopupWithImage), добавляю ему слушателей
const popupFullViewPhoto = new PopupWithImage(
    '.popup_use_view-full-photo')
popupFullViewPhoto.setEventListeners();

//Пишу функцию создания карточки 
const createCard = (item) => {
    const newPhoto = new Card(
        item,

        () => {
            popupFullViewPhoto.open(item)
        },

        () => {
            api.likeCard(item.id)
                .then((item) => newPhoto.setLikesInfo(item.likes))
                .catch((error) => {
                    console.log(error);
                })
        },

        () => {
            api.dislikeCard(item.id)
                .then((item) => newPhoto.setLikesInfo(item.likes))
                .catch((error) => {
                    console.log(error);
                })
        },

        () => {
            popupConfirmCardRemoval.setActionForConfirmation(
                () => {
                    api.deleteCard(item.id)
                        .then(() => newPhoto.deleteButtonClicked())
                        .then(() => popupConfirmCardRemoval.close())
                        .catch(error => console.error(error))
                }
            )
            popupConfirmCardRemoval.open();
        }
        ,
        '#photo',
        userID)

    return newPhoto.generateCard();
}

//Создаю грид фотокарточек (экземпляр Section)
const renderGallery = new Section(
    (item) => {
        const newPhotoAdded = createCard({
            name: item.name,
            link: item.link,
            id: item._id,
            likes: item.likes,
            owner: item.owner,
        });
        renderGallery.addItem(newPhotoAdded, true)
    },
    photoGallery)

//Создаю экземпляр класса валидации с формой добавления фотографии
const formAddPhotoValidated = new FormValidator(formConfig, formAddPhoto);

//Запускаю валидацию формы добавления фотографии
formAddPhotoValidated.enableValidation();

//Создаю попап добавления фото (экземпляр PopupWithForm) и добавляю ему слушателей
const popupAddPhotoForm = new PopupWithForm(
    '.popup_use_add-photo',
    () => {
        console.log(`isLoading true`);
        // spinner.style.display = 'block';
        dataSubmitting(formAddPhoto, true)
        api.addNewCard(newPhotoName.value, newPhotoURL.value)
            .then((item) => {
                const newPhotoAdded = createCard({
                    name: item.name,
                    link: item.link,
                    id: item._id,
                    likes: item.likes,
                    owner: item.owner,
                });
                renderGallery.addItem(newPhotoAdded, false)
            })
            .then(() => popupAddPhotoForm.close())
            .catch((error) => {
                console.log(error);
            })
            .finally(() =>
                dataSubmitting(formAddPhoto, false, 'Создать'))
    },
    '.form__container'
)

popupAddPhotoForm.setEventListeners();

//Добавляю слушатель на кнопку добавление фотографии 
clickAddPhoto.addEventListener('click', () => {
    formAddPhotoValidated.disableSubmitButton();
    popupAddPhotoForm.open()
})

//Создаю экземпляр класса с объектом информации о пользователе 
const userinfo = new UserInfo(
    '.profile__username',
    '.profile__bio',
    '.profile__avatar-image'
);

//Создаю попап редактирования профиля (экземпляр класса PopupWithForm) и добавляю слушателей, данные берутся и отправляются на сервер
const popupEditProfileInfo = new PopupWithForm(
    '.popup_use_edit-profile',
    () => {
        dataSubmitting(formEditProfile, true)
        api.updateUserData(newUsername.value, newBio.value)
            .then((userData) => {
                userinfo.setUserInfo(userData)
            })
            .then(() => popupEditProfileInfo.close())
            .catch((error) => {
                console.log(error);
            })
            .finally(() =>
                dataSubmitting(formEditProfile, false, 'Сохранить'))
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
    newUsername.value     = currentUserInfo.username;
    newBio.value          = currentUserInfo.bio;

    formEditProfileValidated.disableSubmitButton();
    popupEditProfileInfo.open()
})

//Создаю экземпляр класса PopupWithForm для попапа редактирования аватара
const popupChangeAvatarImage = new PopupWithForm(
    '.popup_use_update-avatar-image',
    () => {
        dataSubmitting(formChangeAvatar, true)
        api.updateAvatarPhoto(newAvatarURL.value)
            .then((userData) => {
                userinfo.setUserInfo(userData)
            })
            .then(() => popupChangeAvatarImage.close())
            .catch((error) => {
                console.log(error);
            })
            .finally(() => dataSubmitting(formChangeAvatar, false, 'Сохранено'))
    },
    '.form__container'
)

popupChangeAvatarImage.setEventListeners();

//Создаю экземпляр класса FormValidator для формы редактирования аватара 
const formChangeAvatarValidated = new FormValidator(formConfig, formChangeAvatar);

//Открываю форму редактирования аватара по клику на аватар 
clickAvatarImage.addEventListener('click', () => {
    formChangeAvatarValidated.disableSubmitButton();
    popupChangeAvatarImage.open();
})

//Запускаю валидацию формы редактирования аватара
formChangeAvatarValidated.enableValidation();

//Создаю экземпляр класса PopupWithConfirmation для окошка подтверждения удаления фотокарточки 
const popupConfirmCardRemoval = new PopupWithConfirmation(
    '.popup_use_confirm-remove-photo',
    () => {
    }
)

popupConfirmCardRemoval.setEventListeners();

//Функция лоудера для загрузки данных на сервер в форме сабмита 
function dataSubmitting(form, isLoading, copy) {
    const submitButton = form.querySelector('.form__submit-button')
    if (isLoading) {
        spinner.classList.add('spinner_visible');
        submitButton.textContent = 'Cохранение...';
        submitButton.setAttribute('disabled', true);
    } else if (!isLoading) {
        spinner.classList.remove('spinner_visible');
        submitButton.textContent = copy;
        submitButton.removeAttribute('disabled');
    }
}