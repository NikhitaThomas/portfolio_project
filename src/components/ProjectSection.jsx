import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: 'Huddle Landing Page',
    description: 'Created a landing page using React and TailwindCSS',
    image: '/images/desktop-design.jpg',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/NikhitaThomas/Huddle-Landing-Page',
    previewUrl: 'https://huddles-home-page.netlify.app/',
  },
  {
    id: 2,
    title: 'Bookmark Landing Page',
    description:
      'Created a Bookmark website landing page using TailwindCSS and Nextjs',
    image: '/images/desktop-preview.jpg',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/NikhitaThomas/bookmark-landing-page',
    previewUrl: 'https://bookmarks-home-page.netlify.app/',
  },
  {
    id: 3,
    title: 'Space Tourism Website',
    description: 'Space Tourism website using Nextjs and TailwindCSS',
    image: '/images/preview.jpg',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/NikhitaThomas/space-tourism',
    previewUrl: 'https://space-tourism-1234.netlify.app/',
  },
  {
    id: 4,
    title: 'Tip Calculator',
    description: 'Created a Tip calculator using React and TailwindCSS',
    image: '/images/Tip-calc.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/NikhitaThomas/Tip-Calculator-App',
    previewUrl: 'https://main--tip-calcuator-app.netlify.app/',
  },
];

function ProjectSection() {
  const [tag, setTag] = useState('All');

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="pt-12 p-10 min-h-screen">
      <h2 className="text-center text-4xl font-bold my-4">My Projects</h2>
      <div className="text-white flex justify-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
