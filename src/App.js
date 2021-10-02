import { Component } from 'react';
import MediaButtons from 'MediaButtons/MediaButtons';
import LoginForm from 'LoginForm/LoginForm';
import Pager from 'Pager/Pager';
import RadioButtons from 'RadioButtons/RadioButtons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-component">
          <header className="App-header">
            Media Buttons Component (Example)
          </header>
          <div className="App-content">
            <MediaButtons />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Login form component </header>
          <div className="App-content">
            <LoginForm />
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Pager component </header>
          <div className="App-content">
            {/* Pass number of pages to be rendered (for bonus part) */}
            <Pager num_pages={12}/>
          </div>
        </div>

        <div className="App-component">
          <header className="App-header">Radio Buttons component </header>
          <div className="App-content">
            {/* Take in an array of button configurations (for bonus part) */}
            {/* <RadioButtons list={['Apple', 'Pear','Orange']}/> */}
            <RadioButtons />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
