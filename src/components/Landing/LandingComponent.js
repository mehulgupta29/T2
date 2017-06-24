import React from 'react';
import {Button} from 'react-bootstrap';

class LandingComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={landingStyles}>
        Hello world
      </div>
    );
  }

}

export default LandingComponent ;

const landingStyles = {
  backgroundColor: '#999'
};
