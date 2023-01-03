import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

    let navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    navigate('/home')
                })
            } else {
                r.json().then(json => {
                    console.log(json)
                    setErrors(json.error)
                })
            }
        });
    }
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        </form>
        {errors? <div className = "error-message">{errors}</div>: null}

     

    </div>
    );
}

export default Login;