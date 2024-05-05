"use client"
import { useState } from "react";
import "./projects.css"

interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    technologies: string[];
  }
  
  const projectsData: Project[] = [
    {
      id: 1,
      name: 'PriceAlert',
      description: 'Handy platform where you can monitor Amazon products prices.',
      imageUrl: 'projects/priceAlertPhoto.jpg',
      technologies: ['Next.js ','Typescript ','MongoDB ','Axios ','Tailwind ','Cheerio '],
    },
    {
        id: 2,
        name: 'Flow field',
        description: 'Flow field created using p5.js. Its a computational construct that shows flow of fluid or particles through space.',
        imageUrl: 'projects/p5.jpg',
        technologies: ['P5.js ','JavaScript '],
    },
    {
        id: 3,
        name: 'Webflix',
        description: 'Imagine a website that suggests other websites based on your unique preferences..',
        imageUrl: 'projects/webflix.png',
        technologies: ['Javascript ','React ','Node '],
    },
    {
        id: 4,
        name: 'Map',
        description: 'Map made using OpenRouteService. Can show routes between 2 places and has an isochrone feature.',
        imageUrl: 'projects/map.jpg',
        technologies: ['Lit ','Vaadin ','Node ','Typescript ','Leaflet ','ORS '],
    },
    {
        id: 5,
        name: 'Portfolio-v1',
        description: 'My first portfolio that i made in 3days.',
        imageUrl: 'projects/portfolio-picture.png',
        technologies: ['React ','Javascript ','CSS '],
    },
  ];

  const Projects: React.FC = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const handleProjectChange = (index: number) => {
      setCurrentProjectIndex(index);
    };

    return(
    <div className="grid items-center mb-20" id="projects">
    <h2 className="flex justify-center my-20 text-4xl">Projects</h2>
    <div className="border flex justify-between p-6">
    {/*Left Side*/}
    <div className="grid justify-start text-nowrap w-1/6 py-8">
      {projectsData.map((project, index) => (
        <button
          key={project.id}
          onClick={() => handleProjectChange(index)}
          className="project-select w-full text-start font-bold"
        >{project.name}
        </button>
      ))}
    </div>

    {/*Right Side*/}
        <div className="flex items-center flex-row">
            <img
                loading="lazy"
                src={projectsData[currentProjectIndex].imageUrl}
                alt={projectsData[currentProjectIndex].name}
                width={300}
                className="mb-4 p-4 max-w-200 "
            />
            <div className="flex flex-col">
            <h2 className="font-bold text-center">{projectsData[currentProjectIndex].name}</h2>
            <p className="text-wrap mx-4 truncate w-[20rem]">{projectsData[currentProjectIndex].description}</p>
            <p className="technologies text-center p-2">{projectsData[currentProjectIndex].technologies} </p>
            {/* .join(", ") maybe ? */}
            </div>
        </div>
    </div>
    </div>
    )
}
export default Projects;