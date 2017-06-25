import React from 'react';
import {connect} from 'react-redux';

class CreateBet extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="create-bet-root" style={styles.createBetRoot}>
        Create New Bet
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(CreateBet);

const styles = {
  createBetRoot: {
    backgroundColor: '#d4ffcf',
    width: 'auto',
    height: '200px'

    // height: '90vh'
  }
};
