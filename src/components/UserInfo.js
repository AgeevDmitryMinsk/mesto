export default class UserInfo {
    constructor(userNameSelector, bioSelector) {
        this._username = document.querySelector(userNameSelector);

        this._bio = document.querySelector(bioSelector)
    }

    getUserInfo () {
        this._userInfo = {};
        this._userInfo.username = this._username.textContent;

        this._userInfo.bio = this._bio.textContent;
        return this._userInfo;
    }

    setUserInfo (username, bio) {
        this._username.textContent = username;
        this._bio.textContent = bio
    }
}