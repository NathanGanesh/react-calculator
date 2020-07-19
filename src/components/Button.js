import React, { useState } from 'react';
import './button.css';
export default function Button(props) {
	function handleChange(event) {
		const value = event.target.event;
		if (value === '+') {
		}
		if (value === '-') {
		}
		if (value === '*') {
		}
		if (value === '/') {
		}
	}
	console.log(props);

	return (
		<div className="button-style">
			<button onClick={handleChange} type="button" name={props.name}>
				{props.name}
			</button>
		</div>
	);
}
