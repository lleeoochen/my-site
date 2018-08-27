import React, { Component } from 'react';
import { StaticRouter } from 'react-router';
import { Button, Slide, Typography } from '@material-ui/core';

import Constants from 'helpers/Constants';
import './index.css';

export default class HomeScreen extends Component {

	state = {
		dive: false
	}

	toggleDive = () => {
		this.setState({
			dive: !this.state.dive
		});
	}

	render() {
		document.title = Constants.PAGES.HOME.TITLE;
		let dive = this.state.dive;
		let styles = createStyles();
		let action = dive ? 'Dive Out' : 'Dive In';
		let direction = dive ? 'left' : 'right';

		return (
			<div style={styles.containerMain}>
				<Typography
					style={styles.header}
					children={"Welcome to My Website."}/>

				<Button
					style={styles.button}
					variant={"contained"}
					onClick={this.toggleDive}
					children={action}/>

				<div
					className={'slant ' + direction}
					style={styles.containerAnimation}>
					<Slide
						in={dive}
						direction={direction}
						timeout={{
							enter: 3000,
							exit: 1000
						}}
						mountOnEnter
						unmountOnExit
						width={50}>
						<img
							src={Constants.IMAGES.WHALE}
							alt={"Whale"}
							className='center'/>
					</Slide>
				</div>
			</div>
		);
	}
}

function createStyles() {
	return {
		containerMain: {
			textAlign: 'center',
			marginTop: 100
		},
		containerAnimation: {
			marginTop: 100
		},
		header: {
			fontSize: 50,
			color: 'white',
			textShadow: '-1px -1px 0 #00008B, 1px -1px 0 #00008B, -1px 1px 0 #00008B, 1px 1px 0 #00008B',
		},
		button: {
			backgroundColor: '#00008B',
			color: 'white'
		}
	};
}