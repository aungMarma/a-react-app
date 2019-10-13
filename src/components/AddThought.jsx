import React, { Component } from 'react';

class AddThought extends Component {
	handleChange = (evt) => {
		this.props.onAddChange(evt.target.value);
	};
	render() {
		return (
			<form onSubmit={this.props.onAddSubmit}>
				<label>
					<input type="text" value={this.props.newThought} onChange={this.handleChange} />
				</label>
				<input className="btn btn-primary btn-sm m-2" type="submit" value="Submit" />
			</form>
		);
	}
}

export default AddThought;
