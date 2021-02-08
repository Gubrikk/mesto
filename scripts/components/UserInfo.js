export default class UserInfo {
    constructor({profileName, profileJob}) {
        this._profileName = profileName;
        this._profileJob = profileJob;
    };

    getUserInfo() {
        const userInfo = {
            profileName: this._profileName.textContent,
            profileJob: this._profileJob.textContent
        };
        return userInfo;
    };

    setUserInfo(profileName, profileJob) {
        this._profileName.textContent = profileName;
        this._profileJob.textContent = profileJob;
    };
}