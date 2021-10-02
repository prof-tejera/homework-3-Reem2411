import { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    // I added a page prop to keep track of the page number we are on for pager 
    return <button className={`Default-button ${this.props.curr ? 'curr' :''}`}>{this.props.text}</button>;
  }
}

export default Button;
