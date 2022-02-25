class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _getResponseData(res) {
      if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`); 
      }
      return res.json();
    };

      getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: this._headers                    
        })
          .then(res => this._getResponseData(res));
      };

      getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers                    
          })
          .then(res => this._getResponseData(res));
      };

      editProfile(profileData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: profileData.name,
                about: profileData.about
              })                  
          })
          .then(res => this._getResponseData(res));
      }

      createCard(cardData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
              })                  
          })
          .then(res => this._getResponseData(res));
      }

      deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,             
          })
          .then(res => this._getResponseData(res));
      }

      setLikes(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'PUT',
          headers: this._headers,             
        })
        .then(res => this._getResponseData(res));
      }

      deleteLikes(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'DELETE',
          headers: this._headers,             
        })
        .then(res => this._getResponseData(res));
      }

      /*cardVisibilityStatus(cardId, isOwn) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
          method: `${isOwn ? 'DELETE' : ""}`,
          headers: this._headers,
        })
        .then(res => this._getResponseData(res));
      }*/

      changeLikeCardStatus(cardId, isLiked) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: `${isLiked ? 'PUT' : 'DELETE'}`,
          headers: this._headers,
        })
        .then(res => this._getResponseData(res));
      }

      editAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
              avatar: avatar.avatar
            })                  
        })
        .then(res => this._getResponseData(res));
      }
};

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33',
  headers: {
    authorization: '08f9f164-aeb4-4a4d-a2a1-640ddc7d6c20',
    'Content-Type': 'application/json'
  }
});

