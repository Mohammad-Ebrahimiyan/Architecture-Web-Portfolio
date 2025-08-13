import React, { useState } from 'react';
import { ProjectsContext } from './ProjectsContext';
import { PROJECTS_DATA } from '../data/Projects';


export  function ProjectsProvider ({ children }) {
  const [projects, setProjects] = useState(PROJECTS_DATA);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
