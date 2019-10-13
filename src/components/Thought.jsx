import React, { Component } from 'react';

class Thought extends Component {
	handleChange = (event) => {
		this.props.onEditing(this.props.id, event.target.value);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onEditSubmit(this.props.id);
	};
	render() {
		return (
			<div>
				{this.props.thought.edit === false ? (
					<div>
						<span>
							<span className="badge badge-primary m-2">{this.props.thought.value}</span>
						</span>
						<button onClick={() => this.props.onEdit(this.props.id)} className="btn btn-secondary btn-sm">
							EDIT
						</button>
						<button
							className="btn btn-danger btn-sm m-2"
							onClick={() => this.props.onDelete(this.props.id)}
						>
							DELETE
						</button>
					</div>
				) : (
					<form onSubmit={this.handleSubmit}>
						<label>
							<input type="text" value={this.props.thought.value} onChange={this.handleChange} />
						</label>
						<input className="btn btn-primary btn-sm m-2" type="submit" value="Submit" />
					</form>
				)}
			</div>
		);
	}
}

export default Thought;
