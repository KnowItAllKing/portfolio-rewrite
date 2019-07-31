import React from 'react';

import '../../Styles/About.css';

export const About = () => (
	<>
		<div className='about-body'>
			<div className='body-title'>
				<h1>About Me</h1>
			</div>
		</div>
		<div className='about-jumbo'>
			<div className='jumbotron'>
				<h1 className='display-3'>Who am I?</h1>
				<p className='lead'>
					I'm currently a student developer. I know Javascript & Typescript
					proficiently, and I also know some basic Java, Perl, and
					Python.
				</p>
				<hr className='my-4' />
				<h2 className='display-3'>What do I do?</h2>
				<p>
					I create and work on any project that interests me. In the
					past, I've mainly created Discord bots, but I plan on
					expanding my area of expertise.
				</p>
				<hr className='my-4' />
				<h2 className='display-3'>What expereince do I have?</h2>
				<p>
					I currently am working as front-end developer intern at Imperative Execution, a stock exchange.
					I've been making various data visualization sites for in-house use.
				</p>
				<p className='lead'>
					<a
						className='btn btn-primary btn-lg'
						href='mailto:yahikoxyz@gmail.com'
						role='button'>
						Contact me
					</a>
				</p>
			</div>
		</div>
	</>
);
