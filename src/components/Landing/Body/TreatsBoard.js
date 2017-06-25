import React from 'react';
import {connect} from 'react-redux';

class TreatsBoard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="treats-board-root" style={styles.treatsBoardRoot}>
        Treats Board
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TreatsBoard);

const styles = {
  treatsBoardRoot: {
    backgroundColor: '#ffc3b6',
    width: 'auto'
    // height: '90vh'
  }
};
