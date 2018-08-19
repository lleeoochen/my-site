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
				<Typography style={styles.header}>
					Welcome to My Website.
				</Typography>

				<Button
					variant={"contained"}
					children={action}
					onClick={this.toggleDive}/>

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
			color: 'white'
		}
	};
}