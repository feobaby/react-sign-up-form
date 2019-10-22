import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './userDetails.style.css';

export class UserDetails extends Component {
    continue = e => {
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
        InputLabelProps={{
            shrink: true,
          }}
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
onClick={this.continue}
/>
</div>
</React.Fragment>
    </MuiThemeProvider>
    );
  }
}

  const styles ={
      button: {
          margin: 15
        }
}
export default UserDetails;
