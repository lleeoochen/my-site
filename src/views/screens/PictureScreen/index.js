import React, { Component } from 'react';

import Constants from 'helpers/Constants';
import './style.css';

export default class PictureScreen extends Component {
	render() {
		document.title = Constants.PAGES.PICTURE.TITLE;
		return (
			<div>
				Picture
			</div>
		);
	}
}
