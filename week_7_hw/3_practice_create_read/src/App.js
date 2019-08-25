import React from 'react';
// Import statements for components
import firebase from 'firebase';

export default class App extends React.Component {
	state = {
		items: [],
		value: ''
	};
	componentDidMount() {
		// 1. firebase config file! we need to add this to get firebase to connect!
		var firebaseConfig = {
    apiKey: "AIzaSyCOOIkRvriEIa6So1s14IRVeyktCitJE4Y",
    authDomain: "jsr-709-sam-hw.firebaseapp.com",
    databaseURL: "https://jsr-709-sam-hw.firebaseio.com",
    projectId: "jsr-709-sam-hw",
    storageBucket: "",
    messagingSenderId: "385424267069",
    appId: "1:385424267069:web:356b4def5d4c8f84"
  };
		// 2. Initialize Firebase Instance
		firebase.initializeApp(firebaseConfig);
		// 3. Make a connection to the database portion of the firebase instance
		let database = firebase.database();
		// 3. Find the specific table we are looking for and make a connection to it
		let toDoListTable = database.ref('todolist');

		this.setState({
			toDoListTable: toDoListTable
		})
		// 4. Create a .on('value') event listener for this data base
		//This is a firebase method that listens for when a value on a table changes!
		// This method is triggered once when the listener is attached and again every time the data, including children, changes.
		// a. call the .val() method on the response
		// b. loop over all of the items in the returned object and turn them into an array
		// d. use setState to add the data to the state.
		toDoListTable.on('value', (response) => {
			let toDoListData = response.val();
			let toDoListArray = [];

			for (let item in toDoListData) {
				toDoListArray.push(toDoListData[item])
			}

			this.setState({
				items: toDoListArray
			})
		})

	}

	// 8. Create an handeChange event listener to handle the input from an input!

	handleChange = (e) => {
	this.setState({
		value: e.target.value
		})
	}

	handleClick = () => {
		this.state.toDoListTable.push({
			title: this.state.value
		})

		this.setState({
			value: ''
		})
	}

	// 9. Create an handleClick event listener to handle the click of a button
	// This function should take the data, turn into a data structure that matches the rest of your list
	// ie. maybe an object with a key title
	// Use the .push method of firebase to add the record to the firebase table

	render() {
		let listItems = this.state.items.map((item, index) => {
			return <li className="list-group-item">{item.title}</li>
		})
		//5. Loop over all of the to do list items now living in state from firebase!

		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-8">
						<h1 className="bg-light m-3 p-3">To Do List</h1>
					</div>
					<div className="col-12 m-3 p-3">
						<input type="text" value={this.state.value} onChange={this.handleChange} />
						<button className="btn btn-primary" onClick={this.handleClick}> Add Item </button>
							{/* 7. Create an input and a button to handle adding new data to firebase */}
					</div>
					<div className="col-4">
						<ol className="list-group">
								{/* 6. Add the variable that holds all of the to do list items here! */}
							{listItems}
						</ol>
					</div>
				</div>
			</div>
		);
	}
}
