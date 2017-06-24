import React from 'react';
import {Button} from 'react-bootstrap';

class LoginComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    const {firebase} = this.props;

    return (
      <div style={loginStyles}>
        <Button onClick={() => this.handleLogin()}>Login</Button>
        <Button onClick={() => this.handleSignUp()}>Sign Up</Button>
      </div>
    );
  }

  handleLogin() {
    // alert("Sign In");
    const {firebase} = this.props;

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log("Google User: ", token, " user: ", user);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });

    console.log("sign in done");

    // const userAuth = firebase.auth().signInWithEmailAndPassword('mgupta4@stevens.edu', 'Stevens135455').catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // [START_EXCLUDE]
    //   if (errorCode === 'auth/wrong-password') {
    //     alert('Wrong password.');
    //   } else {
    //     alert(errorMessage);
    //   }
    //   console.log(error);
    // });
  }

  handleSignUp() {
    alert("Sign Up is under construction");

    //
    //
    // firebase.auth().createUserWithEmailAndPassword('mgupta4@gmail.com', 'Stevens135455').catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });
  }
}

export default LoginComponent;

const loginStyles = {
  lineHeight: '100vh'
};
