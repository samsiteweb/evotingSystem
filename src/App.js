import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignInPage from './inecPortal/signInPage/signIn';
import BvnVerificationPage from './inecPortal/bvnVerification/bvnVerification';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={BvnVerificationPage} />
				<Route path="/signin" component={SignInPage} />
			</Switch>
		</Router>
	);
}

export default App;
