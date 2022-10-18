import React, { useState } from "react";

const UserCreation = () => {

    const [disabled, setDisabled] = useState(true);

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

        setDisabled(true);

        if (
            user.firstName.length > 0 && user.firstName !== "" &&
            user.lastName.length > 0 && user.lastName !== "" &&
            user.email.length > 0 && user.email.includes("@") &&
            user.password.length > 6 && user.password !== ""
            ) {
            setDisabled(false);
        }
    };

    const handleSubmit = (e) => {
        console.log(user);

        setUser({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
    };

    return (
        <div>
            <h1> Lag en profil </h1>

            <form id="create">
                <label htmlFor="firstName">Fornavn</label>
                <input id="firstName" type="text" name="firstName" value={user.firstName} onChange={handleChange}/>

                <label htmlFor="lastName">Etternavn</label>
                <input id="lastName" type="text" name="lastName" value={user.lastName} onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input id="email" type="text" name="email" value={user.email} onChange={handleChange}/>

                <label htmlFor="password">Passord</label>
                <input id="password" type="password" name="password" value={user.password} onChange={handleChange}/>

                <button id="submit" type="submit" disabled={disabled} onChange={handleSubmit}> Submit </button>

                
                {disabled && <p> Please fill out all fields </p>}
            </form>
        </div>
  );
};

export default UserCreation;