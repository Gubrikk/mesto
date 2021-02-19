export default class UserInfo {
    constructor({id, profileName, profileJob, profileAvatarImage}) {
        this._id = id;
        this._profileName = profileName;
        this._profileJob = profileJob;
        this._profileAvatarImage = profileAvatarImage;
    };

    getUserInfo() {
        const userInfo = {
            _id: this._id,
            profileName: this._profileName.textContent,
            profileJob: this._profileJob.textContent,
            profileAvatarImage: this._profileAvatarImage
        };
        return userInfo;
    };

    setUserInfo(id, profileName, profileJob, profileAvatarImage) {
        this._id = id;
        this._profileName.textContent = profileName;
        this._profileJob.textContent = profileJob;
        this._profileAvatarImage.src = profileAvatarImage;
    };
}