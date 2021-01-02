console.log('проверим в консоли подключился ли JS!!!'); //проверим в консоли подключился ли JS!!!
// определяем через let переменные с которыми будем работать
let popup = document.querySelector('.popup'); // выбираем в проекте класс "Попап-окна"
let editButton = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "редактировать"
let closeButton = document.querySelector('.popup__button-close');// выбираем в проекте класс кнопки "закрыть popup"
let saveButton = document.querySelector('.popup__button_save'); // выбираем в проекте класс кнопки "сохранить popup"
let profileTitle = document.querySelector('.profile__title'); // выбираем в проекте класс заголовка секции "Профиль"
let profileSubtitle = document.querySelector('.profile__subtitle'); // выбираем в проекте класс подзаголовка секции "Профиль"
let popupName = document.querySelector('.popup__name'); //выбираем в проекте класс первого поля ввода "Имя" в popup
let popupOccupation = document.querySelector('.popup__occupation'); //выбираем в проекте класс первого поля ввода "О себе" в popup

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