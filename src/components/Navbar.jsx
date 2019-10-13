import React from 'react';

const NavBar = ({ totalThought, onAdd }) => {
	return (
		<React.Fragment>
			<button type="button" className="btn btn-primary">
				Thoughts <span className="badge badge-light">{totalThought}</span>
			</button>
			<button className="btn btn-secondary btn-sm" onClick={() => onAdd()}>
				<span className="badge badge-light">ADD</span>
			</button>
		</React.Fragment>
	);
};

export default NavBar;
