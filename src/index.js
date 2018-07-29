import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import Header from 'views/components/Header';
import HomeScreen from 'views/screens/HomeScreen';
import CodingScreen from 'views/screens/CodingScreen';
import MusicScreen from 'views/screens/MusicScreen';
import PictureScreen from 'views/screens/PictureScreen';
import Constants from 'helpers/Constants';
import './index.css';


ReactDOM.render(
	<HashRouter>
		<div>
			<Header />
			<Route exact path="/" render={ () => <Redirect to={ Constants.PAGES.HOME.ROUTE }/> }/>
			<Route exact path={ Constants.PAGES.HOME.ROUTE }    component={ HomeScreen }/>
			<Route exact path={ Constants.PAGES.CODING.ROUTE }  component={ CodingScreen }/>
			<Route exact path={ Constants.PAGES.MUSIC.ROUTE }   component={ MusicScreen }/>
			<Route exact path={ Constants.PAGES.PICTURE.ROUTE } component={ PictureScreen }/>
		</div>
	</HashRouter>,
	document.getElementById('root'));

registerServiceWorker();
