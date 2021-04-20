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


export const templateElement = document.querySelector('.card'); // выбираем в проекте класс шаблона секции изображений;
console.log(templateElement)


export const buttonOpenInfo = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "Войти"; buttonOpenInfo => editButton


export const popupEditInfo = document.querySelector('.profile-popup'); // выбираем в проекте класс "Попап-окна"; profilePopup => popupEditInfo
console.log(popupEditInfo)
console.log(popupEditInfo.textContent)
//и добавьте слово profile во все элементы, которые с ним связаны, а то они слишком нейтрально зазываются
//Это попап Профиля, поэтому нужно более конкретно назвать переменную:  const profilePopup = document.querySelector('.profile-popup');
// и искать его нужно по конкретному Селектору (классу profile-popup)
// иначе Вы сейчас находите первый попавшийся Попап - Gennadiy Barsegyan, ревьюер - 1е ревью 5я ПР

export const closeButton = popupEditInfo.querySelector('.popup__button-close'); // выбираем в проекте класс кнопки "Закрыть";
//Крестик нужно искать внутри попапа Профиля, а то класс popup__button-close является общим классом для всех Крестиков в проекте
// и сейчас Вы просто находите первый попавшийся Крестик - если поменять верстку, то приложение сломается
// и добавьте слово profile во все элементы, которые с ним связаны, а то они слишком нейтрально зазываются - Gennadiy Barsegyan, ревьюер, 1е ревью 5я ПР

export const formProfileInfo  = popupEditInfo.querySelector('.popup__form'); // выбираем в проекте класс формы в "Попап-окне"; form => formProfileInfo
console.log(formProfileInfo)
console.log(formProfileInfo.textContent)
//форму нужно искать внутри попапа Профиля, а то класс popup__form является общим для всех форм в проекте - Gennadiy Barsegyan, ревьюер, 1е ревью 5я ПР

export const inputUserName = formProfileInfo.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне"; inputName => inputUserName
console.log(inputUserName)
console.log(inputUserName.textContent)
export const inputUserAbout = formProfileInfo.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне"; inputAbout =>inputUserAbout

//const buttonSubmitInfo = formProfileInfo.querySelector('.popup__button');



export const userName = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль"; profileTitle => userName
console.log(userName)
console.log(userName.textContent)
export const userDescription = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль"; profileSubtitle => userDescription
console.log(userDescription)
console.log(userDescription.textContent)
export const cardItemsList = document.querySelector('.elements'); // выбираем класс списка изображений в шаблоне; cardsContainer => cardItemsList
console.log(cardItemsList)

export const buttonOpenAddCard = document.querySelector('.profile__add-button'); // выбираем в проекте класс кнопки "Добавить"; addButton => buttonOpenAddCard

export const popupAddCard = document.querySelector('.popup_content_add-element'); // выбираем в проекте модификатор "Попап-окна"; addElementPopup => popupAddCard
export const closeButtonAddElementPopup = document.querySelector('.popup__button-close_place_add-element'); // выбираем в проекте модификатор кнопки "Закрыть";
export const inputNameCard = document.querySelector('.popup__input_data_title'); // выбираем в проекте класс поля ввода "Название" формы в попап-окне "Добавить элемент"; inputTitle => inputNameCard
console.log(inputNameCard)

export const inputLinkCard = document.querySelector('.popup__input_data_link'); // выбираем в проекте класс второго поля ввода "Ссылка" формы в попап-окне "Добавить элемент"; inputLink => inputLinkCard
console.log(inputLinkCard)


export const formAddCard  = document.querySelector('.popup__form_place_add-element'); // выбираем в проекте модификатор формы в "Попап-окне"; newElementForm => formAddCard
console.log(formAddCard)
console.log(formAddCard.textContent)
//const buttonSubmitCard = formAddCard.querySelector('.popup__button');

export const popupPreview = document.querySelector('.popup_place_image-popup'); // выбираем в проекте класс "Попап-окна"; imagePopup => popupPreview
console.log(popupPreview)

export const popupPreviewImage = document.querySelector('.popup__image'); // выбираем в проекте класс изображения "Попап-окна"; photoImagePopup => popupPreviewImage
export const popupPreviewFigcaption = document.querySelector('.popup__caption'); // выбираем в проекте класс подписи к изображению "Попап-окна"; captionImagePopup => popupPreviewFigcaption


export const closeButtonImagePopup = document.querySelector('.popup__button-close_place_image-popup'); // выбираем в проекте класс кнопки "Закрыть";
export const overlay = document.querySelector('.project-area'); // выбираем в проекте класс тега <body>;
console.log(overlay)

export const addPopupForm = document.querySelector('.popup__form_place_add-element'); // выбираем в проекте класс формы в "Попап-окне" добавления нового элемента;
