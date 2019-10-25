import React, {Component} from 'react';
import {UserDetails} from '../UserDetails/userDetails';
import Confirm from '../Confirm/confirm';
import UserTable from '../Table/table';
import './signUpForm.style.css';

export class SignUpForm extends Component {
   


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

constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
    this.state = {
        step: 1,
        firstName: '',
        lastName: '',
        birthDay: '',
        age: '',
        hobby: '',
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let contact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      birthDay: this.state.birthDay,
      hobby: this.state.hobby
    }
    this.setState({
        firstName: '',
        lastName: '',
        age: '',
        birthDay: '',
        hobby: '',
    });
    this.props.signUp(contact);
  }

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
