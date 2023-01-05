import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import NavBar from './NavBar';
import EventList from './EventList';


function App() {
  const [user, setUser]= useState(null)
  console.log(user)
  useEffect(() =>{
    fetch("/user_logged_in")
    .then (r => r.json())
    .then((user) => setUser(user))
    },[])

    // The useEffect above should be for grabbing our sessions for logged in users. Would this be a separate GET route or attached to the login? 

  return (
    <div className="App">
      <NavBar/>
      <header className="App-header"> Welcome to Loop!
      </header>

    <Routes>
      <Route exact path="/home" element={<Home user={user} setUser ={setUser}/>}/>
      <Route exact path="/login" element={<Login  user= {user} setUser= {setUser} />}/>
      <Route exact path="/signup" element={<SignUp user= {user} setUser= {setUser} />}/>
      {/* Need events page for showing all events and creating events */}
      {/* Need event setting page that allows us to ... Ask the user if they're bringing a plus one to an event */}
      <Route exact path="/events" element={<EventList/>}/>
    </Routes>
    </div>
  );
}

export default App;
