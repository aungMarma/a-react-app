import React, { Component } from 'react';
import Thought from './Thought';

class Thoughts extends Component {
	render() {
		const { thoughts, onDelete, onEdit, onEditing, onEditSubmit } = this.props;
		return (
			<div>
				{thoughts.map((thought, i) => (
					<Thought
						key={i}
						thought={thought}
						onDelete={onDelete}
						onEdit={onEdit}
						onEditing={onEditing}
						onEditSubmit={onEditSubmit}
						id={i}
					/>
				))}
			</div>
		);
	}
}

export default Thoughts;
