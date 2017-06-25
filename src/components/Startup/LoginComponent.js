import React from 'react';
import {connect} from 'react-redux';
import actions from '../../actions/actions';
import {Button} from 'react-bootstrap';

class LoginComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userToken: ''
    };
  }

  render() {
    return (
      <div style={loginStyles}>
        <Button onClick={(event) => this.handleLogin(event)}>Login using Google</Button>
        <Button onClick={(event) => this.handleSignUp(event)} disabled={true}>Sign Up</Button>
      </div>
    );
  }

  handleLogin(event) {
    event.preventDefault();

    const {firebase, dispatch} = this.props;
    const that = this;
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      that.setState({userToken: token});

      // The signed-in user info.
      const user = result.user;
      const USER = {
        email: user.email,
        uid: user.uid
      };
      dispatch(actions.setNewUserData(USER, firebase));
    }).catch(error => {

      // if (errorCode === 'auth/wrong-password') {
      //   alert('Wrong password.');
      // } else {
      //   alert(errorMessage);
      // }
      console.log(error);

    });
  }

  handleSignUp(event) {
    alert("Sign Up is under construction");

    // firebase.auth().createUserWithEmailAndPassword('mgupta4@gmail.com', 'Stevens135455').catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });
  }
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LoginComponent);

const loginStyles = {
  lineHeight: '100vh'
};
