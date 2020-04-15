import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import '../main/styles/bootstrap.min.css';
import {connect} from 'react-redux';
import HomePage from './components/pages/HomePage/HomePage'
import LoginPage from './components/pages/LoginPage/LoginPage'
import RegisterPage from './components/pages/RegisterPage/RegisterPage'
import RouteDirector from './helpers/RouteDirector'
import history from './helpers/RouteHistory';

function App() {
    return (
        <Router history={history}>
            <Switch>
                <RouteDirector exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </Router>
    );
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
