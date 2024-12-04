import React, { useEffect, useState } from 'react';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data.slice(0, 3))); // 최근 3건만 표시
  }, []);

  return (
    <div className="projects-section w50p">
      <h2>참여한 프로젝트</h2>
      {projects.length === 0 ? (
        <p>참여한 프로젝트가 없습니다</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectsSection;