import React, { Component } from 'react';
import { StaticRouter } from 'react-router';
import { Button, Image, Transition } from 'semantic-ui-react';

import Constants from 'helpers/Constants';
import './index.css';

export default class HomeScreen extends Component {

	state = {
		dive: false,
		complete: true
	}

	toggleDive = () => {
		this.setState({
			dive: !this.state.dive,
			complete: false
		});
	}

	transitionComplete = () => {
		this.setState({
			complete: true
		});
	}

	render() {
		document.title = Constants.PAGES.HOME.TITLE;
		let { dive, complete } = this.state;
		let styles = createStyles();
		let action = dive ? 'Dive Out' : 'Dive In';
		let direction = dive ? 'left' : 'right';

		return (
			<div style={ styles.container.main }>
				<h1 style={ styles.header }> Welcome to My Website. </h1>
				<Button
					disabled={ !complete }
					content={ action }
					onClick={ this.toggleDive }/>
				<div
					class={ 'slant ' + direction }
					style={ styles.container.animation }>
					<Transition
						visible={ dive }
						animation={ 'fly ' + direction }
						onComplete={ this.transitionComplete }
						duration={ 3000 }>
						<Image
							src={ Constants.IMAGES.WHALE }
							className='center'
							size='medium'/>
					</Transition>
				</div>
			</div>
		);
	}
}

function createStyles() {
	return {
		container: {
			animation: {
				marginTop: 100
			},
			main: {
				textAlign: 'center',
				marginTop: 100
			}
		},
		header: {
			fontSize: 50
		}
	};
}