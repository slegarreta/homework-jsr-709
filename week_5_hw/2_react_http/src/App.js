import React, { Component } from 'react';
import './App.css';

const APIKEY = '1d85e4833f8424524d92f74117ca0f3d';
// var city = ['Tehran', 'Barcelona', 'London']

export default class App extends Component {
	state = {
		websiteName: 'Open Weather Map!',
		data: {},
		url: `http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=imperial&appid=${APIKEY}`
	};

	componentDidMount(){
		this.makeRequest();

	}

	makeRequest = () => {
			fetch(this.state.url).then((response) => {
				return response.json();
			}).then((data) => {
				this.setState({
					data: data,
				})
			})
		};

	render() {
		console.log(this.state.data)

		return (
			<main>
				<h1 className="text-light">{this.state.websiteName}</h1>
				<div className="card rounded shadow p-3">
					<h1>{this.state.data.list && this.state.data.list[0].name}</h1>
					<h4>Temperature: {this.state.data.list && this.state.data.list[0].main.temp} {'\u00b0'}</h4>
					<p>Wind Speed: {this.state.data.list && this.state.data.list[0].wind.speed} MPH</p>
					<p>{this.state.data.list && this.state.data.list[0].weather[0].description}</p>
					<p><img src={`http://openweathermap.org/img/w/${this.state.data.list && this.state.data.list[0].weather[0].icon}.png`} alt="icon"/></p>
				</div>

				<div className="card rounded shadow p-3">
					<h1>{this.state.data.list && this.state.data.list[1].name}</h1>
					<h4>Temperature: {this.state.data.list && this.state.data.list[1].main.temp} {'\u00b0'}</h4>
					<p>Wind Speed: {this.state.data.list && this.state.data.list[1].wind.speed} MPH</p>
					<p>{this.state.data.list && this.state.data.list[1].weather[0].description}</p>
					<p><img src={`http://openweathermap.org/img/w/${this.state.data.list && this.state.data.list[1].weather[0].icon}.png`} alt="icon"/></p>
				</div>
				
				<div className="card rounded shadow p-3">
					<h1>{this.state.data.list && this.state.data.list[2].name}</h1>
					<h4>Temperature: {this.state.data.list && this.state.data.list[2].main.temp} {'\u00b0'}</h4>
					<p>Wind Speed: {this.state.data.list && this.state.data.list[2].wind.speed} MPH</p>
					<p>{this.state.data.list && this.state.data.list[2].weather[0].description}</p>
					<p><img src={`http://openweathermap.org/img/w/${this.state.data.list && this.state.data.list[2].weather[0].icon}.png`} alt="icon"/></p>
				</div>
			</main>
		);
	}
}
