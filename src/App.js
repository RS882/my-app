import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setIsClick } from './redux/modalReducer';
import { useEffect } from 'react';
import { initializApp } from './redux/appReducer';
import Preloader from './components/common/preloader/preloader';
import { getAppDate } from './redux/selectors';
import withSuspense from './components/HOC/withSuspense';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store';
import { delErrorMessageAll, setErrorMessageAll } from './redux/errorReducer';
import Modal from './components/common/modal/modal';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializApp())
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  const catchAllError = (error) => {
    dispatch(setErrorMessageAll(error.reason))
    console.log("Error occurred: " + error.reason.message);
  };


  useEffect(() => {
    window.addEventListener('unhandledrejection', catchAllError);
    window.addEventListener('error', catchAllError);
    return () => {
      window.removeEventListener('unhandledrejection', catchAllError);
      window.removeEventListener('error', catchAllError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  const onClickApp = () => { dispatch(setIsClick()) };

  const initializated = useSelector(state => getAppDate.initializated(state));

  const errorMessage = useSelector(state => state.error.errorMessage !== null && state.error.errorMessage.message && state.error.errorMessage.message);
  const delErrorMesage = () => dispatch(delErrorMessageAll());

  return (
    <>
      {errorMessage ? < Modal closeModal={delErrorMesage} content={errorMessage} /> : null}
      {!initializated ? <Preloader /> :
        <div className='app-wrapper' onClick={onClickApp}>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper__content'>
            <Switch>
              <Route exact path='/' render={() => < Redirect to={'/profile'} />} />
              <Route path='/dialogs' render={() => withSuspense(DialogsContainer)()} />
              <Route path='/profile/:userId?' render={() => withSuspense(ProfileContainer)()} />
              <Route path='/login' render={() => withSuspense(LoginPage)()} />
              <Route path='/news' render={() => withSuspense(News)()} />
              <Route path='/music' render={() => withSuspense(Music)()} />
              <Route path='/settings' render={() => withSuspense(Settings)()} />
              <Route path='/users' render={() => withSuspense(UsersContainer)()} />
              <Route path='*' render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
      }
    </>
  )
};


const AppContainer = () => {
  return (
    <React.StrictMode >
      <BrowserRouter basename='/social-network'>
        <Provider store={store}>
          <App />
        </Provider >
      </BrowserRouter >
    </React.StrictMode >
  )
}

export default AppContainer;