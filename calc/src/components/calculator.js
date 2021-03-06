import React from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';


// https://www.geeksforgeeks.org/reactjs-calculator-app-adding-functionality/

class Calculator extends React.Component { 
  constructor() {
    super();
    //default state
    this.state = {
    question: '',
    answer: ''
  }
  // binding click menthod (sets this to refer to this component, not "this" the source of the click events)
  this.handleClick = this.handleClick.bind(this);
}

// our method to handle all click events
handleClick(event) {

// get the value from the target element, in this case the button.
  const value = event.target.value;

    switch (value) {
      case '=': {

        // if its an equal sign, use eval module
        // to evaluate the question, convert the answer
        // a number > to a string
        if (this.state.question!=='')
        {
          var ans='';
            try
            {
              ans = eval(this.state.question);
            }
            catch(err)
            {
              this.setState({answer: 'Math Error'});
            }
            if (ans===undefined)
              this.setState({answer: "Math Error"});

            // update answer in our state

            else  
              this.setState({ answer: ans, question: ''});
            break;
      }
}

            case 'Clear': {
                // if its the cLears sign, just clear both question and answer
                this.setState({ question: '', answer: '' });
                break;
            }

            case 'Delete': {
              var str = this.state.question;
              str = str.substr(0,str.length-1);
              this.setState({question: str});
              break;
            }

            default: {
              // every other command, update the anser in the state.
              this.setState({ question: this.state.question += value})
              break;
            }
          }

        }
    render() 
    { 
    return ( 
    <div className="frame"> 
        <div className="mainCalc"> 
    <CalculatorTitle value="Casio"/> 
    <OutputScreen className="screen" answer = {this.state.answer} question = {this.state.question}/> 
    <div className="button-row"> 
      <Button label={'Clear'} handleClick = {this.handleClick}/> 
      <Button label={'Delete'} handleClick = {this.handleClick}/> 
      <Button label={'.'} handleClick = {this.handleClick}/> 
      <Button label={'/'} handleClick = {this.handleClick}/> 
    </div> 
    <div className="button-row"> 
      <Button label={'7'} handleClick = {this.handleClick}/> 
      <Button label={'8'} handleClick = {this.handleClick}/> 
      <Button label={'9'} handleClick = {this.handleClick}/> 
      <Button label={'*'} handleClick = {this.handleClick}/> 
    </div> 
    <div className="button-row"> 
      <Button label={'4'} handleClick = {this.handleClick}/> 
      <Button label={'5'} handleClick = {this.handleClick}/> 
      <Button label={'6'} handleClick = {this.handleClick}/> 
      <Button label={'-'} handleClick = {this.handleClick}/> 
    </div> 
    <div className="button-row"> 
      <Button label={'1'} handleClick = {this.handleClick}/> 
      <Button label={'2'} handleClick = {this.handleClick}/> 
      <Button label={'3'} handleClick = {this.handleClick}/> 
      <Button label={'+'} handleClick = {this.handleClick}/> 
    </div> 
    <div className="button-row"> 
      <Button label={'0'} handleClick = {this.handleClick}/> 
      <Button label={'='} handleClick = {this.handleClick}/> 
    </div> 
    </div> 
    </div> 
    ); 
  } 
} 
  
// Export Calculator Component. 
export default Calculator; 