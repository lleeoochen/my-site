import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Constants from 'helpers/Constants';
import './index.css';

export default class Header extends Component {

	state = {
		menuOpen: false
	}

	openMenu(open) {
		this.setState({
			menuOpen: open
		});
	}

	render() {
		let styles = createStyles();

		let dataNav = [
			{
				title: Constants.PAGES.HOME.TITLE,
				route: Constants.PAGES.HOME.ROUTE
			},
			{
				title: Constants.PAGES.CODING.TITLE,
				route: Constants.PAGES.CODING.ROUTE
			},
			{
				title: Constants.PAGES.MUSIC.TITLE,
				route: Constants.PAGES.MUSIC.ROUTE
			},
			{
				title: Constants.PAGES.PICTURE.TITLE,
				route: Constants.PAGES.PICTURE.ROUTE
			}
		];

		let topHeaders = dataNav.map((data, index) =>
			<Button
				key={index}
				style={styles.menuItem}
				component={NavLink}
				to={data.route}>
				{data.title}
			</Button>
		);

		let menuHeaders = dataNav.map((data, index) =>
			<MenuItem
				key={index}
				style={styles.menuItem}
				component={NavLink}
				onClick={() => this.openMenu(false)}
				to={data.route}>
				{data.title}
			</MenuItem>
		);

		return (
			<AppBar position="static" style={styles.menu}>
				<Toolbar>
					<IconButton color="inherit" aria-label="Menu" onClick={() => this.openMenu(!this.state.menuOpen)}>
						<Menu
							style={styles.menu}
							open={this.state.menuOpen}
							onClose={this.handleClose}>
							{menuHeaders}
						</Menu>
						<MenuIcon/>
					</IconButton>
					{topHeaders}
				</Toolbar>
			</AppBar>
		);
	}
}

function createStyles() {
	return {
		menu: {
			width: "100%",
			position: 'fixed',
			top: 0,
			background: 'linear-gradient(to top right, #07000000, #00008B)'
		},
		menuItem: {
			minWidth: 200,
			paddingLeft: 20,
			paddingRight: 20,
			color: 'white',
			opacity: 1,
			justifyContent: 'center'
		},
		homeItem: {
			paddingLeft: 30,
			paddingRight: 30,
			textDecorationLine: 'none'
		},
		menuText: {
			fontSize: 25,
			fontWeight: 'bold',
		}
	}
};
