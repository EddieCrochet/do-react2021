import classes from './User.module.css';
import { Component } from 'react';

class User extends Component{
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// FUNCTIONAL way below - no classes
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
