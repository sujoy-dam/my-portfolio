import React from 'react';
import { useParams } from 'react-router-dom';
import RunClub from '../../assets/marathon.png'
import Matrimony from '../../assets/martimony.png'
import CrowdCube from '../../assets/crowdCube.png'
import DonateWarmth from '../../assets/DonateWarmth.png'
import { Link } from 'react-router-dom';
const projects = [
    {
        id: 1,
        name: "Bangla Matrimony",
        // title:"",
        technologies: ["React.js", "Tailwind CSS", "Firebase", "MongoDB"],
        description: "This is a simple and user-friendly matrimony website where people can create profiles, search for potential matches, and connect with them. It includes features like user registration, profile management, and search filters to help users find suitable matches easily. The website is built using React.js, Node.js, and MongoDB, ensuring a smooth and responsive experience.",
        image: Matrimony,
        github: "https://github.com/sujoy-dam/matrimony-client",
        liveSite: "https://matrimony-cbba3.firebaseapp.com"
    },
    {
        id: 2,
        name: "Run Club",
        technologies: ["MERN Stack", "Redux", "Stripe API"],
        description: "Run Cube is a simple and efficient marathon management system designed to help event organizers and participants manage marathons easily.This project is built using React.js for the frontend and Node.js with MongoDB for the backend, ensuring a fast and responsive experience. The platform makes event management easier by allowing organizers to handle participant registrations, event schedules, and result tracking efficiently.",
        image: RunClub,
        github: "https://github.com/sujoy-dam/run-club-client",
        liveSite: "https://marathon-management-syst-c7b91.firebaseapp.com"
    },
    {
        id: 3,
        name: "Crowd Cube",
        technologies: ["Next.js", "MongoDB", "Node.js", "Express"],
        description: "Crowd-Cube is a simple and user-friendly platform designed to help underprivileged people by connecting them with donors and volunteers. Users can create requests for help, donate to causes, and spread awareness about social issues.This website is built using React.js, Node.js, Express.js, and MongoDB, ensuring a smooth and responsive user experience.It focuses on accessibility, ease of use, and secure transactions to make donations and support more effective.",
        image: CrowdCube,
        github: "https://github.com/sujoy-dam/crowd-cube-client",
        liveSite: "https://crowd-cube.firebaseapp.com"
    },
    {
        id: 4,
        name: "Winter Care",
        technologies: ["React.js", "Firebase", "Tailwind CSS"],
        description: "Winter Care is a simple and user-friendly website designed to help people donate clothes to those in need. Users can easily register, list clothes for donation, and find nearby donation centers. The platform ensures a smooth experience with a clean and responsive design, making it accessible on all devices. This project is built using React.js, Node.js, Express.js, and MongoDB, ensuring a fast and efficient system for managing donations.The goal is to create a meaningful impact by connecting donors with organizations and individuals in need.",
        image: DonateWarmth,
        github: "https://github.com/sujoy-dam/winter-care",
        liveSite: "https://donate-warmth.firebaseapp.com"
    }
]


const Details = () => {
    const { id } = useParams()
    const data = projects.find(item => item.id == id)
    return (
        <div className='space-y-5 flex flex-col lg:flex-row bg-blue-950 p-20 justify-between items-center  gap-20'>
            <div className='w-full h-full lg:w-1/2'>
                <img src={data.image} alt="" className='flex-grow flex' />
            </div>
            <div className='w-full lg:w-1/2 text-white text-left space-y-4'>
                <h1 className='text-3xl text-white font-medium'>{data.name}</h1>
                <p className='max-w-lg'>{data.description}</p>
                <h2><span className='text-xl font-medium'>Used Technologies :</span>
                    {
                        data.technologies.map(item => <li>{item}</li>)
                    }
                </h2>

            </div>
        </div>
    );
};

export default Details;