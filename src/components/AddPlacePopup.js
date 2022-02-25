import React, { useContext, useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext1 } from '../contexts/CurrentUserContext';

function AddPlacePopup ({isOpened, onClose, onAddPlace}) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
};

function handleChangeLink(e) {
    setLink(e.target.value);
};

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name,
      link: link
    })
  };

  useEffect(() => {
    setName('');
    setLink('');
}, [isOpened]);


    
    return (
        <PopupWithForm 
        name={'card'} 
        title={'Новое место'} 
        isOpened={isOpened} 
        onClose={onClose}
        onSubmit={handleSubmit}
        btnText={'Сохранить'}
        >
            <>
            <input
                 placeholder="Название"
                 name="name"
                 type="text"
                 className="popup__field"
                 id="title-field"
                 autoComplete="off"
                 required
                 value={name}
                 onChange={handleChangeName}
                 minLength="2"
                 maxLength="30"
                 />
                <span className="popup__error title-field-error"></span>
                <input
                 placeholder="Ссылка на картинку"
                 name="link"
                 type="url"
                 className="popup__field"
                 id="link-field"
                 required
                 autoComplete="off"
                 value={link}
                 onChange={handleChangeLink}
                 />
                <span className="popup__error link-field-error"></span>
                
            </>
          </ PopupWithForm>
    );   
  }
  
  export default AddPlacePopup ;