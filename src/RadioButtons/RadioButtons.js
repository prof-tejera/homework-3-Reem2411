import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './RadioButtons.css';

class RadioButtons extends Component {
  constructor () {
    super(); 

    // Initalize button index
    // The state contains data specific to this component that may change over time. (Page will be changed/updated with onClick function)
    this.state = {button: 0}
  };

  render() {
    // PART 1 - Just create the list
    // Get the list attribute to show 
    // This const doesn't work without curly brackets!! 
    // In the line below I took in the list passed for the bonus part but 
    // but I did not know how to pass it into a for loop to render the buttons
    // const {list} = this.props; 
    
    return (
      <Panel>
        <Button text="Apple" onClick={() => {
          
          // update state using setState .. updating this.state doesn't work 
          this.setState({button: this.props});

          // This isn't appearing 
          console.log('In radio buttons, button was clicked!');    
          
        }} />

        <Button text="Pear" onClick={() => {
          // update state using setState .. updating this.state doesn't work 
          this.setState({button: this.props});

          // This isn't appearing 
          console.log('In radio buttons, button was clicked!');    
        }} />

        <Button text="Orange" onClick={() => {
          // update state using setState .. updating this.state doesn't work 
          this.setState({button: this.props});

          // This isn't appearing 
          console.log('In radio buttons, button was clicked!');    
        }} />
      </Panel>
    );
  }
}

export default RadioButtons;
