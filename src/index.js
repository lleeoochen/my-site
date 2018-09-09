import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from 'views/components/Header';
import HomeScreen from 'views/screens/HomeScreen';
import CodingScreen from 'views/screens/CodingScreen';
import MusicScreen from 'views/screens/MusicScreen';
import PictureScreen from 'views/screens/PictureScreen';
import Constants from 'helpers/Constants';
import './index.css';

const THEME = createMuiTheme({
   typography: {
    "fontSize": 15,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
		<BrowserRouter>
			<div>
				<Header />
				<Route exact path={ Constants.PAGES.HOME.ROUTE }    component={ HomeScreen }/>
				<Route exact path={ Constants.PAGES.CODING.ROUTE }  component={ CodingScreen }/>
				<Route exact path={ Constants.PAGES.MUSIC.ROUTE }   component={ MusicScreen }/>
				<Route exact path={ Constants.PAGES.PICTURE.ROUTE } component={ PictureScreen }/>
			</div>
		</BrowserRouter>
  </MuiThemeProvider>,
	document.getElementById('root'));

registerServiceWorker();
