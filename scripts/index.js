const templateElement = document.querySelector('.card'); // выбираем в проекте класс шаблона секции изображений;
const editButton = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "Войти";


const profilePopup = document.querySelector('.profile-popup'); // выбираем в проекте класс "Попап-окна";
//и добавьте слово profile во все элементы, которые с ним связаны, а то они слишком нейтрально зазываются
//Это попап Профиля, поэтому нужно более конкретно назвать переменную:  const profilePopup = document.querySelector('.profile-popup');
// и искать его нужно по конкретному Селектору (классу profile-popup)
// иначе Вы сейчас находите первый попавшийся Попап - Gennadiy Barsegyan, ревьюер - 1е ревью 5я ПР

const closeButton = profilePopup.querySelector('.popup__button-close'); // выбираем в проекте класс кнопки "Закрыть";
//Крестик нужно искать внутри попапа Профиля, а то класс popup__button-close является общим классом для всех Крестиков в проекте
// и сейчас Вы просто находите первый попавшийся Крестик - если поменять верстку, то приложение сломается
// и добавьте слово profile во все элементы, которые с ним связаны, а то они слишком нейтрально зазываются - Gennadiy Barsegyan, ревьюер, 1е ревью 5я ПР

const form = profilePopup.querySelector('.popup__form'); // выбираем в проекте класс формы в "Попап-окне";
//форму нужно искать внутри попапа Профиля, а то класс popup__form является общим для всех форм в проекте - Gennadiy Barsegyan, ревьюер, 1е ревью 5я ПР

const inputName = form.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
const inputAbout = form.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне";
const profileTitle = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль";
const profileSubtitle = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль";
const cardsContainer = document.querySelector('.elements'); // выбираем класс списка изображений в шаблоне;
const addButton = document.querySelector('.profile__add-button'); // выбираем в проекте класс кнопки "Добавить";
const addElementPopup = document.querySelector('.popup_content_add-element'); // выбираем в проекте модификатор "Попап-окна";
const closeButtonAddElementPopup = document.querySelector('.popup__button-close_place_add-element'); // выбираем в проекте модификатор кнопки "Закрыть";
const inputTitle = document.querySelector('.popup__input_data_title'); // выбираем в проекте класс поля ввода "Название" формы в попап-окне "Добавить элемент";
const inputLink = document.querySelector('.popup__input_data_link'); // выбираем в проекте класс второго поля ввода "Ссылка" формы в попап-окне "Добавить элемент";
const newElementForm = document.querySelector('.popup__form_place_add-element'); // выбираем в проекте модификатор формы в "Попап-окне";
const imagePopup = document.querySelector('.popup_place_image-popup'); // выбираем в проекте класс "Попап-окна";
const photoImagePopup = document.querySelector('.popup__image'); // выбираем в проекте класс изображения "Попап-окна";
const captionImagePopup = document.querySelector('.popup__caption'); // выбираем в проекте класс подписи к изображению "Попап-окна";
const closeButtonImagePopup = document.querySelector('.popup__button-close_place_image-popup'); // выбираем в проекте класс кнопки "Закрыть";
const overlay = document.querySelector('.project-area'); // выбираем в проекте класс тега <body>;
const addPopupForm = document.querySelector('.popup__form_place_add-element'); // выбираем в проекте класс формы в "Попап-окне" добавления нового элемента;


const openImagePopup = (evt) => { // объявляем стрелоччную функцию, реализующую открытие попап-окна для просмотра выбранного изображения XXL;
  const captionValue = evt.target.closest('.element'); // присваиваем переменной класс карточки, по изображению которой кликнул пользователь;
  openPopup(imagePopup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  photoImagePopup.src = evt.target.src; // присваиваем атрибуту изображения попап-окна значение атрибута выбранного изображения карточки;
  captionImagePopup.textContent = captionValue.textContent; // присваиваем текстовому содержимому подписи к изображению попап-окна текстовое содержимое заголовка выбранной карточки;
} // ОБРАТИЛ ВНИМАНИЕ, ЧТО ЕСЛИ СТРЕЛОЧНУЮ ФУНКИЮ openImagePopup, removeCard ИЛИ changeLikeButtonColor РАЗМЕСТИТЬ В КОНЦЕ ФАЙЛА, ТО САЙТ НЕ ПОДНИМАЕТСЯ)))
  // НО ЕСЛИ ИЗ СТРЕЛОЧНОЙ ФУНКЦИИ (=>) СДЕЛАТЬ ПРОСТУЮ, ОБЪЯВЛЕННУЮ ЧЕРЕЗ function openImagePopup() ТО ЕЕ МОЖНО РАЗМЕЩАТЬ ХОТЬ В КОНЦЕ ФАЙЛА, ОНА ПОДНИМЕТСЯ И САЙТ ЗАРАБОТАЕТ!)

const removeCard = (evt) => { // объявляем функцию, реализующую удаление карточки из списка;
  const targetElement = evt.target.closest('.element'); // присваиваем переменной класс карточки, по кнопке удаления которой кликнул пользователь;
  targetElement.remove(); // удаляем карточку, по кнопке которой кликнул пользователь;

  //не нужно удалять обработчики с кнопки удаления, лайка и клика по картинке - при удалении карточки они тоже не будут больше работать - КРУТО!!!
  /*const imageCard = targetElement.querySelector('.element__image'); // присваиваем переменной класс узла "Изображение карточки";
  const removeButton = targetElement.querySelector('.element__remove-button'); // присваиваем переменной класс узла "Кнопка удаления карточки";
  const likeButton = targetElement.querySelector('.element__button-like'); // присваиваем переменной класс узла "Кнопка Лайк";
  imageCard.removeEventListener('click', openImagePopup); // снимаем "слушатель", вызывающий функцию "openImagePopup" при нажатии на изображение карточки;
  removeButton.removeEventListener('click', removeCard); // снимаем "слушатель", вызывающий функцию "removeCard" при нажатии на кнопку "Удалить карточку";
  likeButton.removeEventListener('click', changeLikeButtonColor); // снимаем "слушатель", вызывающий функцию "changeLikeButtonColor" при нажатии на кнопку "Лайк";*/
}

const  changeLikeButtonColor = (evt) => { // объявляем функцию, реализующую нажатие кнопки "Лайк" выбранного изображения;
  evt.target.classList.toggle('element__button-like_active'); // добавляем классу кнопки "Лайк" модификатор, реализующий изменение цвета кнопки по клику пользователя;
}

const createCard = (item) => { // объявляем, используя стролочную функцию, формирующую из шаблона template в проекте стандарную карточку с изображением, подписью и кнопками;
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
  imageCard.addEventListener('click', openImagePopup); // подключаем "слушатель", вызывающий функцию "openImagePopup" при нажатии на изображение карточки;
  return card; // возвращаем в функцию значение сформированной карточки;
}

const composeListCard = () => { // объявляем, используя стролочную функцию, формирующую из заданного массива список карточек с изображением, подписью и кнопками;
  const listCards = initialCards.map(createCard); // присваиваем переменной массив, сформированный из исходного массива и преобразованный с помощью функции "createCard";
  cardsContainer.append(...listCards); // вставляем в проект полученный массив и раскладываем его на аргументы;
}

composeListCard(); // вызываем функцию для формирования карточек при загрузке страницы;


const openEditPopup = () => { // объявляем функцию, реализующую открытие "Попап-окна";
  openPopup(profilePopup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  inputName.value = profileTitle.textContent; // присваиваем полю ввода "Имя" формы "Попап-окна" текстовое содержимое заголовка секции "Профиль";
  inputAbout.value = profileSubtitle.textContent; // присваиваем полю ввода "О себе" формы "Попап-окна" текстовое содержимое подзаголовка секции "Профиль";
}

editButton.addEventListener('click', openEditPopup); // подключаем "слушатель", вызывающий функцию openClosePopup при нажатии на кнопку "Войти";

const openPopup = (item) => { // объявляем функцию с аргументом, реализующую открытие любого "Попап-окна";
  item.classList.add('popup_active'); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока; popup_active
  overlay.addEventListener('keydown', handleKeydown); // подключаем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
  item.addEventListener('click', closePopupByOverlayClick); // подключаем слушатель, реализующий закрытие попап-окон при клике по оверлею;
}
const handleKeydown = (evt) =>{ // объявляем функцию, реализующую закрытие любого "Попап-окна" при нажатии клавиши "Esc";
  const activePopup = document.querySelector('.popup_active'); // находим в проекте класс активного попап-окна;
  if (evt.key === 'Escape') { // если нажата клавиша Esc -
    closePopup(activePopup); // вызываем функцию closePopup;
  }
}

const closePopupByOverlayClick = (evt) => { //объявляем, используя стролочную функцию, закрывающую popup при нажатии по overlay;
  const activePopup = document.querySelector('.popup_active'); // находим в проекте класс активного попап-окна;
  if (evt.target.classList.contains('popup__container') || // если класс элемента, по которому кликнули, "popup__container"
      evt.target.classList.contains('profile-popup')) { // или "profile-popup" -
    closePopup(activePopup); // вызывает функцию closePopup;
  }
}

const closePopup = (item) => { // объявляем стрелочную функцию с аргументами, реализующую закрытие любого "Попап-окна";
  item.classList.remove('popup_active'); // удаляем у класса "Попап-окна" модификатор, реализующий видимость блока; popup_active
  overlay.removeEventListener('keydown', handleKeydown); // удаляем "слушатель", вызывающий функцию handleKeydown при нажатии на клавишу;
  item.removeEventListener('click', closePopupByOverlayClick); // удаляем "слушатель", вызывающий функцию closePopupByOverlayClick при клике по оверлею;
}



const openAddElementPopup = () => { // объявляем функцию, реализующую открытие "Попап-окна МЕСТО";
  openPopup(addElementPopup); // добавляем классу "Попап-окна" модификатор, реализующий видимость блока;
  addPopupForm.reset(); // удаляем данные  формы при открытии попапа;
}


const handleFormSubmit = (evt) => { // объявляем функцию, реализующую сохранение значений полей ввода данных и отправку формы;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  profileTitle.textContent = inputName.value; // заменяем текстовое содержимое заголовка секции "Профиль" значением поля ввода "Имя" формы "Попап-окна";
  profileSubtitle.textContent = inputAbout.value; // заменяем текстовое содержимое подзаголовка секции "Профиль" значением поля ввода "О себе" формы "Попап-окна";
  closePopup(profilePopup); // реализуем автоматическое закрытие "Попап-окна";
}

const handleAddElementFormSubmit = (evt) => { // объявляем функцию, реализующую сохранение значений полей ввода данных и создание новой карточки;
  evt.preventDefault(); // отменяем стандартную отправку формы;
  const newCardTitle = inputTitle.value; // присваиваем переменной значение, введенноё пользователем в поле "Название";
  const newCardLink = inputLink.value; // присваиваем переменной значение, введенноё пользователем в поле "Ссылка";
  const newElement = createCard({ name: newCardTitle, link: newCardLink }); // присваиваем переменной значение новой сформированной карточки;
  //NewCardTitle, NewCardLink, NewElement  -все это нужно с Маленькой буквы написать, так как обычно только Классы и Компоненты называются с большой буквы - Gennadiy Barsegyan, ревьюер - 1е ревью 5я ПР

  cardsContainer.prepend(newElement); // вставляем новую карточку в начало списка;
  closePopup(addElementPopup); // закрываем попап-окно;
}




addButton.addEventListener('click', openAddElementPopup); // подключаем "слушатель", вызывающий функцию "openAddElementPopup" при нажатии на кнопку "Добавить элемент";
closeButtonAddElementPopup.addEventListener('click', () => closePopup(addElementPopup)); // подключаем "слушатель", вызывающий функцию "closePopup" при нажатии на кнопку "Закрыть";
newElementForm.addEventListener('submit', handleAddElementFormSubmit); // подключаем "слушатель", вызывающий функцию handleAddElementFormSubmit при нажатии на кнопку "Создать";
closeButtonImagePopup.addEventListener('click', () => closePopup(imagePopup)); // подключаем "слушатель", вызывающий функцию "closePopup" при нажатии на кнопку "Закрыть";

closeButton.addEventListener('click', () => closePopup(profilePopup)); // подключаем "слушатель", вызывающий функцию "closePopup" при нажатии на кнопку "Закрыть";
form.addEventListener('submit', handleFormSubmit); // подключаем "слушатель", вызывающий функцию handleFormSubmit при нажатии на кнопку "Сохранить";