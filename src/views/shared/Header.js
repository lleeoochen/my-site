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
import './Header.css';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {

	render() {
		let styles = getStyles();
		let fixed = true;
		return (
			<Menu
				style={styles.menu}
				// fixed={fixed ? 'top' : null}
				inverted={fixed}
				pointing={fixed}
				secondary={fixed}
				size='large'>
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

function getStyles() {
	return {
		text: {
			transform: 'rotate(-20deg)'
		},
		menu: {
			backgroundColor: 'black'
		}
	};
}