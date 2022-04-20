import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';


function App() {
  //lifted state
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    //state relies on previous state, so use function form
    // actually passing a function into our set state function
    setUsersList((prevList) => {
      return [...prevList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };
  
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
