import React from "react";
import { useState } from "react";
import {validateEmail} from "../../src/utils";


const PasswordErrorMessage = () => {
    return (
      <p className="alert">Password should have at least 8 characters</p>
    );
   };

export default function Login() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
      });

    const getIsFormValid = () => {
        return(
            firstName &&
            validateEmail(email) &&
            password.value.length >= 8
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
          value: "",
          isTouched: false,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm()
    };


    return(
            <main className="container">
                <div className="row">
                <form onSubmit={handleSubmit}>
                    <fieldset className="sub-title">Create Account</fieldset>
                        <p><label htmlFor="firstName">First Name <sup>*</sup> </label>
                        <input
                            type="text"
                            placeholder="first Name"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        /></p>
                        <p><label htmlFor="lastName">Last Name <sup>*</sup> </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        /></p>
                        <p><label htmlFor="email">Email <sup>*</sup> </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /></p>
                        <p><label htmlFor="password">Password <sup>*</sup> </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={password.value}
                            onChange={(e) => {
                                setPassword({ ...password, value: e.target.value });
                              }}
                              onBlur={() => {
                                setPassword({ ...password, isTouched: true });
                              }}
                              placeholder="Password"
                        /><br />
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                        </p>
                        <p><input disabled={!getIsFormValid()} type="submit" value="Submit" /></p>
                </form>
                </div>
            </main>
    )
}