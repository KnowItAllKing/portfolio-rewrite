import React from 'react';

import { ProjectCards } from './ProjectCards';

import '../../Styles/Projects.css';

export const Projects = () => (
  <>
    <div className='project-body'>
      <div className='body-title'>
        <h1>Projects</h1>
      </div>
    </div>
    <ProjectCards />
  </>
);
