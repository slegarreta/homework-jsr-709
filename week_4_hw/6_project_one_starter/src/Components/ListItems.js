import React, { Component } from 'react';

export default class ListItem extends Component {

	render() {
		return (
			<li className="list-group-item text-left">
				<b>{this.props.food.name}</b>
				<b>${this.props.food.price}</b>
				<button onClick={this.props.remove} className="remove" className="btn btn-warning">Remove</button>
			</li>
		);
	}
}
