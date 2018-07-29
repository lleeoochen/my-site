import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Constants from 'helpers/Constants';
import './index.css';

export default class Header extends Component {

	render() {
		let styles = createStyles();

		return (
			<Menu
				style={styles.menu}
				fixed={'top'}
				inverted={true}
				borderless={true}>
				<Menu.Item style={{...styles.menuItem, ...styles.homeItem}}
				                                   as={ NavLink } to={ Constants.PAGES.HOME.ROUTE }>     { Constants.PAGES.HOME.TITLE }     </Menu.Item>
				<Menu.Item style={styles.menuItem} as={ NavLink } to={ Constants.PAGES.CODING.ROUTE }>   { Constants.PAGES.CODING.TITLE }   </Menu.Item>
				<Menu.Item style={styles.menuItem} as={ NavLink } to={ Constants.PAGES.MUSIC.ROUTE }>    { Constants.PAGES.MUSIC.TITLE }    </Menu.Item>
				<Menu.Item style={styles.menuItem} as={ NavLink } to={ Constants.PAGES.PICTURE.ROUTE }>  { Constants.PAGES.PICTURE.TITLE }  </Menu.Item>
			</Menu>
		);
	}

}

function createStyles() {
	return {
		menu: {
			height: 50
		},
		menuItem: {
			paddingLeft: 50,
			paddingRight: 50
		},
		homeItem: {
			fontWeight: 'bold',
			fontSize: 25,
			paddingLeft: 70,
			paddingRight: 70,
			textDecorationLine: 'none'
		}
	}
};
