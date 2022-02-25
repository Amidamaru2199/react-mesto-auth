import React, { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext, CurrentUserContext1 } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete}) {
  
  const translation = useContext(CurrentUserContext);
  const translationCards = useContext(CurrentUserContext1);

    return (
      
        <main>
            <section className="profile container__profile">
              <div className="profile__info">
                <img className="profile__image" src={translation.avatar} alt="Лого" />
                <button className="profile__pen" onClick={onEditAvatar} />
                <div className="profile__text">
                  <div className="profile__title">
                    <h1 className="profile__name">{translation.name}</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                  </div>
                  <p className="profile__description">{translation.about}</p>
                </div>
              </div>
              <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </section>
                <ul className="elements container__elements">
                  {
                    translationCards.map((card) => <Card
                    key={card._id}
                    card={card}
                    onCardClick={onCardClick}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                    />)
                  }
                </ul>
          </main>
      
              );
  }
  
  export default Main;