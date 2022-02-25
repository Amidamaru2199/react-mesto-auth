import React from "react";
import goodImg from "../images/good.svg"
import badImg from "../images/bad.svg"

function InfoTooltip({isOpened=true, isSuccess=false}) {
  const goodTitle = 'Вы успешно зарегистрировались!'
  const badTitle = 'Что-то пошло не так! Попробуйте еще раз.'

    return (
      <div id="infoTooltip" className={`popup popup-info ${isOpened && "popup_is-opened"} `}>
        <div className="popup__container">
          <button className="popup__close-button" type="button" onClick={onClose}/>
          <img src={isSuccess ? goodImg : badImg} className="popup__info-image" />
          <h2 className="popup__info-title">{isSuccess ? goodTitle : badTitle}</h2>
        </div>
      </div>
      
      
              );
  }
  
  export default InfoTooltip;