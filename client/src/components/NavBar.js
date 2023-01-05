import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return(
        <div>
            <NavLink className="login" to="/login">Login</NavLink>
            {/* <NavLink className="home" to="/">Home</NavLink> */}
            <NavLink className="signup" to="/signup">Signup</NavLink>
            <NavLink className="events" to="/events">Event List</NavLink>
        </div>
    )
}
