import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import '../UserDetails/userDetails.style.css';


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


  render() {
      const{ values: {firstName, lastName, birthDay, age, hobby}} = this.props;
    return (
        
      <MuiThemeProvider>
<React.Fragment>
<header > Confirm your details</header>
<div className = 'wrap'>
<List>
<ListItem
primaryText="First name"
secondaryText={firstName}
/>

<ListItem
primaryText="Last name"
secondaryText={lastName}
/>
<ListItem
primaryText="Birthday"
secondaryText={birthDay}

/>
<ListItem
primaryText="Age"
secondaryText={age}

/>
<ListItem
primaryText="Hobby"
secondaryText={hobby}

/>
</List>

<RaisedButton
label = "confirm & continue"
primary={true}
style={styles.button}
onClick={this.continue}
/>
<RaisedButton
label = "back"
primary={false}
style={styles.button}
onClick={this.back}
/>
</div>
</React.Fragment>
    </MuiThemeProvider>
    );
    
  }
}

  const styles ={
      button: {margin: 15}
}
export default Confirm;
