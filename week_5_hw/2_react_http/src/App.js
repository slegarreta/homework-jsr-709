import React, { Component } from 'react';
import './App.css';

const APIKEY = '1d85e4833f8424524d92f74117ca0f3d';
var city = ['Tehran', 'Barcelona', 'London']

export default class App extends Component {
	state = {
		websiteName: 'Open Weather Map!',
		data: {},
		url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`,
	};

	componentDidMount(){
		this.makeRequest();
	}

	makeRequest = () => {
		for (let i = 0; i < city.length; i++){
			// return this.state.url
			console.log(this.state.url);
		
			fetch(this.state.url).then((response) => {
				return response.json();
			}).then((data) => {
				console.log(data)
				this.setState({
					data: data,
				})
			})
		}
	};

	render() {
		return (
			<main>
				<h1 className="text-light">{this.state.websiteName}</h1>
				<input onChange={this.typingItem} type="text" value={this.state.value} id="input"></input>
				<button onClick={this.addItem} className="btn btn-primary">Search Zipcode</button>
				<div className="card rounded shadow p-3">
					<h1>{this.state.data.name}</h1>
					<h4>Temperature: {this.state.data.main && this.state.data.main.temp} {'\u00b0'}</h4>
					<p>Wind Speed: {this.state.data.wind && this.state.data.wind.speed} MPH</p>
					<p>{this.state.data.weather && this.state.data.weather[0].description}</p>
					<p><img src={`http://openweathermap.org/img/w/${this.state.data.weather && this.state.data.weather[0].icon}.png`} /></p>
				</div>
			</main>
		);
	}
}
