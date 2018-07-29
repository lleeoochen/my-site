import React, { Component } from 'react';
import { StaticRouter } from 'react-router';

import Constants from 'helpers/Constants';
import './style.css';

export default class MusicScreen extends Component {
	render() {
		document.title = Constants.PAGES.MUSIC.TITLE;
		return (
			<div>
				Music
			</div>
		);
	}
}
