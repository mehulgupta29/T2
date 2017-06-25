import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import actions from '../../actions/actions';

class LandingComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    const {user} = this.props;

    return (
      <div style={landingStyles}>
        Welcome, {user.email}
        <Button onClick={(event) => this.handleUserLogout(event)}><Glyphicon glyph="log-out" /> Logout</Button>
      </div>
    );
  }

  handleUserLogout(event) {
    event.preventDefault();
    const {dispatch} = this.props;

    firebase.auth().signOut()
      .then(() => {
        dispatch(actions.logout());
      }).catch(error => {
        console.log("error while logging out", error);
        alert("error while trying to logout");
      });
  }

}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LandingComponent);

const landingStyles = {
  backgroundColor: '#158dff'
};
