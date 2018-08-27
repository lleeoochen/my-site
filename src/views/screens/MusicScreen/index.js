import React, { Component } from 'react';
import { StaticRouter } from 'react-router';

import Constants from 'helpers/Constants';
import MediaCard from 'views/components/MediaCard';
import './style.css';

export default class MusicScreen extends Component {
	render() {
		document.title = Constants.PAGES.CODING.TITLE;
		let styles = createStyles();

		let dataList = [
			{
				title: 'Elgar Cello Concerto Mvmt1',
				detail: 'This is my solo recording of Elgar Cello Concerto Movement 1 with Lynbrook Orchestra at Carnegie Hall (June 2016).',
				source: {
					video: 'https://drive.google.com/file/d/0Bw1z8QIRVZiAa3V2dzRkb0p2MTA/preview'
				}
			},
			{
				title: 'Shostakovich Cello Concerto Mvmt1',
				detail: 'This is my solo recording of Shostakovich Cello Concerto Movement 1 with CPYO at California Theater (June 2016).',
				source: {
					video: 'https://www.youtube.com/embed/Usta1yKU_EE'
				}
			},
			{
				title: 'Dvorak Cello Concerto Mvmt2',
				detail: 'This is my recording of Dvorak Cello Concerto Movement 2 at My College Dorm (June 2017).',
				source: {
					video: 'https://drive.google.com/file/d/15nl78Ro20QK20mFFmroBOcEX69a7Ws4O/preview'
				}
			},
			{
				title: 'Prokofiev Cello Concerto Mvmt1',
				detail: 'This is my recording of Prokofiev Cello Concerto Movement 1 at My Instructor\'s place (October 2014).',
				source: {
					video: 'https://drive.google.com/file/d/0Bw1z8QIRVZiAQmE5Q0VMQlV6X3M/preview'
				}
			}
		];

		let recordings = dataList.map((data, index) => {
			return <MediaCard data={data} key={index}/>;
		});

		return (
			<div style={ styles.containerMain }>
				{recordings}
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