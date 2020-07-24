import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider.js";
import { auth } from "./firebase.js";
function App() {
	const [{ basket, user }, dispatch] = useStateValue();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//user loggedin
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//user logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		return () => {
			//any cleanupoperations go here
			unsubscribe();
		};
	}, []);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
