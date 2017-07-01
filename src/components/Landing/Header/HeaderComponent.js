import React from 'react';
import {connect} from 'react-redux';
import HeaderToolbarComponent from './HeaderToolbarComponent';

class HeaderComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    console.log("headerComponent",this.props);

    return (
      <div className="header-component" style={styles.headerStyles}>
        <div className="header-logo" style={styles.headerLogo}>
          Treatster
        </div>
        <HeaderToolbarComponent
          className="header-toolbar-component"
          style={styles.headerToolbar}
          handleUserLogout={(event) => this.handleUserLogout(event)}
          {... this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HeaderComponent);

const styles = {
  headerStyles: {
    display: 'inline-flex',
    width: '100%'
  },
  headerLogo: {
    margin: '20px 50px',
    minWidth: '250px',
    textAlign: 'left'
  },
  headerToolbar: {
    width: '100%',
    margin: 'auto',
    paddingRight: '50px',
    textAlign: 'right'
  }
};

