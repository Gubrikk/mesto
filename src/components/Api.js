  export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
 
    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse)
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
            .then(this._checkResponse)
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
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
        });
    }

    getInitialCards() {
        return fetch(`${this._url}cards`, {
            headers: this._headers
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
        });
    }

    addNewCard(data) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
            name: data.name,
            link: data.link
            })
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
        });
    }
  
    deleteCard(card) {
        return fetch(`${this._url}cards/${card}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
        });
    }

    addLikeCard(card) {
        return fetch(`${this._url}cards/likes/${card}`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
        });
    }
    
    deleteLikeCard(card) {
        return fetch(`${this._url}cards/likes/${card}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
        });
    }
}