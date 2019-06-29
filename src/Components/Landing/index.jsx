import React from 'react';

import { LandingCards } from './LandingCards';

import '../../Styles/Landing.css';

export const Landing = () => (
	<>
		<div className='landing-body'>
			<div className='body-title'>
				<h1>Kai</h1>
			</div>
		</div>
		<LandingCards />
	</>
);
