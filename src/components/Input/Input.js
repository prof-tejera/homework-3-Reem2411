import { Component } from 'react';

class Input extends Component {
  render() {
    return <input className="Default-Input" placeholder={this.props.placeholder}/>;
  }
}

export default Input;
