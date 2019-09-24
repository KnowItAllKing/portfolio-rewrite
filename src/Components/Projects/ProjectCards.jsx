import React from 'react';

const Card = ({ title, subtitle, link }) => (
  <>
    <div className='card text-white bg-dark' style={{ width: '18rem' }}>
      <div className='card-body'>
        <h5 className='card-title'>
          <i className='fa fa-github' />
          <a
            className='card-link'
            target='_blank'
            rel='noopener noreferrer'
            href={link}
            style={{ color: '#B9C3F3' }}
          >
            {title}
          </a>
        </h5>
        <h6 className='card-subtitle mb-2 text-muted'>{subtitle}</h6>
      </div>
    </div>
  </>
);

export const ProjectCards = () => (
  <>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-4'>
          <Card
            title='Portfolio'
            subtitle='This site - originally created to combine both learning React and to build my first portfolio.'
            link='https://github.com/KnowItAllKing/portfolio-rewrite'
          />
        </div>
        <div className='col-sm-4'>
          <Card
            title='Eru'
            subtitle='A Discord bot built with Discord.js which best represents the extent of my ability as a Javascript/Typescript developer.'
            link='https://github.com/akatsukixyz/eru'
          />
        </div>
        <div className='col-sm-4'>
          <Card
            title='Climate'
            subtitle="A simple web app built at HackTrin 2019 with a friend. Predicts temperatures in states' districts."
            link='https://github.com/KnowItAllKing/climate'
          />
        </div>
      </div>
    </div>
  </>
);
