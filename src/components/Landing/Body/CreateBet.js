import React from 'react';
import {connect} from 'react-redux';
import actions from '../../../actions/actions';
import * as _ from 'lodash';
import {Button} from 'react-bootstrap';
import Guid from 'guid';

class CreateBet extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      person1: '',
      person2: '',
      betDescription: '',
      treat: '',
      error: {
        status: '',
        message: ''
      },
      betSaved: false
    };
  }

  render() {
    const {error, betSaved} = this.state;
    return (
      <div className="create-bet-root" style={styles.createBetRoot}>
        <div>Create New Bet</div>
        {_.isEmpty(error.message) ? null : error.message}
        {betSaved ? 'Bet is on !!!' : null}
        {this.renderBetForm()}
      </div>
    );
  }

  renderBetForm() {
    const {person1, person2, betDescription, treat, betSaved} = this.state;

    return (
      <div className="bet-form-root">
        <div>
          <input type="text" name="person1" placeholder="Person 1" value={person1} onChange={event => this.setState({person1: event.target.value})}/>
          &nbsp; <strong>bets</strong> &nbsp;
          <input type="text" name="person2" placeholder="Person 2" value={person2} onChange={event => this.setState({person2: event.target.value})}/>
        </div>
        <div>
          <strong>that</strong> &nbsp;
          <input type="text" name="betDescription" placeholder="enter bet description"
                 value={betDescription}
                 onChange={event => this.setState({betDescription: event.target.value})}/>
          &nbsp; is the winner
        </div>
        <div>
          <p>The loser <strong>treats !!</strong></p>
          <strong>Treat Details: </strong>
          <input type="text" name="treat" placeholder="enter treat" value={treat} onChange={event => this.setState({treat: event.target.value})}/>
        </div>
        <div>
          <Button bsStyle={`${betSaved ? 'success' : 'primary'}`} onClick={() => this.handleSubmitBet()}>Submit bet</Button> &nbsp; &nbsp;
          <Button bsStyle="warning" onClick={() => this.clearBet()}>Forfeit bet</Button>
        </div>
      </div>
    );
  }

  handleSubmitBet() {
    const {firebase, dispatch} = this.props;
    const {person1, person2, betDescription, treat} = this.state;

    // Validate Input
    let validate = {status: true, message: ""};
    if(_.isEmpty(person1))
      validate = {status: false, message: "Person cannot be empty"};
    else if(_.isEmpty(person2))
      validate = {status: false, message: "Person cannot be empty"};
    else if(_.isEmpty(betDescription))
      validate = {status: false, message: "Please enter bet description to continue"};
    else if(_.isEmpty(treat))
      validate = {status: false, message: "Treat description is empty !! you will miss out on a treat... hurry enter treat"};

    if(validate.status){
      const newBet = {
        id: Guid.create().value,
        person1: person1,
        person2: person2,
        betDescription: betDescription,
        treat: treat
      };

      dispatch(actions.setNewBet(newBet, firebase));
      this.clearBet(true);
    }
    this.setState({error: validate});
  }

  clearBet(betSaved = false) {
    this.setState({
      person1: '',
      person2: '',
      betDescription: '',
      treat: '',
      error: {
        status: true,
        message: ''
      },
      betSaved: betSaved
    });
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
