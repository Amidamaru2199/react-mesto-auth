import React from "react"

function PopupWithForm({title, name, children, isOpened, onClose, onSubmit, btnText}) {
    return (
        <div className={`popup popup_type_${name} ${isOpened && 'popup_is-opened'}`}>
            <div className="popup__container">
              <h2 className="popup__title">{title}</h2>
              <form name={`${name}-form`} onSubmit={onSubmit} className="popup__form">
                {children}
                <button className="popup__button" type="submit">{btnText}</button>
              </form>
              <button type="button" className="popup__close-button" onClick={onClose} />
            </div>
          </div>
    )
}

export default PopupWithForm