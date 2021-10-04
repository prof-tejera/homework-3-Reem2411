import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <Panel backgroundColor="green">
        <>
          <Input placeholder="Username" onClick={() => {
            
            // This isn't appearing 
            console.log('In loginform, button was clicked!');    
          
          }}/>
        </> 
        <>
          <Input placeholder="Password" onClick={() => {
            
            // This isn't appearing 
            console.log('In loginform, button was clicked!');  
            
          }}/>
        </> 

        <Button text="Login" onClick={() => {}} />
        <div> Not Registered?  </div>
        <div color='green'> Create an Account  </div>
        

      </Panel>
    );
  }
}

 

export default LoginForm;
