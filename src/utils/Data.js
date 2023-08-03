import { SiReact, SiCss3, SiHtml5, SiMysql, SiBootstrap, SiJavascript, SiMongodb } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi'

import kjfood from '../assets/KJs Food.png'
import lush from '../assets/Lush.png'
import ReadNews from '../assets/Read-News.png'
import hitTheBug from '../assets/hetthebug.png'

export const Skills = [
    {
        id: 0,
        tech: 'HTML',
        icon: <SiHtml5 />
    },
    {
        id: 1,
        tech: 'CSS',
        icon: <SiCss3 />
    },
    {
        id: 2,
        tech: 'Javascript',
        icon: <SiJavascript />
    },
    {
        id: 3,
        tech: 'Bootstrap',
        icon: <SiBootstrap />
    },
    {
        id: 4,
        tech: 'React JS',
        icon: <SiReact />
    },
    {
        id: 5,
        tech: 'Core Java',
        icon: <BiLogoJava />
    },
    {
        id: 6,
        tech: 'My SQL',
        icon: <SiMysql />
    },
    {
        id: 7,
        tech: 'MongoDB',
        icon: <SiMongodb />
    }
]

export const projectDetails = [
    {
        id: 0,
        projectName: 'Restaurant Website',
        projectDescription: 'It typically includes features such as a front-page, menu-page with price and search bar, the contact page is made with the help of google sheet, and there is a location of the restaurant. And Database is yet to be made',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Google sheet'],
        projectPic: kjfood,
        projectUrl: 'https://www.google.com',
        reverse: false,
    },
    {
        id: 1,
        projectName: 'Red-News',
        projectDescription: 'It typically includes features such as a Reuseable components, and uses an API to fetch news of multiple types and displays them.',
        technologies: ['React JS', 'Bootstrap', 'API'],
        projectPic: ReadNews,
        projectUrl: 'https://www.google.com',
        reverse: true,
    },
    {
        id: 2,
        projectName: 'Plant selling Website',
        projectDescription: 'It is plant selling website',
        technologies: ['HTML', 'CSS'],
        projectPic: lush,
        projectUrl: 'https://www.google.com',
        reverse: false,
    },
    {
        id: 3,
        projectName: 'Hit The Bug',
        projectDescription: 'It is a game developed as a mini project on html css and javascript. it typically runs for one minute and when the bug appears on the screen you have to hit it and on hit the score increases.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        projectPic: hitTheBug,
        projectUrl: 'https://www.google.com',
        reverse: true,
    }
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects'
    },
    {
        id: 3,
        name: 'Contact Me',
        href: 'Contact'
    }
]