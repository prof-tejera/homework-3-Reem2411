import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import './Pager.css';


class Pager extends Component {
  constructor () {
    super(); 

    // Initalize page number 
    // The state contains data specific to this component that may change over time. (Page will be changed/updated with onClick function)
    this.state = {page: 0}
  };

  // Then render each page as it is clicked on it
  render (){

    // PART 1 - Just create the bar 
    // Get the page number attribute to track the number of pages to show  
    // This const doesn't work without curly brackets!! 
    const {num_pages} = this.props; 
    
    // Create list of pages that will be rendered in the app 
    const pages_to_show = [];

    // Create a button for each page to make it more generic 
    for (let i = 0; i < num_pages; i++) {

      // Add to list of pages that will be rendered in app 

      pages_to_show.push(
        // Use the same button function from mediabuttons 
        <Button key={i} text={i+1} curr={i === this.state.curr} onClick={() => {
          // update state using setState .. updating this.state doesn't work 
          this.setState({page: i});

          // This isn't showing in console :( 
          console.log('In Pager, button was clicked!');    
        }}/>,
      );
    }  
    
    // Part 2 
    // BONUS - What props can I pass in that will make the component more configurable?
    if (num_pages > 6) {

      // Get the beginning of the pager and the end of it
      const start = pages_to_show.slice(0,3);
      const end = pages_to_show.slice(-1);

      // return the pages to show 
      return (<Panel> {start} ... {end} </Panel> ); 
    } else {
      return <Panel> {pages_to_show} </Panel>;
    }    
  }
}




export default Pager;
