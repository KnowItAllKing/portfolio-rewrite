import React from 'react';

import { Card } from '../Card';

export const LandingCards = () => (
	<>
		<div className='container'>
			<div className='row'>
				<div className='col-sm-4'>
					<Card title='Evaluate' />
				</div>
				<div className='col-sm-4'>
					<Card title='Develop' />
				</div>
				<div className='col-sm-4'>
					<Card title='Redefine' />
				</div>
			</div>
		</div>
	</>
);
