import React, { Component } from 'react';
import { StaticRouter } from 'react-router';
import { Card, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

import Constants from 'helpers/Constants';

export default class MediaCard extends Component {

	constructor(props) {
		super(props);
		let data = this.props.data || {
			title: undefined,
			detail: undefined,
			source: {
				view: undefined,
				repo: undefined,
				video: undefined,
				image: undefined
			}
		};
		this.state = {
			data: data
		};
	}

	loadTitle(title) {
		if (title) return (
			<Typography
				gutterBottom
				variant="headline"
				component="h2">
				{title}
			</Typography>
		);
	}

	loadDetail(detail) {
		if (detail) return (
			<Typography
				component="p">
				{detail}
			</Typography>
		);
	}

	loadImage(image, style) {
		if (image && style) return (
			<img src={image} style={style}/>
		);
	}

	loadVideo(video, style) {
		if (video && style) return (
			<iframe
				src={video}
				style={style}
				allowfullscreen="allowfullscreen"/>
		);
	}

	loadActionButton(link, label) {
		if (link && label) return (
			<Button
				size="small"
				color="primary"
				href={link}
				target="_blank"
				download>
				{label}
			</Button>
		);
	}

	render() {
		let {data} = this.state;
		let styles = createStyles();

		return (
			<Card style={styles.dataContainer}>
				<CardContent>
					{this.loadTitle(data.title)}
					{this.loadDetail(data.detail)}
				</CardContent>
				<CardMedia title={data.title}>
					<a href={data.source.view} target="_blank">
						{this.loadImage(data.source.image, styles.dataMedia)}
						{this.loadVideo(data.source.video, styles.dataMedia)}
					</a>
				</CardMedia>
				<CardActions>
					{this.loadActionButton(data.source.view, "View Project")}
					{this.loadActionButton(data.source.repo, "View Source")}
				</CardActions>
			</Card>
		);
	}
}

function createStyles() {
	return {
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
