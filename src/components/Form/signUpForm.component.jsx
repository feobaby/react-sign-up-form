import React, {Component} from 'react';
import UserDetails from '../UserDetails/userDetails';
import Confirm from '../Confirm/confirm';
import UserTable from '../Table/table';
import './signUpForm.style.css';

export class SignUpForm extends Component {
   
state = {
    step: 1,
    firstName: '',
    lastName: '',
    birthDay: '',
    age: '',
    hobby: '',
}


nextStep =()=> {
    const {step} = this.state;
    this.setState({
        step: step + 1
    });
}

prevStep =()=> {
    const {step} = this.state;
    this.setState({
        step: step - 1
    });
}

// handle fields change
handleChange = input => e => {
    this.setState({[input]: e.target.value})
}

render() {
    const {step} = this.state;
    const {firstName, lastName, birthDay, age, hobby} = this.state;
    const values = {firstName, lastName, birthDay, age, hobby}
  
    
    switch(step) {
        case 1: 
        return (
          <UserDetails
           nextStep={this.nextStep}
           handleChange={this.handleChange}
           values={values}
          />
        );
        case 2:
        return (
            <Confirm
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             values={values}
            />
          );
          case 3:
          return (
              <UserTable
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               values={values}
              />
            );
        default:
    }
    }
}


export default SignUpForm;