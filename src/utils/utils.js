export const editPopupElement = document.querySelector('.popup_type_edit');//попап для редактирования профиля
export const editPopupOpenButtonElement = document.querySelector('.profile__edit-button');//кнопка для открытия попапа редактирования профиля
export const editFormElement = editPopupElement.querySelector('.popup__form');//форма попапа редактирования профиля
export const nameInput = editFormElement.querySelector('#name-field');//поле ввода из формы попапа редактирования профиля
export const jobInput = editFormElement.querySelector('#profession-field');//поле ввода из формы попапа редактирования профиля

export const cardPopupElement = document.querySelector('.popup_type_card');//попап для добавления карточек
export const cardPopupOpenButtonElement = document.querySelector('.profile__add-button');//кнопка для открытия попапа добавления карточек

export const addFormElement = cardPopupElement.querySelector('.popup__form');//форма попапа добавления карточек

export const avatarPopup = document.querySelector('.popup_type_avatar');
export const avatarFormElement = avatarPopup.querySelector('.popup__form');
export const avatarFormElementInput = avatarFormElement.querySelector('#avatar-field');
//export const avatar = document.querySelector('.profile__image');
export const avatarPopupOpenButtonElement = document.querySelector('.profile__pen');

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__field_invalid',
    errorClass: 'popup__error'
  };

  