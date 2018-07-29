import React, { Component } from 'react';
import { StaticRouter } from 'react-router';

import Constants from 'helpers/Constants';
import './style.css';

export default class CodingScreen extends Component {
	render() {
		document.title = Constants.PAGES.CODING.TITLE;
		return (
			<div>
				Coding
			</div>
		);
	}
}
