import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';

class HeaderToolbarComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    console.log("header toolbar component", this.props);
    const {user, handleUserLogout, style} = this.props;

    return (
      <div style={style}>
        <div className="header-toolbar-welcome-user" style={styles.welcomeUser}>
          Welcome, {user.email}
        </div>
        <Button
          className="header-toolbar-logout-btn"
          style={styles.logoutBtn}
          onClick={(event) => handleUserLogout(event)}>
          <Glyphicon glyph="log-out" />&nbsp;Logout
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HeaderToolbarComponent);

const styles = {
  landingStyles: {
    backgroundColor: '#158dff',
    float: 'right'
  },
  welcomeUser: {
    padding: '5px 10px',
    display: 'inline-block',
    fontSize: '15px'
  },
  logoutBtn: {
    padding: '5px 10px',
    float: 'right',
    border: '0 solid transparent'
  }
};
