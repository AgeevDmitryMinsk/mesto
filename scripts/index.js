console.log('проверим в консоли подключился ли JS!!!'); //проверим в консоли подключился ли JS!!!
// проектная работа -4, определяем через let переменные с которыми будем работать (спринт 4 - let - когда переменную нужно перезаписать)
// Если переменная не перезаписывает своё значение, она объявлена через const - checklist-требование 5ой проектной работы
// const - когда переменную объявляешь и ее не нужно перезаписывать. Исправил let на const
const popup = document.querySelector('.popup'); // выбираем в проекте класс "Попап-окна"
const editButton = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "редактировать"
const closeButton = document.querySelector('.popup__button-close');// выбираем в проекте класс кнопки "закрыть popup"
const saveButton = document.querySelector('.popup__button-save'); // выбираем в проекте класс кнопки "сохранить popup"
const profileTitle = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль"
const profileSubtitle = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль"
const popupName = document.querySelector('.popup__input_name'); //выбираем в проекте класс первого поля ввода "Имя" в popup
const popupOccupation = document.querySelector('.popup__input_occupation'); //выбираем в проекте класс первого поля ввода "О себе" в popup
const formElement = document.querySelector('.form'); //выбираем в проекте класс "form"
//проектная работа -5, добавим template в html:
const templateElement = document.querySelector('.card'); // выбираем в проекте класс шаблона секции карточек-изображений;*
const cardsContainer = document.querySelector('.elements'); // выбираем класс списка изображений в шаблоне;*


editButton.addEventListener('click', () => {// при нажатии/кликании мышкой на openButton произойдет:
console.log('нажал кнопку editButton')
popup.classList.add('popup_opened'); // к классу popup добавился класс popup_opened, прописанный в CSS, всплывет popup! - магия!!!)
})

closeButton.addEventListener('click', () => { // при нажатии/кликании мышкой на closeButton произойдет:
    console.log('нажал кнопку closeButton') // в консоль выводтся сообщение "clicked openButton"
    popup.classList.remove('popup_opened'); // из класса popup убрал класс popup_opened, прописанный в CSS, 
                                            // popup схлопывается - магия!!!)    
})

/*из Вебинара 12/20 Георгия Девяткина "Работа с DOM":*/
popup.addEventListener('click', (event) => {//при нажатии/кликании мышкой на popup-overlay произойдет:
    console.log(event.target) // в консоль выводится сообщение о текущем событии (в консоль => кликнутый элемент html)
    if  (event.target === event.currentTarget) { //тоже самое, что event.target === popup
        popup.classList.remove('popup_opened');} // из класса popup убрал класс popup_opened, прописанный в CSS
})

saveButton.addEventListener('click', (event) => {
    console.log('нажал кнопку сохранить');
    if  (event.target === event.currentTarget) { //тоже самое, что event.target === saveButton
        profileTitle.textContent = popupName.value; // перенесем-сохраним набранное в теге input popupName в класс profileTitle в html
        profileSubtitle.textContent = popupOccupation.value; //перенесем-сохраним набранное в теге input popupOcup в класс profileSubtitle в html
        popup.classList.remove('popup_opened');} // из класса popup убрал класс popup_opened, прописанный в CSS        
})

function createCard(item) { // объявляем функцию, формирующую из шаблона в проекте стандарную карточку с изображением, подписью и кнопками;
    const card = templateElement.content.cloneNode(true); // клонируем содержимое шаблона в проекте;
    const headerCard = card.querySelector('.element__title'); // присваиваем переменной класс узла "Заголовок карточки";
    const imageCard = card.querySelector('.element__image'); // присваиваем переменной класс узла "Изображение карточки";
    const removeButton = card.querySelector('.element__remove-button'); // присваиваем переменной класс узла "Кнопка удаления карточки";
    const likeButton = card.querySelector('.element__button-like'); // присваиваем переменной класс узла "Кнопка Лайк";
    likeButton.addEventListener('click', changeLikeButtonColor); // подключаем "слушатель", вызывающий функцию "changeLikeButtonColor" при нажатии на кнопку "Лайк";
    //removeButton.addEventListener('click', removeCard); // подключаем "слушатель", вызывающий функцию "removeCard" при нажатии на кнопку "Удалить карточку";
    headerCard.textContent = item.name; // присваиваем текстовому содержимому узла "Заголовок карточки" значение ключа "Имя" из заданного массива;
    imageCard.src = item.link; // присваиваем атрибуту узла "Изображение карточки" значение ключа "Ссылка" из заданного массива;
    imageCard.alt = item.name; // присваиваем атрибуту узла "Изображение карточки" значение ключа "Имя" из заданного массива;
    //imageCard.addEventListener('click', openImagePopup); // подключаем "слушатель", вызывающий функцию "openImagePopup" при нажатии на изображение карточки;
    return card; // возвращаем в функцию значение сформированной карточки;
  }
  
  function createListCard() { // объявляем функцию, формирующую из заданного массива список карточек с изображением, подписью и кнопками;
    const listCards = initialCards.map(createCard); // присваиваем переменной массив, сформированный из исходного массива и преобразованный с помощью функции "createCard";
    cardsContainer.append(...listCards); // вставляем в проект полученный массив и раскладываем его на аргументы;
  }
  
  createListCard(); // вызываем функцию для формирования карточек при загрузке страницы;

  function changeLikeButtonColor(evt) { // объявляем функцию, реализующую нажатие кнопки "Лайк" выбранного изображения;
  evt.target.classList.toggle('element__button-like_active'); // добавляем классу кнопки "Лайк" модификатор, реализующий изменение цвета кнопки по клику пользователя;
}
  

















/*Функция-обработчик срабатывает в момент отправки формы, когда все обязательные поля заполнены. К сожалению,
 при успешной отправке формы и отсутствующем атрибуте action страница перезагружается — это называется 
 стандартным событием. Чтобы такого поведения не происходило — передайте в функцию-обработчик параметр evt.
 В самом начале тела функции вызовите метод evtent.preventDefault() — это отменит стандартное событие.
 Подробнее о стандартных событиях и об их отмене расскажем в следующих спринтах, а сейчас — переходите к заданиям: */
formElement.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Форма отправлена');
}); 