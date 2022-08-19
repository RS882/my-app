import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { setIsClick } from './redux/modalReducer';

import { useEffect } from 'react';
import { initializApp } from './redux/appReducer';
import Preloader from './components/common/preloader/preloader';
import { getAppDate } from './redux/selectors';



const App = (props) => {

  const dispatch = useDispatch();
  useEffect(() => { dispatch(initializApp()) }, []);

  const onClickApp = () => { dispatch(setIsClick()) };

  const initializated = useSelector(state => getAppDate.initializated(state));



  if (!initializated) {
    return <Preloader />
  } else {
    return (

      <div className='app-wrapper' onClick={onClickApp}>
        <HeaderContainer />
        <Navbar />

        <div className='app-wrapper__content'>


          <Route path='/dialogs'
            render={() => < DialogsContainer />} />

          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/login'
            render={() => < LoginPage />} />


          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />

        </div>
      </div>

    );
  }
}

export default App;
