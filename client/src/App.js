import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  const [user, setUser]= useState(null)

  useEffect(() =>{
    fetch("/users/:id").then((r) => {
      r.json().then((user) => setUser(user))
    });

  },[])

  return (
    <div className="App">
      <header className="App-header"> Welcome to Loop!
      </header>
      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;
