import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpened, onClose, onUpdateAvatar}) {
    const inputRef = useRef();
    

    function handleSubmit(e) {
      e.preventDefault();
      console.log('inputRef.current.value', inputRef.current.value)
      onUpdateAvatar({avatar: inputRef.current.value});
    };

    return (
        <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        isOpened={isOpened}
        onClose={onClose}
        onSubmit={handleSubmit}
        btnText={'Сохранить'}
        >
        <>
        <input
             placeholder="Новый аватар"
             name="image"
             type="url"
             className="popup__field popup__field_avatar"
             id="avatar-field"
             autoComplete="off"
             required
             /*value=""*/
             ref={inputRef}
             />
            <span className="popup__error avatar-field-error"></span>
            
        </>
      </ PopupWithForm>  
    );   
  }
  
  export default EditAvatarPopup;