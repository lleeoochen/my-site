import React, { Component } from 'react';

import Constants from 'helpers/Constants';
import MediaCard from 'views/components/MediaCard';
import './style.css';

export default class CodingScreen extends Component {

	render() {
		document.title = Constants.PAGES.CODING.TITLE;
		let styles = createStyles();

		let dataList = [
			{
				title: 'GOLD Digger',
				detail: 'This is a data analysis website that helps UCSB students determine which classes to signup first before seats run out.',
				source: {
					view: 'https://ucsb-gold-digger.herokuapp.com/',
					repo: 'https://github.com/n-duncan/GOLD-Digger',
					image: Constants.IMAGES.GOLD_DIGGER
				}
			},
			{
				title: 'Web Chess',
				detail: 'This is an online chess game for chess lovers, with AI bot included.',
				source: {
					view: 'https://lleeoochen.github.io/web-chess/',
					repo: 'https://github.com/lleeoochen/web-chess',
					image: Constants.IMAGES.CHESS
				}
			},
			{
				title: 'Disk Galaxy',
				detail: 'This is a 2D shooting game made using SFML and C++. You can fight against AI enemies.',
				source: {
					view: '',
					repo: 'https://github.com/lleeoochen/Disk-Galaxy',
					video: 'https://www.youtube.com/embed/Ohq8ZeJKKxo'
				}
			},
			{
				title: 'My Personal Website',
				detail: 'This website is built to display my side projects, music recordings, and other hobbies.',
				source: {
					view: 'https://weitungchen.herokuapp.com/home',
					repo: 'https://github.com/lleeoochen/my-site',
					image: Constants.IMAGES.MY_WEBSITE
				}
			},
			{
				title: 'Chrome Editor',
				detail: 'You can bring this text editor extension anywhere you go.',
				source: {
					view: 'https://chrome.google.com/webstore/detail/chrome-editor/kefkdcgjkbijkajfmjochhmikmpmkofg?utm_source=chrome-ntp-icon',
					repo: 'https://github.com/lleeoochen/chrome-editor',
					image: Constants.IMAGES.CHROME_EDITOR
				}
			},
			{
				title: 'Notebook App',
				detail: 'This is a simple notebook app for Android users.',
				source: {
					view: Constants.APPS.NOTEBOOK_APP,
					repo: 'https://github.com/lleeoochen/android-notebook',
					video: 'https://www.youtube.com/embed/UnPiLyx3pAI'
				}
			}
		];

		let projects = dataList.map((data, index) => {
			return <MediaCard data={data} key={index}/>;
		});

		return (
			<div style={styles.containerMain}>
				{projects}
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
		}
	};
}