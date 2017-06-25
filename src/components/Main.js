require('styles/App.css');

import React from 'react';
import LandingComponent from "./Landing/LandingComponent";
import LoginComponent from './Startup/LoginComponent';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import actions from '../actions/actions';
import * as _ from 'lodash';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDibGfWwpCxqUlgAfj6UYGMkudOH9UYcI0",
  authDomain: "treatster2-31d5f.firebaseapp.com",
  databaseURL: "https://treatster2-31d5f.firebaseio.com",
  projectId: "treatster2-31d5f",
  storageBucket: "",
  messagingSenderId: "879934100019"
};

class AppComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isUserLoggedIn: false,
      googleUser: null
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;

    // Initializing firebase
    firebase.initializeApp(config);

    /**
     * Checking if the user is already logged in.
     * If true, route the user to LandingComponent
     * Else, user is asked to 'login' or 'sign up'
     * */
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.setState({isUserLoggedIn: true});
        dispatch(actions.setNewUserData(user));
      }
    });
  }

  render() {
    const {isUserLoggedIn} = this.state;
    const {currentUser} = this.props;

    return (
      <div style={appStyles}>
        {isUserLoggedIn && !_.isEmpty(currentUser) ? <LandingComponent user={currentUser}/> : <LoginComponent firebase={firebase}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AppComponent);

const appStyles = {
  textAlign: 'center',
  height: '100vh',
  width: '100vw'
};
