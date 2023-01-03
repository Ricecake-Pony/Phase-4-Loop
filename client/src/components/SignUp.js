import React, { useState } from "react";

function SignUp({ user, setUser }) {
    
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        name: name,
        username: username,
        birthdate: birthdate,
        password: password,
        password_confirmation: passwordConfirmation,
        }),
    })
    .then((r) => {
        if (r.ok) {
        r.json()
        .then((user) => setUser(user));
        }
    });
    }
    console.log(user)
    return (
    <div>
    <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <br/>
        <label>Name:</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <label >Username:</label>
        <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label>Birthdate:</label>
        <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
        />
        <br/>
        <label >Password:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
        />
        <br/>
        <label >Password Confirmation:</label>
        <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
        />
        <br/>
        <button type="submit">Sign Up</button>
        </form>
    </div>
    );
}

export default SignUp;