import React, { useState } from 'react';
import Button from './Button';

export default function ButtonPanel() {
	function handleChange(event) {
		console.log(event.target);
	}

	return (
		<div onClick={handleChange}>
			<Button name={'+'} />
			<Button name={'-'} />
			<Button name={'/'} />
			<Button name={'*'} />
			<Button name={'1'} />
			<Button name={'2'} />
			<Button name={'3'} />
			<Button name={'4'} />
			<Button name={'5'} />
			<Button name={'6'} />
			<Button name={'7'} />
			<Button name={'8'} />
			<Button name={'9'} />
			<Button name={'ac'} />
		</div>
	);
}
