import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './Layout/Navbar';
import { Footer } from './Layout/Footer';

import { Landing } from './Landing';
import { About } from './About';
import { Projects } from './Projects';

export const App = () => (
	<>
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/about' component={About} />
				<Route exact path='/projects' component={Projects} />
				<Route component={() => (window.location.href = '/')} />
			</Switch>
			<Footer />
		</Router>
	</>
);
