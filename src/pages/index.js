import Card from '../componets/Card.js';
import FormValidator from '../componets/FormValidator.js';
import {initialCards, templateElement, addPopupForm, buttonOpenAddCard, buttonOpenInfo, cardItemsList, closeButton, closeButtonAddElementPopup, closeButtonImagePopup, formAddCard, inputLinkCard, inputNameCard, inputUserName, inputUserAbout, popupAddCard, formProfileInfo, overlay, popupEditInfo, popupPreview, popupPreviewFigcaption, popupPreviewImage, userDescription, userName} from '../utils/constants.js';




function  openPopupPreview (evt)  { //*** */ объявляем функцию, реализующую открытие попап-окна для просмотра выбранного изображения XXL; стрелочную переделал в обычную для this openImagePopup => openPopupPreview (evt)
  const captionValue = evt.target.closest('.element'); // присваиваем переменной класс карточки, по изображению которой кликнул пользователь;
  openPopup(popupPreview); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  popupPreviewImage.src = evt.target.src; // присваиваем атрибуту изображения попап-окна значение атрибута выбранного изображения карточки;
  popupPreviewFigcaption.textContent = captionValue.textContent; // `ЖЫВЕ Беларусь !` присваиваем текстовому содержимому подписи к изображению попап-окна текстовое содержимое заголовка выбранной карточки;
} // ОБРАТИЛ ВНИМАНИЕ, ЧТО ЕСЛИ СТРЕЛОЧНУЮ ФУНКИЮ openPopupPreview, removeCard ИЛИ changeLikeButtonColor РАЗМЕСТИТЬ В КОНЦЕ ФАЙЛА, ТО САЙТ НЕ ПОДНИМАЕТСЯ)))
  // НО ЕСЛИ ИЗ СТРЕЛОЧНОЙ ФУНКЦИИ (=>) СДЕЛАТЬ ПРОСТУЮ, ОБЪЯВЛЕННУЮ ЧЕРЕЗ function openPopupPreview() ТО ЕЕ МОЖНО РАЗМЕЩАТЬ ХОТЬ В КОНЦЕ ФАЙЛА, ОНА ПОДНИМЕТСЯ И САЙТ ЗАРАБОТАЕТ!)

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

/* => перенес рефакторингом в => Class Card
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

composeListCard(); // -  вызываем функцию для формирования карточек при загрузке страницы
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


//Создаем экземпляры форм и их валидацию
const validationAddCard = new FormValidator(validationConfig, formAddCard);
validationAddCard.enableValidation();

const validationProfileInfo = new FormValidator(validationConfig, formProfileInfo);
validationProfileInfo.enableValidation();