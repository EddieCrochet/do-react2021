import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext  from './contextStore/auth-context';

function App() {  
  const ctx = useContext(AuthContext
    )

  return (
    //  Technically don't need the fragment since the 
    // auth can be used as root component
    // but now the auth is seperate so we are back to fragmetns1
    <React.Fragment>

      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
