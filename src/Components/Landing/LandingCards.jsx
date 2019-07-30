import React from 'react';

import { Card } from '../Card';

export const LandingCards = () => (
	<>
		<div className='container'>
			<div className='row'>
				<div className='col-sm-4'>
					<Card title='Evaluate' subtitle='Before stepping into solving a problem, careful evaluation is required to ensure the best solution.' />
				</div>
				<div className='col-sm-4'>
					<Card title='Develop' subtitle='Ideas must be fully developed before they can become potential solutions. Trial and error is applied with past experience to maximize the outcome.' />
				</div>
				<div className='col-sm-4'>
					<Card title='Redefine' subtitle="Solutions redefine old standards and broaden horizons. They don't solve anything if they don't change anything." />
				</div>
			</div>
		</div>
	</>
);
