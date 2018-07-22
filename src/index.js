import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import Header from 'views/components/Header';
import HomeScreen from 'views/screens/HomeScreen';
import CodingScreen from 'views/screens/CodingScreen';
import MusicScreen from 'views/screens/MusicScreen';
import PictureScreen from 'views/screens/PictureScreen';
import './index.css';


ReactDOM.render(
	<HashRouter>
		<div>
			<Header />
			<Route exact path="/" render={() => <Redirect to="/home"/>} />
			<Route exact path="/home" component={HomeScreen} />
			<Route exact path="/coding" component={CodingScreen} />
			<Route exact path="/music" component={MusicScreen} />
			<Route exact path="/picture" component={PictureScreen} />
		</div>
	</HashRouter>,
	document.getElementById('root'));

registerServiceWorker();
