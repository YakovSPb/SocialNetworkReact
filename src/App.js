import React, {Suspense} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.js'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        console.log(reason);
}
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection",  this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection",  this.catchAllUnhandledErrors);
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="inner">
                <HeaderContainer/>
                <div className='app-wrapper'>
                    <Navbar/>
                    <Sidebar/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path='/dialogs' render={withSuspense(DialogsContainer)}/>
                            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                            <Route path='/users' render={() => <UsersContainer pageTitle={"Самураи"}/>}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/login' render={() => <LoginPage/>}/>
                            <Redirect from="/" to="/profile"/>
                            <Route path='*' render={() => <div> 404 NOT FOUND</div>}/>
                        </Switch>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;