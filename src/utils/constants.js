//Объект со свойствами селекторами для валидатора форм
export const formConfig = {
    // inputSelector: '.popup__input',
    // submitButtonSelector: '.popup__button',
    // inactiveButtonClass: 'popup__button_disabled',
    // inputErrorClass: 'popup__input-error',
    formSelector: '.popup__form', // т.е configObj.formSelector = '.popup__form'  - 2шт
    inputSelector: '.popup__input', // т.е configObj.inputSelector = '.popup__form' - 4 шт
    submitButtonSelector: '.popup__button', // - 2 кнопки сохранить, по 1 в каждом попапе
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible' // т.е. configObj.errorClass = 'popup__error_visible'

}

export const clickEditButton = document.querySelector('#edit-profile'); //Переменная для кнопки редактирования профиля
export const newUsername = document.querySelector('#username'); //Переменная для инпута с именем пользователя
export const newBio = document.querySelector('#bio'); //Переменная для инпута с биографией
export const formEditProfile = document.querySelector('.popup__form-box'); //Переменная для формы редактирования профиля
export const clickAddPhoto = document.querySelector('#add-element'); //Переменная для кнопки добавления фото
export const formAddPhoto = document.querySelector('.popup__form_place_add-element'); //Переменная для формы редактирования профиля
export const photoGallery = document.querySelector('.elements'); //Переменная для фотопотока пользователя


//Константы желательно выносить в отдельный файл - constants.js - Rolan Ibragimov, ревьюер 7ая ПР - учту )!
export const initialCards = [ // присваиваем переменной массив, содержащий объекты с данными, необходимыми для формирования карточек с изображением;
    //с атрибутами name и link

    {
        name: 'Египет',
        link: 'https://images.unsplash.com/photo-1602791191774-d34f0367f1e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
    },
    {
        name: 'Франция',
        link: 'https://images.unsplash.com/photo-1601988628551-6fd46e168930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
    },
    {
        name: 'Германия',
        link: 'https://images.unsplash.com/photo-1596996957514-cbde0edba75c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80'
    },
    {
        name: 'США',
        link: 'https://images.unsplash.com/photo-1520885161078-041b9f6ad3ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
    },
    {
        name: 'Беларусь',
        link: 'https://images.unsplash.com/photo-1601921255435-8061b34d7229?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80'
    },
    {
        name: 'Россия',
        link: 'https://topdialog.ru/wp-content/uploads/2021/01/is_i63f1369.jpg'
    }
];


