import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './userDetails.style.css';
import {useSelector, useDispatch } from 'react-redux'
// import {newUser, AllUsers} from '../../action/index';

export class UserDetails extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      const{ values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
<React.Fragment>
<header > Please sign up!</header>
<div className = 'wrap'>
<TextField 
    hintText= "enter your first name"
    floatingLabelText= "First name"
    onChange={handleChange('firstName')}
    defaultValue={values.firstName}
/>
<br />
<TextField
    hintText= "enter your last name"
    floatingLabelText= "Last name"
    onChange={handleChange('lastName')}
    defaultValue={values.lastName}
/>
<br />
<TextField
      hintText= "enter your birth-date"
      floatingLabelText= "Birthday"
        id="date"
        type="date"
        onChange={handleChange('birthDay')}
        defaultValue="2017-05-24"
      />
<br />
<TextField
    hintText= "enter your age"
    floatingLabelText= "Age"
    onChange={handleChange('age')}
    defaultValue={values.age}
/>
<br />
<TextField
    hintText= "enter your hobby"
    floatingLabelText= "Hobby"
    onChange={handleChange('hobby')}
    defaultValue={values.hobby}
/>
<br />
<RaisedButton
label = "continue"
primary={true}
style={styles.button}
onClick={this.handleSubmit}
/> 
</div>
</React.Fragment>
    </MuiThemeProvider>
    );
  }
}
// button style
  const styles = { button: { margin: 15 }}

export const UsersStateComponent = () => {
    const users= useSelector(state => state.users)
    return <div>{users}</div>
  }

  export const UsersDispatchComponent = () => {
    const dispatch = useDispatch()
  
    return (
      <div>
        <button onClick={() => dispatch({ type: 'ALL_USERS' })}>check
        </button>
      </div>
    )
  }
