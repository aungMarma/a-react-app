import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Thoughts from './components/Thoughts ';
import AddThought from './components/AddThought';

class App extends Component {
	state = {
		thoughts: [
			{ value: 'Just do it', edit: false },
			{ value: 'Believe in yourself', edit: false },
			{ value: 'Rejoice', edit: false },
			{ value: 'Keep curiosity alive', edit: false }
		],
		add: false,
		newThought: ''
	};

	handleAdd = () => {
		this.setState((prevState) => {
			let newState = Object.assign({}, prevState);
			newState.add = true;
			return newState;
		});
	};

	handleDelete = (id) => {
		this.setState((prevState) => {
			let newState = Object.assign({}, prevState);
			newState.thoughts = prevState.thoughts.filter((thought, i) => i !== id);
			return newState;
		});
	};

	handleEdit = (id) => {
		this.setState((prevState) => {
			let newState = Object.assign({}, prevState);
			newState.thoughts = prevState.thoughts.map((thought, i) => {
				if (i === id) thought.edit = true;
				return thought;
			});
			return newState;
		});
	};

	handleEditSubmit = (id) => {
		this.setState((prevState) => {
			let newState = Object.assign({}, prevState);
			newState.thoughts = prevState.thoughts.map((thought, i) => {
				if (i === id) thought.edit = false;
				return thought;
			});
			return newState;
		});
	};

	handleEditing = (id, value) => {
		this.setState((prevState) => {
			let newState = Object.assign({}, prevState);
			newState.thoughts = prevState.thoughts.map((thought, i) => {
				if (i === id) thought.value = value;
				return thought;
			});
			return newState;
		});
	};

	handleAddNewThought = (value) => {
		this.setState((prevState) => {
			let newState = Object.assign({}, prevState);
			newState.newThought = value;
			return newState;
		});
	};

	handleAddSubmit = (evt) => {
		evt.preventDefault();
		this.setState((prevState) => {
			let newState = Object.assign({}, prevState);
			let { thoughts } = newState;
			let obj = { value: newState.newThought, edit: false };
			thoughts.push(obj);
			newState.newThought = '';
			newState.add = false;
			return newState;
		});
	};

	render() {
		return (
			<React.Fragment>
				<NavBar totalThought={this.state.thoughts.length} onAdd={this.handleAdd} />
				<main className="container">
					<Thoughts
						thoughts={this.state.thoughts}
						onDelete={this.handleDelete}
						onEdit={this.handleEdit}
						onEditing={this.handleEditing}
						onEditSubmit={this.handleEditSubmit}
					/>
					{this.state.add && (
						<AddThought
							newThought={this.state.newThought}
							onAddChange={this.handleAddNewThought}
							onAddSubmit={this.handleAddSubmit}
						/>
					)}
				</main>
			</React.Fragment>
		);
	}
}

export default App;
