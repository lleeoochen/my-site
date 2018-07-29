import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Constants from 'helpers/Constants';
import './style.css';

export default class Header extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Menu>
				<Menu.Item className={'home'}
				           as={ NavLink } to={ Constants.PAGES.HOME.ROUTE }> { Constants.PAGES.HOME.TITLE } </Menu.Item>
				<Menu.Item as={ NavLink } to={ Constants.PAGES.CODING.ROUTE }>   { Constants.PAGES.CODING.TITLE }   </Menu.Item>
				<Menu.Item as={ NavLink } to={ Constants.PAGES.MUSIC.ROUTE }>    { Constants.PAGES.MUSIC.TITLE }    </Menu.Item>
				<Menu.Item as={ NavLink } to={ Constants.PAGES.PICTURE.ROUTE }>  { Constants.PAGES.PICTURE.TITLE }  </Menu.Item>
				<Menu.Item as={ NavLink } to={ Constants.PAGES.VIDEO.ROUTE }>    { Constants.PAGES.VIDEO.TITLE }    </Menu.Item>
			</Menu>
		);
	}


}
