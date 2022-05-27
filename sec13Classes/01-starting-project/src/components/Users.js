import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor(){
    // state is ALWAYS an object with class bases component
    // it also HAS to be a property named state - not up for debate
    super();
    this.state = {
      showUsers : true,
      more : 'test'
    };
  }

  componentDidUpdate() {
    if(this.props.users.length === 0) {
      // throws the following error if we have no users in the components props
      throw new Error('No users provided!');
    }
  }

  toggleUsersHandler() {
    // setState is inherit from Component
    this.setState((curState) => {
      // returns stae as an ntire object  
      return { showUsers : !curState.showUsers }
    })
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}


// FUNCTIONAL component below
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
