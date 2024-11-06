import React from 'react';

const projects = [
  {
    image: 'https://i.imgur.com/bzmw1bh.jpg',
    title: 'Infrastructuurproject Rotterdam',
    description: 'Grootschalige infrastructurele werkzaamheden'
  },
  {
    image: 'https://i.imgur.com/f1PTil2.jpg',
    title: 'Woningbouw Amsterdam',
    description: 'Duurzame woningbouwprojecten'
  },
  {
    image: 'https://i.imgur.com/OgldwgN.png',
    title: 'Utiliteitsbouw Utrecht',
    description: 'Moderne kantoorgebouwen'
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Recente Projecten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;