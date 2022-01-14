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
import { connect } from 'react-redux';
import { setClickTarget } from './redux/clickTargerReducer';


const App = (props) => {

  const onClickApp = (e) => props.setClickTarget(e.target)
  return (

    <div onClick={onClickApp} className='app-wrapper'>
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


export default connect(null, { setClickTarget })(App);
