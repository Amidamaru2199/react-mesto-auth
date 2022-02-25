import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpened, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpened]);

    function handleChangeName(e) {
        setName(e.target.value);
    };

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();

        onUpdateUser({
            name,
            about: description,
          });
    }

    return (
        <PopupWithForm
        name={'edit'}
        title={'Редактировать профиль'}
        isOpened={isOpened}
        onClose={onClose}
        onSubmit={handleSubmit}
        btnText={'Сохранить'}
        >
        <>
        <input
             placeholder="Имя"
             name="name"
             type="text"
             className="popup__field"
             id="name-field"
             autoComplete="off"
             required
             value={name}
             onChange={handleChangeName}
             minLength="2"
             maxLength="40"
             />
            <span className="popup__error name-field-error"></span>
            <input
             placeholder="Профессия"
             name="profession"
             type="text"
             className="popup__field"
             id="profession-field"
             autoComplete="off"
             required
             value={description}
             onChange={handleChangeDescription}
             minLength="2"
             maxLength="200"
             />
            <span className="popup__error profession-field-error"></span>
            
        </>
      </ PopupWithForm> 
    );   
  }
  
  export default EditProfilePopup;