import '../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Register from './Register';
import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext, CurrentUserContext1 } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
import { register, getEmail, authorization } from './Auth';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';

function App() {
  const defaultUser = {
    _id: '',
    about: '',
    avatar: '',
    cohort: '',
    name: ''
  };

  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('jwt')));//наш стейт

  const history = useHistory();//наш хистори

  useEffect(() => {
    api.getUserInfo()
    .then(profileData => {
      setCurrentUser(profileData)
    })
    .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    api.getInitialCards()
    .then(cardData => {
      setCards(cardData.map((item => adapter(item))))
    })
    .catch((err) => console.log(err))
  }, []);

  useEffect(() => {//наш юс еффект
    tokenCheck();
  }, []);

  function tokenCheck() {//тоже что-то наше
    if(!localStorage.getItem('jwt')) return;

    const jwt = localStorage.getItem('jwt');

    getEmail(jwt).then((res) => {
      if(!res) return;
      
        const userData = {
          _id: res._id,
          email: res.email
        }

        setLoggedIn(true);
          
        history.push('/home')
    });
};

  function handleLogin(jwt) {
    localStorage.setItem('jwt', jwt);
    setLoggedIn(true);
  };

  function handleRegister() {
    
  };

  function adapter(serverCardData) {
    return {
      _id: serverCardData._id,
      src: serverCardData.link,
      title: serverCardData.name,
      likes: serverCardData.likes,
      owner: serverCardData.owner._id
    }
  };

  function handleCardLike(card) {
    
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => {

        return state.map((c) => c._id === card._id ? adapter(newCard) : c)
      });
    })
    .catch((err) => console.log(err))
  };

  function handleCardDelete(deletedCard) {

    api.deleteCard(deletedCard._id).then(() => {
            
      setCards(cards.filter(card => card._id !== deletedCard._id));      
  })
  .catch((err) => console.log(err))
  };

  function handleCardClick(card) {
    setSelectedCard(card)
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);    
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  function handleUpdateUser(profileData) {
    api.editProfile(profileData)
    .then(profileData => {
      setCurrentUser(profileData)
      closeAllPopups()
    })
    .catch((err) => console.log(err))
  };

  function handleUpdateAvatar(Avatar) {
    api.editAvatar(Avatar)
    .then(profileAvatar => {
      setCurrentUser(profileAvatar)
      closeAllPopups()
    })
    .catch((err) => console.log(err))
  };

  function handleAddPlaceSubmit(cardData) {
    api.createCard(cardData)
    .then((newCard) => {
      setCards([newCard, ...cards])
      closeAllPopups()
    })
    .catch((err) => console.log(err))
  };



  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <CurrentUserContext1.Provider value={cards}>
      <div className="page">
        <div className="container page__container">
          
          <Header />

          <Router>
            <Switch>
              <Route path='/sign-up'>
                <Register handleRegister={handleRegister} />
              </Route>

              <Route path='/sign-in'>
                <Login handleLogin={handleLogin} />
              </Route>

              <ProtectedRoute path='/home' loggedIn={loggedIn}>
                
              <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Footer />
              
          <EditProfilePopup isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

          <AddPlacePopup isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
              
          <PopupWithForm name={'confirm'} title={'Вы уверены?'}>
            <>
            <button className="popup__button" type="submit">Да</button>
            </>
          </ PopupWithForm>      
          
          <InfoTooltip />

          <EditAvatarPopup isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
              </ProtectedRoute>
            </Switch>
          </Router>
                        
        </div>
      </div>
      </CurrentUserContext1.Provider>          
      </CurrentUserContext.Provider>      
    </div>
            );
}

export default App;
