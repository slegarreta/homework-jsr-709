import React, { Component } from 'react';
import './App.css';
import FarmAnimal, { HousePet } from './Constructors/Animals'
import data from './Json.json';

export default class App extends Component {
	state = {
		websiteName: 'Animals and Pets :)',
		animals: []
	};

	componentDidMount(){
		let animalsAndPets = [];
		for (let animo of data.animals) {
			let newAnimal = new FarmAnimal(animo.name, animo.sound, animo.image);
			console.log(newAnimal)
			animalsAndPets.push(newAnimal);	
	} console.log(animalsAndPets)
	let hobbes = new HousePet('hobbes', 'WOOOOOOOO', 'https://www.yourpurebredpuppy.com/dogbreeds/photos-AB/beaglesf3.jpg');
	let babyHobbes = new HousePet('baby hobbes', 'arf', 'https://3wq24a3fnmyg4dtk8q2jysx2-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/17212469_web1_Beagle_puppy_sitting_on_grass.jpg');
	animalsAndPets.push(hobbes, babyHobbes);
	this.setState({
		animals: animalsAndPets
	}); 

}


render() {
	return (
		<main className="container p-3">
			<h1>{this.state.websiteName}</h1>
			<div className="row justify-content-center">
				{this.state.animals.map((animal, index) => {
					return (
							<div className="card col-sm-2 p-3 m-1"onClick={animal.sound}>
								<img src={animal.image} />
								<h2>{animal.name}</h2>
							</div>
						);
					
				})}
			</div>
		</main>
	);
}
}
