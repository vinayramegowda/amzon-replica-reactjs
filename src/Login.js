import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase.js";
import "./Login.css";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const login = (event) => {
		event.preventDefault(); //prevents refresh
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				//loggedin successfully goto homepage
				history.push("/");
			})
			.catch((e) => alert(e.message));
	};

	const register = (event) => {
		event.preventDefault(); //prevents refresh
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//created a user and loggedin
				history.push("/");
			})
			.catch((e) => alert(e.message));
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="banner"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>
				<form action="" className="login__form">
					<h5>Email</h5>
					<input
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						type="email"
					></input>
					<h5>Password</h5>
					<input
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						type="password"
					></input>
					<button onClick={login} type="submit" className="login__signInButton">
						Sign in
					</button>
				</form>
				<p>
					By continuing, you agree to Amazon's Conditions of Use and Privacy
					Notice.
				</p>
				<button onClick={register} className="login__registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
