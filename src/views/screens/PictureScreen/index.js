import React, { Component } from 'react';
import logo from 'logo.svg';
import './style.css';
import Header from 'views/shared/Header';
import { StaticRouter } from 'react-router';

export default class PictureScreen extends Component {
  render() {
	return (
		<div>
			<Header/>
			<div> Picture </div>
		</div>
	);
  }
}
