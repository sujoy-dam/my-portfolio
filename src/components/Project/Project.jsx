import React, { useEffect, useState } from 'react';
import RunClub from '../../assets/marathon.png'
import Matrimony from '../../assets/martimony.png'
import CrowdCube from '../../assets/crowdCube.png'
import DonateWarmth from '../../assets/DonateWarmth.png'
import { Link } from 'react-router-dom';
const projects=[
    {
      id: 1,
      name: "Matrimony",
    //   technologies: ["React.js", "Tailwind CSS", "Firebase", "MongoDB"],
      image: Matrimony,
      github: "https://github.com/sujoy-dam/matrimony-client",
      liveSite: "https://matrimony-cbba3.firebaseapp.com"
    },
    {
      id: 2,
      name: "Run Club",
    //   technologies: ["MERN Stack", "Redux", "Stripe API"],
      image: RunClub,
      github: "https://github.com/sujoy-dam/run-club-client",
      liveSite: "https://marathon-management-syst-c7b91.firebaseapp.com"
    },
    {
      id: 3,
      name: "Crowd Cube",
    //   technologies: ["Next.js", "MongoDB", "Node.js", "Express"],
      image: CrowdCube,
      github: "https://github.com/sujoy-dam/crowd-cube-client",
      liveSite: "https://crowd-cube.firebaseapp.com"
    },
    {
      id: 4,
      name: "Winter Care",
    //   technologies: ["React.js", "Firebase", "Tailwind CSS"],
      image: DonateWarmth,
      github: "https://github.com/sujoy-dam/winter-care",
      liveSite: "https://donate-warmth.firebaseapp.com"
    }
  ]

const Project = () => {
    // const [projects, setProjects] = useState([])
    // useEffect(() => {
    //     fetch('project.json')
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    // }, [])
    
    return (
        <div className='bg-blue-950 text-white  py-20' id="projects">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* <p>{projects.length}</p> */}
                    {/* hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800  */}
                    {/* text-white transform transition-transform duration-300 */}
                    {
                        projects.map((project) => (
                            <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg outline hover:outline-teal-500 outline-1 hover:outline-2 outline-teal-500 transform transition-transform duration-300 hover:scale-105'>
                                <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover' />
                                <h3 className='text-2xl font-bold mb-2'>
                                    {project.name}
                                </h3>
                                {/* <p className='text-gray-400 mb-4'>
                                    {
                                        project.technologies.map(item => (<span className='mr-2'>| {item}</span>))
                                    }
                                </p> */}
                                <div className='space-x-2'>
                                    <a href={project.github} target='_blank' className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                                        Github
                                    </a>
                                    <a href={project.liveSite} target='_blank' className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                                        Live Site
                                    </a>
                                    <Link to={`/details/${project?.id}`} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                                        Details
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Project;