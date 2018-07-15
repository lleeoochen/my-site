import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


export default class HeaderText extends Component {

  	render() {
	  	let styles = getStyles();
		let fixed = true
		return (
			<Menu
				fixed={fixed ? 'top' : null}
				inverted={fixed}
				pointing={fixed}
				secondary={fixed}
				style={styles.menu}
				size='large'>
			  	<Container>
					<Menu.Item as='a' active>Home</Menu.Item>
					<Menu.Item as='a'>Work</Menu.Item>
					<Menu.Item as='a'>Company</Menu.Item>
					<Menu.Item as='a'>Careers</Menu.Item>
					<Menu.Item position='right'>About</Menu.Item>
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
			backgroundColor: 'black',
			transform: 'rotate(-20deg)'
		}
	};
}