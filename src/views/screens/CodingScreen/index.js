import React, { Component } from 'react';
import { StaticRouter } from 'react-router';
import { Card, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

import Constants from 'helpers/Constants';
import './style.css';

export default class CodingScreen extends Component {

	render() {
		document.title = Constants.PAGES.CODING.TITLE;
		let styles = createStyles();

		let dataList = [
			{
				title:       'GOLD Digger',
				description: 'This is a data analysis website that helps UCSB students determine which classes to signup first before seats run out.',
				media:       <img src={Constants.IMAGES.GOLD_DIGGER} style={styles.dataMedia}/>,
				viewUrl:     'https://ucsb-gold-digger.herokuapp.com/',
				repoUrl:     'https://github.com/n-duncan/GOLD-Digger'
			},
			{
				title:       'Web Chess',
				description: 'This is an online chess game for chess lovers, with AI bot included.',
				media:       <img src={Constants.IMAGES.CHESS} style={styles.dataMedia}/>,
				viewUrl:     'https://lleeoochen.github.io/web-chess/',
				repoUrl:     'https://github.com/lleeoochen/web-chess'
			},
			{
				title:       'Desk Galaxy',
				description: 'This is a 2D shooting game made using SFML and C++. You can fight against AI enemies.',
				media:       <img src={Constants.IMAGES.DISK_GALAXY} style={styles.dataMedia}/>,
				viewUrl:     '',
				repoUrl:     'https://github.com/lleeoochen/Disk-Galaxy'
			},
			{
				title:       'Chrome Editor',
				description: 'You can bring this text editor extension anywhere you go.',
				media:       <img src={Constants.IMAGES.CHROME_EDITOR} style={styles.dataMedia}/>,
				viewUrl:     'https://chrome.google.com/webstore/detail/chrome-editor/kefkdcgjkbijkajfmjochhmikmpmkofg?utm_source=chrome-ntp-icon',
				repoUrl:     'https://github.com/lleeoochen/chrome-editor'
			},
			{
				title:       'Notebook App',
				description: 'This is a simple notebook app for Android users.',
				media:       <iframe src='https://www.youtube.com/embed/UnPiLyx3pAI' style={styles.dataMedia}/>,
				viewUrl:     Constants.APPS.NOTEBOOK_APP,
				repoUrl:     ''
			}
		];

		let projects = dataList.map((data, index) => {
			return (
				<Card key={index} style={styles.dataContainer}>

					<CardContent>
						<Typography gutterBottom variant="headline" component="h2">
							{data.title}
						</Typography>
						<Typography component="p">
							{data.description}
						</Typography>
					</CardContent>

					<CardMedia title={data.title}>
						<a href={data.viewUrl} target="_blank"> {data.media} </a>
					</CardMedia>

					<CardActions>
						<Button size="small" color="primary" href={data.viewUrl} target="_blank" download>
							View Project
						</Button>
						<Button size="small" color="primary" href={data.repoUrl} target="_blank" download>
							View Source
						</Button>
					</CardActions>

				</Card>
			);
		});

		return (
			<div style={ styles.containerMain }>
				{ projects }
			</div>
		);
	}
}

function createStyles() {
	return {
		containerMain: {
			textAlign: 'center',
			marginTop: 70,
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center'
		},
		dataContainer: {
			width: 345,
			margin: 20,
			backgroundColor: '#ffffffdd'
		},
		dataMedia: {
			width: 300,
			margin: 10,
			borderRadius: 5
		}
	};
}