import React from 'react';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import actions from '../../actions/actions';
import HeaderComponent from './Header/HeaderComponent';

class LandingComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <HeaderComponent
        handleUserLogout={(event) => this.handleUserLogout(event)}
        {... this.props}/>
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
