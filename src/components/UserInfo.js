//Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.

export default class UserInfo {
    constructor(userNameSelector, bioSelector) {
        this._username = document.querySelector(userNameSelector);

        this._bio = document.querySelector(bioSelector)
    }

    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
    // Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo () {
        this._userInfo = {};
        this._userInfo.username = this._username.textContent;

        this._userInfo.bio = this._bio.textContent;
        return this._userInfo;
    }

    // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo (username, bio) {
        this._username.textContent = username;
        this._bio.textContent = bio
    }
}