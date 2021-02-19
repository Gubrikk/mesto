  export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
  
    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    setUserInfo(data) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    updateAvatar(avatar) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
            avatar: avatar
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }
  
}