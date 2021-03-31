import Card from './Card.js';
import FormValidator from './FormValidator.js';


const initialCards = [ // присваиваем переменной массив, содержащий объекты с данными, необходимыми для формирования карточек с изображением;
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


const templateElement = document.querySelector('.card'); // выбираем в проекте класс шаблона секции изображений;
console.log(templateElement)


const buttonOpenInfo = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "Войти"; buttonOpenInfo => editButton


const popupEditInfo = document.querySelector('.profile-popup'); // выбираем в проекте класс "Попап-окна"; profilePopup => popupEditInfo 
console.log(popupEditInfo)
console.log(popupEditInfo.textContent)
//и добавьте слово profile во все элементы, которые с ним связаны, а то они слишком нейтрально зазываются
//Это попап Профиля, поэтому нужно более конкретно назвать переменную:  const profilePopup = document.querySelector('.profile-popup');
// и искать его нужно по конкретному Селектору (классу profile-popup)
// иначе Вы сейчас находите первый попавшийся Попап - Gennadiy Barsegyan, ревьюер - 1е ревью 5я ПР

const closeButton = popupEditInfo.querySelector('.popup__button-close'); // выбираем в проекте класс кнопки "Закрыть";
//Крестик нужно искать внутри попапа Профиля, а то класс popup__button-close является общим классом для всех Крестиков в проекте
// и сейчас Вы просто находите первый попавшийся Крестик - если поменять верстку, то приложение сломается
// и добавьте слово profile во все элементы, которые с ним связаны, а то они слишком нейтрально зазываются - Gennadiy Barsegyan, ревьюер, 1е ревью 5я ПР

const formProfileInfo  = popupEditInfo.querySelector('.popup__form'); // выбираем в проекте класс формы в "Попап-окне"; form => formProfileInfo
console.log(formProfileInfo)
console.log(formProfileInfo.textContent)
//форму нужно искать внутри попапа Профиля, а то класс popup__form является общим для всех форм в проекте - Gennadiy Barsegyan, ревьюер, 1е ревью 5я ПР

const inputUserName = formProfileInfo.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне"; inputName => inputUserName
console.log(inputUserName)
console.log(inputUserName.textContent)
const inputUserAbout = formProfileInfo.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне"; inputAbout =>inputUserAbout

//const buttonSubmitInfo = formProfileInfo.querySelector('.popup__button');



const userName = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль"; profileTitle => userName
console.log(userName)
console.log(userName.textContent)
const userDescription = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль"; profileSubtitle => userDescription
console.log(userDescription)
console.log(userDescription.textContent)
const cardItemsList = document.querySelector('.elements'); // выбираем класс списка изображений в шаблоне; cardsContainer => cardItemsList
console.log(cardItemsList)

const buttonOpenAddCard = document.querySelector('.profile__add-button'); // выбираем в проекте класс кнопки "Добавить"; addButton => buttonOpenAddCard

const popupAddCard = document.querySelector('.popup_content_add-element'); // выбираем в проекте модификатор "Попап-окна"; addElementPopup => popupAddCard
const closeButtonAddElementPopup = document.querySelector('.popup__button-close_place_add-element'); // выбираем в проекте модификатор кнопки "Закрыть";
const inputNameCard = document.querySelector('.popup__input_data_title'); // выбираем в проекте класс поля ввода "Название" формы в попап-окне "Добавить элемент"; inputTitle => inputNameCard
console.log(inputNameCard)

const inputLinkCard = document.querySelector('.popup__input_data_link'); // выбираем в проекте класс второго поля ввода "Ссылка" формы в попап-окне "Добавить элемент"; inputLink => inputLinkCard
console.log(inputLinkCard)


const formAddCard  = document.querySelector('.popup__form_place_add-element'); // выбираем в проекте модификатор формы в "Попап-окне"; newElementForm => formAddCard
console.log(formAddCard)
console.log(formAddCard.textContent)
//const buttonSubmitCard = formAddCard.querySelector('.popup__button');

const popupPreview = document.querySelector('.popup_place_image-popup'); // выбираем в проекте класс "Попап-окна"; imagePopup => popupPreview
console.log(popupPreview)

const popupPreviewImage = document.querySelector('.popup__image'); // выбираем в проекте класс изображения "Попап-окна"; photoImagePopup => popupPreviewImage
const popupPreviewFigcaption = document.querySelector('.popup__caption'); // выбираем в проекте класс подписи к изображению "Попап-окна"; captionImagePopup => popupPreviewFigcaption


const closeButtonImagePopup = document.querySelector('.popup__button-close_place_image-popup'); // выбираем в проекте класс кнопки "Закрыть";
const overlay = document.querySelector('.project-area'); // выбираем в проекте класс тега <body>;
console.log(overlay)

const addPopupForm = document.querySelector('.popup__form_place_add-element'); // выбираем в проекте класс формы в "Попап-окне" добавления нового элемента;


function  openPopupPreview (evt)  { //*** */ объявляем функцию, реализующую открытие попап-окна для просмотра выбранного изображения XXL; стрелочную переделал в обычную для this openImagePopup => openPopupPreview (evt)
  const captionValue = evt.target.closest('.element'); // присваиваем переменной класс карточки, по изображению которой кликнул пользователь;
  openPopup(popupPreview); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  popupPreviewImage.src = evt.target.src; // присваиваем атрибуту изображения попап-окна значение атрибута выбранного изображения карточки;
  popupPreviewFigcaption.textContent = captionValue.textContent; // `ЖЫВЕ Беларусь !` присваиваем текстовому содержимому подписи к изображению попап-окна текстовое содержимое заголовка выбранной карточки;
} // ОБРАТИЛ ВНИМАНИЕ, ЧТО ЕСЛИ СТРЕЛОЧНУЮ ФУНКИЮ openPopupPreview, removeCard ИЛИ changeLikeButtonColor РАЗМЕСТИТЬ В КОНЦЕ ФАЙЛА, ТО САЙТ НЕ ПОДНИМАЕТСЯ)))
  // НО ЕСЛИ ИЗ СТРЕЛОЧНОЙ ФУНКЦИИ (=>) СДЕЛАТЬ ПРОСТУЮ, ОБЪЯВЛЕННУЮ ЧЕРЕЗ function openPopupPreview() ТО ЕЕ МОЖНО РАЗМЕЩАТЬ ХОТЬ В КОНЦЕ ФАЙЛА, ОНА ПОДНИМЕТСЯ И САЙТ ЗАРАБОТАЕТ!)



// Ёу start


//Функция добавления карточки в DOM
const addCard = (cardItem, placeItem) => {
  if (placeItem) {    cardItemsList.append(cardItem); }  // append добавляет узлы  в конец node (при загрузке карточек из initialCards)
  if (!placeItem) {     cardItemsList.prepend(cardItem);  } // prepend вставляет узлы в начало node (при загрузке новой карточки из меню popup-а )
}



//Добавлене карточек проходом массива, с созданием обработчиков событий
initialCards.forEach((item) => {
  const card = new Card(item, '.card', openPopupPreview);
  const cardElement = card.getCard();
  addCard(cardElement, true);
});



// Ёу finish


/* => ёё
function removeCard(evt) { // объявляем функцию, реализующую удаление карточки из списка;
  const targetElement = evt.target.closest('.element'); // присваиваем переменной класс карточки, по кнопке удаления которой кликнул пользователь;
  targetElement.remove(); // удаляем карточку, по кнопке которой кликнул пользователь;

  //не нужно удалять обработчики с кнопки удаления, лайка и клика по картинке - при удалении карточки они тоже не будут больше работать - КРУТО!!!
  /*const imageCard = targetElement.querySelector('.element__image'); // присваиваем переменной класс узла "Изображение карточки";
  const removeButton = targetElement.querySelector('.element__remove-button'); // присваиваем переменной класс узла "Кнопка удаления карточки";
  const likeButton = targetElement.querySelector('.element__button-like'); // присваиваем переменной класс узла "Кнопка Лайк";
  imageCard.removeEventListener('click', openPopupPreview); // снимаем "слушатель", вызывающий функцию "openPopupPreview" при нажатии на изображение карточки;
  removeButton.removeEventListener('click', removeCard); // снимаем "слушатель", вызывающий функцию "removeCard" при нажатии на кнопку "Удалить карточку";
  likeButton.removeEventListener('click', changeLikeButtonColor); // снимаем "слушатель", вызывающий функцию "changeLikeButtonColor" при нажатии на кнопку "Лайк";*/
/* => ёё }*/

/*
function changeLikeButtonColor(evt) { // объявляем функцию, реализующую нажатие кнопки "Лайк" выбранного изображения;
  evt.target.classList.toggle('element__button-like_active'); // добавляем классу кнопки "Лайк" модификатор, реализующий изменение цвета кнопки по клику пользователя;
}

function createCard(item) { // объявляем функцию, формирующую из шаблона template в проекте стандарную карточку с изображением, подписью и кнопками;  стролочную поменял  на обычную для this
  const card = templateElement.content.cloneNode(true); // клонируем содержимое шаблона в проекте;
  const headerCard = card.querySelector('.element__title'); // присваиваем переменной класс узла "Заголовок карточки";
  const imageCard = card.querySelector('.element__image'); // присваиваем переменной класс узла "Изображение карточки";
  const removeButton = card.querySelector('.element__remove-button'); // присваиваем переменной класс узла "Кнопка удаления карточки";
  const likeButton = card.querySelector('.element__button-like'); // присваиваем переменной класс узла "Кнопка Лайк";
  likeButton.addEventListener('click', changeLikeButtonColor); // подключаем "слушатель", вызывающий функцию "changeLikeButtonColor" при нажатии на кнопку "Лайк";
  removeButton.addEventListener('click', removeCard); // подключаем "слушатель", вызывающий функцию "removeCard" при нажатии на кнопку "Удалить карточку";
  headerCard.textContent = item.name; // присваиваем текстовому содержимому узла "Заголовок карточки" значение ключа "Имя" из заданного массива;
  imageCard.src = item.link; // присваиваем атрибуту узла "Изображение карточки" значение ключа "Ссылка" из заданного массива;
  imageCard.alt = item.name; // присваиваем атрибуту узла "Изображение карточки" значение ключа "Имя" из заданного массива;
  imageCard.addEventListener('click', openPopupPreview); // подключаем "слушатель", вызывающий функцию "openPopupPreview" при нажатии на изображение карточки;
  return card; // возвращаем в функцию значение сформированной карточки;
}

function composeListCard () { // объявляем функцию, формирующую из заданного массива список карточек с изображением, подписью и кнопками;
  const listCards = initialCards.map(createCard); // присваиваем переменной массив, сформированный из исходного массива и преобразованный с помощью функции "createCard";
  cardItemsList.append(...listCards); // вставляем в проект полученный массив и раскладываем его на аргументы;
}

composeListCard(); // вызываем функцию для формирования карточек при загрузке страницы;
*/

function openEditPopup() { // объявляем функцию, реализующую открытие "Попап-окна";
  openPopup(popupEditInfo); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  inputUserName.value = userName.textContent; // присваиваем полю ввода "Имя" формы "Попап-окна" текстовое содержимое заголовка секции "Профиль";
  inputUserAbout.value = userDescription.textContent; // присваиваем полю ввода "О себе" формы "Попап-окна" текстовое содержимое подзаголовка секции "Профиль";
}

buttonOpenInfo.addEventListener('click', openEditPopup); // подключаем "слушатель", вызывающий функцию openClosePopup при нажатии на кнопку "Войти";

function openPopup(item) { // объявляем функцию с аргументом, реализующую открытие любого "Попап-окна";
  item.classList.add('popup_active'); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока; popup_active
  overlay.addEventListener('keydown', handleKeydown); // подключаем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
  item.addEventListener('click', closePopupByOverlayClick); // подключаем слушатель, реализующий закрытие попап-окон при клике по оверлею;
}

function handleKeydown(evt){ // объявляем функцию, реализующую закрытие любого "Попап-окна" при нажатии клавиши "Esc";
  const activePopup = document.querySelector('.popup_active'); // находим в проекте класс активного попап-окна;
  if (evt.key === 'Escape') { // если нажата клавиша Esc -
    closePopup(activePopup); // вызываем функцию closePopup;
  }
}

function closePopupByOverlayClick(evt) { //объявляем функцию, закрывающую popup при нажатии по overlay;
  const activePopup = document.querySelector('.popup_active'); // находим в проекте класс активного попап-окна;
  if (evt.target.classList.contains('popup__container') || // если класс элемента, по которому кликнули, "popup__container"
      evt.target.classList.contains('profile-popup')) { // или "profile-popup" -
    closePopup(activePopup); // вызывает функцию closePopup;
  }
}

function closePopup(item) { // объявляем  функцию с аргументами, реализующую закрытие любого "Попап-окна";
  item.classList.remove('popup_active'); // удаляем у класса "Попап-окна" модификатор, реализующий видимость блока; popup_active
  overlay.removeEventListener('keydown', handleKeydown); // удаляем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
  item.removeEventListener('click', closePopupByOverlayClick); // удаляем "слушатель", вызывающий функцию closePopupByOverlayClick при клике по оверлею;
}



function openAddElementPopup() { // объявляем функцию, реализующую открытие "Попап-окна МЕСТО";
  openPopup(popupAddCard); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  addPopupForm.reset(); // удаляем данные  формы при открытии попапа;
}


function handleFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  evt.preventDefault(); // отменяем стандартную отправку формы(т.е. отправка формы — браузер стандартно бы перезагрузил страницу - отменяем перезагрузку);
  userName.textContent = inputUserName.value; // заменяем текстовое содержимое заголовка секции "Профиль" значением поля ввода "Имя" формы "Попап-окна";
  userDescription.textContent = inputUserAbout.value; // заменяем текстовое содержимое подзаголовка секции "Профиль" значением поля ввода "О себе" формы "Попап-окна";
  closePopup(popupEditInfo); // реализуем автоматическое закрытие "Попап-окна";
}

function handleAddElementFormSubmit(evt) { // объявляем функцию, реализующую сохранение значений полей ввода данных и создание новой карточки;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  //const newCardTitle = inputNameCard.value; // присваиваем переменной значение, введенноё пользователем в поле "Название";
  //const newCardLink = inputLinkCard.value; // присваиваем переменной значение, введенноё пользователем в поле "Ссылка";
  //const newElement = addCard({ name: newCardTitle, link: newCardLink });//addCard => createCard({ name: newCardTitle, link: newCardLink }); // присваиваем переменной значение новой сформированной карточки;
  //NewCardTitle, NewCardLink, NewElement  -все это нужно с Маленькой буквы написать, так как обычно только Классы и Компоненты называются с большой буквы - Gennadiy Barsegyan, ревьюер - 1е ревью 5я ПР

  //cardItemsList.prepend(newElement); // вставляем новую карточку в начало списка; append - в конец
  //closePopup(popupAddCard); // закрываем попап-окно;
  const card = new Card({ name: inputNameCard.value, link: inputLinkCard.value }, '.card', openPopupPreview);
  const cardElement = card.getCard();
  addCard(cardElement, false);
  closePopup(popupAddCard);
}




buttonOpenAddCard.addEventListener('click', openAddElementPopup); // подключаем "слушатель", вызывающий функцию "openAddElementPopup" при нажатии на кнопку "Добавить элемент";
closeButtonAddElementPopup.addEventListener('click', () => closePopup(popupAddCard)); // подключаем "слушатель", вызывающий функцию "closePopup" при нажатии на кнопку "Закрыть";
formAddCard.addEventListener('submit', handleAddElementFormSubmit); // подключаем "слушатель", вызывающий функцию handleAddElementFormSubmit при нажатии на кнопку "Создать";
closeButtonImagePopup.addEventListener('click', () => closePopup(popupPreview)); // подключаем "слушатель", вызывающий функцию "closePopup" при нажатии на кнопку "Закрыть";

closeButton.addEventListener('click', () => closePopup(popupEditInfo)); // подключаем "слушатель", вызывающий функцию "closePopup" при нажатии на кнопку "Закрыть";
formProfileInfo.addEventListener('submit', handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";



//Объект с данными для валидации форм.
const validationConfig = { 
  formSelector: '.popup__form', // т.е configObj.formSelector = '.popup__form'  - 2шт
  inputSelector: '.popup__input', // т.е configObj.inputSelector = '.popup__form' - 4 шт
  submitButtonSelector: '.popup__button', // - 2 кнопки сохранить, по 1 в каждом попапе
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible' // т.е. configObj.errorClass = 'popup__error_visible'
};


//Создание экземпляров форм и их валидация
const validationAddCard = new FormValidator(validationConfig, formAddCard);
validationAddCard.enableValidation();

const validationProfileInfo = new FormValidator(validationConfig, formProfileInfo);
validationProfileInfo.enableValidation();