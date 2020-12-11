import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  return (
    <div className="inner">
      <Header />
    <div className='app-wrapper'>
      <Navbar />
      <Sidebar />
      <div className ='app-wrapper-content'>
      	<Route exact path='/dialogs' render={ () => <DialogsContainer /> } />
        <Route path='/profile' render={ () => <ProfileContainer /> } />
        <Route path='/users' render={ () => <UsersContainer /> } />
      	<Route path='/news' component={News}/>
      	<Route path='/music' component={Music}/>
      	<Route path='/settings' component={Settings}/>
      </div>

    </div>
    </div>
    );
}



export default App;