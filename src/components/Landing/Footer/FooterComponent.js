import React from 'react';
import {connect} from 'react-redux';

class FooterComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={styles.bodyRoot}>
        Footer Component
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(FooterComponent);

const styles = {
  bodyRoot: {
    backgroundColor: 'transparent'
  }
};
