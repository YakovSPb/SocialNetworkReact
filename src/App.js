import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from 'react-router-dom';



const App = (props) => {
  return (
    <div className="inner">
      <Header />
    <div className='app-wrapper'>
      <Navbar />
      <Sidebar />
      <div className ='app-wrapper-content'>
      	<Route exact path='/dialogs' render={ () => <DialogsContainer /> } />
        <Route path='/profile' render={ () => <Profile /> } />
      	<Route path='/news' component={News}/>
      	<Route path='/music' component={Music}/>
      	<Route path='/settings' component={Settings}/>
      </div>
    </div>
    </div>
    );
}



export default App;