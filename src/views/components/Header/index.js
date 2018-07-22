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
				className={"menu"}
				fixed={"top"}
				color={"black"}
				inverted={true}
				pointing={true}
				borderless={true}>
				<Container>
					<Menu.Item as={ NavLink } to='/home'>	Home </Menu.Item>
					<Menu.Item as={ NavLink } to='/coding'> Coding </Menu.Item>
					<Menu.Item as={ NavLink } to='/music'> Music </Menu.Item>
					<Menu.Item as={ NavLink } to='/picture'> Picture </Menu.Item>
					<Menu.Item position='right'> About </Menu.Item>
				</Container>
			</Menu>
		);
	}
}
