import React from "react";

export default function Login() {
    return(
            <main className="container">
                <div className="row">
                <form>
                    <fieldset className="sub-title">Create Account</fieldset>
                        <p><label for="first-name">First Name</label>
                        <input id="first-name" type="text" name="first-name" /></p>
                        <p><label for="last-name">Last Name</label>
                        <input id="last-name" type="text" name="last-name" /></p>
                        <p><label for="email">Email</label>
                        <input id="email" type="email" name="email" /></p>
                        <p><label for="password">Password</label>
                        <input id="password" type="password" name="password" /></p>
                        <p><label for="confirm-password">Confirm Password</label>
                        <input id="confirm-password" type="password" name="confirm-password" /></p>
                        <p><label for="phone">Phone<br/>(optional)</label>
                        <input id="phone" type="tel" name="phone" /></p>
                        <p><input type="submit" value="Submit" /></p>
                </form>
                </div>
            </main>
    )
}