import React, { Component } from 'react';
import './App.css';

import {SignUpForm} from './components/Form/signUpForm.component.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SignUpForm />
      </div>
    );
  }
}
export default App;
