import React from 'react'
import Tuter from "../images/tuter.png";
import PawPals from "../images/logo.gif";
import SJW from "../images/sjw.png";
import CC from "../images/cc.jpeg";
import services from '../images/services.png';
import petesza from '../images/petesza.png';
import blogit from '../images/bi.png';

const projects = [
    {
        id: 1,
        title: "Services",
        tools: "React, JavaScript, HTML, Tailwind and CSS",
        description: "Tuter is a social network for tutors and students to share questions, homework details and more in an online, efficient platform. Now tutors can be accurately prepared to show up to sessions with the right materials and expectations in hand. It's as simple as uploading a picture of your homework, filling out a few questions and submitting it. Then you're done and on your way to better learning!",
        image: services,
        link: "https://sarahgjacobs.github.io/services/"
    },
    {
        id: 2,
        title: "BlogIt",
        tools: "HTML, CSS, JavaScript, React.js, MongoDB, Express.js and Node.js",
        description: "BlogIt is an interactive, modern blogging website that allows users to register, login, browse and upload articles. It provides an intuitive and user-friendly interface for individuals to share their thoughts, ideas, and experiences with the world.",
        image: blogit,
        link: "https://github.com/sarahgjacobs/blogit"
    },
    {
        id: 3,
        title: "Pete's Za",
        tools: "HTML, CSS, JavaScript, React.js, MongoDB, Express.js and Node.js",
        description: "Hey there, pizza enthusiasts! Get ready to dive into the world of flavor-packed goodness with Pete's Za, your go-to pizza haven since 2023. We're all about serving up pies that not only hit the spot but also leave you craving more.",
        image: petesza,
        link: "https://sarahgjacobs.github.io/petes-za/"
    },
    {
        id: 4,
        title: "Tuter",
        tools: "HTML, CSS, JavaScript, React.js, MongoDB, Express.js and Node.js",
        description: "Tuter is a social network for tutors and students to share questions, homework details and more in an online, efficient platform. Now tutors can be accurately prepared to show up to sessions with the right materials and expectations in hand. It's as simple as uploading a picture of your homework, filling out a few questions and submitting it. Then you're done and on your way to better learning!",
        image: Tuter,
        link: "https://github.com/thebobfather2/tuterapp"
    },
    {
        id: 5,
        title: "PawPals",
        tools: "HTML, CSS, JavaScript, React.js, MongoDB, Express.js and Node.js",
        description: "Welcome to Paw Pals—where furry friendships begin! 🐾 Our mission? Finding homes for fur-ever love. Whether you're team cat, dog, or bunny, your purr-fect match awaits! Explore our pet database for breed, age, and personality info. Adoption is a journey, and we're your trusty guides. Our experts are here to help, and our resource hub covers pet care, training, and more. Start your search today—give a fur-iend a second shot at happiness! 🏡❤️🐶🐱🐰",
        image: PawPals,
        link: "https://github.com/thebobfather2/pawpals"
    },
    {
        id: 6,
        title: "Sarah Jacobs Writes",
        tools: "HTML, CSS, JavaScript, React.js, MongoDB, Express.js and Node.js",
        description: "Step into the extraordinary realms of my storytelling craft, where I conjure intricate plots and fantastical worlds. As a writer of fiction, sci-fi, and fantasy, I invite you to share in my adventures, where each word carries a piece of my heart and every page is an invitation to explore the limitless depths of imagination. This website is my go-to landing page for friends and family to view my pieces, then browse my available books on Amazon.",
        image: SJW,
        link: "https://github.com/sarahgjacobs/sarahjacobswrites"
    },
    {
        id: 7,
        title: "Carrot Calendar",
        tools: "HTML, CSS, JavaScript, React.js, MongoDB, Express.js and Node.js",
        description: "Gaining over $100k in revenue per year, Bobbys Rabbits needed a simple, efficient way to coordinate community events to boost interaction and sales. Carrot Calendar is a user-friendly calendar intended to handle online events, RSVPs and monetary transactions.",
        image: CC,
        link: "https://github.com/thebobfather2/carrotcalendar"
    },

];

const Card = ({ title, tools, description, image, link }) => {
    return (
        <div className="card">
            <img id="card-picture" src={image} alt={title} />
            <h2>{title}</h2>
            <h4>{tools}</h4>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="card-button">Learn More</button>
            </a>
        </div>
    );
};

function Projects() {
    return (
        <div className='project-page'>
            <h1>Projects</h1>
            <div className='replit-button'>
                <button>
                    <a href='https://replit.com/@sarahgjacobs' id='replit'>Replit</a>
                </button>
            </div>
            <div className='project-cards'>
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        tools={project.tools}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects