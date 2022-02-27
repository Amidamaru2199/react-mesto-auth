function ImagePopup({card, onClose}) {
  
    return (
        <div className={`popup popup-image ${(card.title && card.src) ? 'popup_is-opened' : ''}`}>
            <div className="popup-image__containers">
              <img className="popup-image__img" alt={card.title} src={card.src}/>
              <h3 className="popup-image__text">{card.title}</h3>
              <button type="button" className="popup__close-button" onClick={onClose} />
            </div>
          </div>
    )
}

export default ImagePopup