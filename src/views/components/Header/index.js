import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Toolbar, Tab } from '@material-ui/core';

import Constants from 'helpers/Constants';
import './index.css';

export default class Header extends Component {

	render() {
		let styles = createStyles();

		return (
			<Toolbar style={styles.menu}>
				<Tab
					style={{...styles.menuItem, ...styles.homeItem}}
					label={<span style={styles.menuText}>{Constants.PAGES.HOME.TITLE}</span>}
					component={NavLink}
					to={Constants.PAGES.HOME.ROUTE}/>
				<Tab
					style={styles.menuItem}
					label={Constants.PAGES.CODING.TITLE}
					component={NavLink}
					to={Constants.PAGES.CODING.ROUTE}/>
				<Tab
					style={styles.menuItem}
					label={Constants.PAGES.MUSIC.TITLE}
					component={NavLink}
					to={Constants.PAGES.MUSIC.ROUTE}/>
				<Tab
					style={styles.menuItem}
					label={Constants.PAGES.PICTURE.TITLE}
					component={NavLink}
					to={Constants.PAGES.PICTURE.ROUTE}/>
			</Toolbar>
		);
	}

}

function createStyles() {
	return {
		menu: {
			width: "100%",
			minHeight: 0,
			position: 'fixed',
			top: 0,
			zIndex: 100,
			background: 'linear-gradient(to top right, #07000000, #00008B)',
			opacity: 1
		},
		menuItem: {
			maxWidth: 'none',
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
