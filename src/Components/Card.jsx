import React from 'react';

export const Card = ({ title, subtitle }) => (
	<>
		<div
			className='card text-white bg-primary landing-card'
			style={{ width: '18rem' }}>
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<h6 className='card-subtitle mb-2 text-muted'>{subtitle}</h6>
			</div>
		</div>
	</>
);
