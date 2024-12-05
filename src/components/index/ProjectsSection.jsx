import React, { useEffect, useState } from 'react';
import Image from '../common/Image';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data.slice(0, 6))); // 최근 6건 표시
  }, []);

  return (
    <div className="projects-section w50p">
      <h2 className="text-2xl font-bold mb-4">참여한 프로젝트</h2>
      {projects.length === 0 ? (
        <p>참여한 프로젝트가 없습니다</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p> 
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsSection;