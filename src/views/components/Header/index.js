import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './style.css';


export default class Header extends Component {

	render() {
		return (
			<Menu>
				<Menu.Item className={'home'} as={ NavLink } to='/home'>Wei Tung Chen</Menu.Item>
				<Menu.Item as={ NavLink } to='/coding'>Coding Projects</Menu.Item>
				<Menu.Item as={ NavLink } to='/music'>Music Recordings</Menu.Item>
				<Menu.Item as={ NavLink } to='/picture'>Photography</Menu.Item>
				<Menu.Item as={ NavLink } to='/picture'>Educational Videos</Menu.Item>
			</Menu>
		);
	}
}
