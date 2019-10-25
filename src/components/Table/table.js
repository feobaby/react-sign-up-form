import React, {Component} from 'react';
import { Table,TableBody, TableHeader, TableRow,  } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ListItem} from 'material-ui/List';
import '../UserDetails/userDetails.style.css';

export class UserTable extends Component {

  render() {
      const{ values: {firstName, lastName, birthDay, age, hobby}} = this.props;
    return (
       
      <MuiThemeProvider>
<React.Fragment>
<header>The User Table</header>
    <Table class = "tables">
         <TableHeader>
           <TableRow>
 <th>First name</th>
 <th>Last name</th>
 <th>Birthday</th>
 <th>Age</th>
 <th>Hobby</th>
             </TableRow>
         </TableHeader>

                 <TableBody>
<TableRow>
    <th>
        <ListItem
        primaryText={firstName}
        />
       </th>
       
    <th>
        <ListItem
        primaryText={lastName}
        />
    </th>

    <th>
        <ListItem
        primaryText={birthDay}
        />
    </th>

    <th>
        <ListItem
        primaryText={age}
        />
    </th>

    <th>
        <ListItem
        primaryText={hobby}
        />
    </th>
</TableRow>
        </TableBody>
         </Table>
<br />
<br />
<br />
<br />
<h3 className = "little-heading">Acknowledgement - Enye.</h3>
<h3 className = "little-heading">Funmilayo Olaiya.</h3>
</React.Fragment>
    </MuiThemeProvider>
    );
  }
}
export default UserTable;