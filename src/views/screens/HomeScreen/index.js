import React, { Component } from 'react';
import { StaticRouter } from 'react-router';

import Constants from 'helpers/Constants';
import './style.css';

export default class HomeScreen extends Component {
	render() {
		document.title = Constants.PAGES.HOME.TITLE;
		return (
			<div>
				Home
			</div>
		);
	}
}
