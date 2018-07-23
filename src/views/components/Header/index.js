import React, { Component } from 'react';
import {
	Button,
	Container,
	Divider,
	Grid,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility,
} from 'semantic-ui-react';
import './style.css';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {

	render() {
		return (
			<Menu
				fixed={"top"}
				color={"black"}
				inverted={true}
				pointing={true}
				borderless={true}>
				<Container>
					<Menu.Item className={'home'} as={ NavLink } to='/home'>HOME</Menu.Item>
					<Menu.Item as={ NavLink } to='/coding'>Coding Projects</Menu.Item>
					<Menu.Item as={ NavLink } to='/music'>Music Recordings</Menu.Item>
					<Menu.Item as={ NavLink } to='/picture'>Photography</Menu.Item>
					<Menu.Item as={ NavLink } to='/picture'>Educational Videos</Menu.Item>
					{
						//<Menu.Item className={'about'} as={ NavLink } to='/picture'>About</Menu.Item>
					}
				</Container>
			</Menu>
		);
	}
}
