import { nanoid } from "nanoid"
import { FaLinkedinIn, FaGithub, FaTwitter,FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaPython, FaGoogle } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';

import cocktail from "./images/coctail.jpg"
import tetris from "./images/tetris.jpg"
import food from "./images/food.jpg"
import portfolio from "./images/portfolio.jpg"


export const navbar = [
  {id:nanoid(), href:'#header', slug:'home'},
  {id:nanoid(), href:'#skills', slug:'skills'},
  {id:nanoid(), href:'#projects', slug:'projects'},
]
export const person = [
  {
    id: nanoid(),
    name: "i'm ali",
    job: 'junior full stack developer',
    info: 'turning ideas into interactive reality',
  },
  {
    id: nanoid(),
    link: 'https://github.com/fsmali?ocid=AIDcmm153qff2f_SEM__k_Cj0KCQjw_qexBhCoARIsAFgBleuzeATvtdm7zJNaGpygLCRcE1BoJLU8mdHe6viwCU0bwEzQTLlnC3EaAhpgEALw_wcB_k_',
    icon: <FaGithub />,
  },
  {
    id: nanoid(),
    link: 'https://twitter.com/?lang=en',
    icon: <FaTwitter />,
  },
];
export const skill = [
  {
    id: nanoid(),
    skill: 'html',
    icon: <FaHtml5 />,
    info: 'HTML, or HyperText Markup Language, is the standard markup language used to create and design documents on the World Wide Web.',
  },
  {
    id: nanoid(),
    skill: 'css',
    icon: <FaCss3 />,
    info: 'CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in HTML or XML.',
  },
  {
    id: nanoid(),
    skill: 'js',
    icon: <FaJs />,
    info: 'JavaScript (JS) is a high-level, interpreted programming language primarily used for adding interactivity and dynamic behavior to web pages.',
  },
  {
    id: nanoid(),
    skill: 'Python',
    icon: <FaPython />,
    info: 'Python is a high-level, interpreted programming language known for its simplicity and readability.',
  },
  {
    id: nanoid(),
    skill: 'nodejs',
    icon: <FaNodeJs />,
    info: "Node.js is an open-source, server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine.",
  },
  {
    id: nanoid(),
    skill: 'react',
    icon: <FaReact />,
    info: 'React is a popular open-source JavaScript library for building user interfaces, particularly for single-page applications (SPAs) and dynamic web applications.',
  },
  {
    id: nanoid(),
    skill: 'django',
    icon: <DiMongodb />,
    info: 'Django is a high-level open-source web framework written in Python that enables rapid development of secure and scalable web applications.',
  },
];
export const icons = [
  {
    id: nanoid(),
    link: 'https://www.linkedin.com/in/ali-dede/',
    icon: <FaLinkedinIn />,
  },
  {
    id: nanoid(),
    link: 'https://github.com/fsmali?ocid=AIDcmm153qff2f_SEM__k_Cj0KCQjw_qexBhCoARIsAFgBleuzeATvtdm7zJNaGpygLCRcE1BoJLU8mdHe6viwCU0bwEzQTLlnC3EaAhpgEALw_wcB_k_',
    icon: <FaGithub />,
  },
  {
    id: nanoid(),
    link: 'https://twitter.com/?lang=en',
    icon: <FaTwitter />,
  },
];
export const projects = [
  {
    id: nanoid(),
    title: 'tetris Game',
    text: 'I developed a Tetris game using vanilla JavaScript, HTML, and CSS, leveraging the Document Object Model (DOM) for dynamic manipulation of webpage elements. Tetris is a classic puzzle game where players arrange falling tetrominoes (geometric shapes composed of four square blocks) to create complete rows without gaps. As rows are completed, they disappear, and the player earns points. In my implementation, I utilized JavaScript to handle game logic such as controlling the movement of tetrominoes, detecting collisions with the game board, rotating tetrominoes, and clearing completed rows. I employed event listeners to capture user input, enabling players to move and rotate tetrominoes using keyboard controls. The HTML structure of the game includes elements for the game board, score display, and upcoming tetromino preview. The game board is represented as a grid, where tetrominoes fall and stack upon landing. CSS styles were applied to create visually appealing graphics and animations, including colorful tetromino shapes, smooth movement, and responsive design. By combining JavaScript for logic, HTML for structure, and CSS for styling, I created an interactive and engaging Tetris game that runs directly in the web browser. Players can enjoy hours of entertainment, challenging themselves to achieve high scores and improve their Tetris skills."',
    href1: 'https://github.com/fsmali/fsmali.github.io',
    href2: 'https://github.com/fsmali/fsmali.github.io',
    image: tetris,
    icon1: <FaGithub />,
    icon2: <FaGoogle />,
  },
  {
    id: nanoid(),
    title: 'Cocktail page',
    text: 'I built a cocktail page using React and CSS. The design was inspired by modern mixology trends, with sleek UI elements crafted to evoke sophistication. The page is powered by dynamic data fetched from an external API, allowing users to explore a diverse range of drink recipes. One of the key features is a user-friendly search functionality that enables users to easily find their favorite cocktails. Performance optimization was a priority, ensuring fast load times and smooth user interactions. Overall, the project showcases the seamless integration of React and CSS to create an engaging platform for cocktail enthusiasts.',
    image: cocktail,
    href1: 'https://github.com/fsmali/cocktail',
    href2: 'https://cocktail-page.netlify.app/',
    icon1: <FaGithub />,
    icon2: <FaGoogle />,
  },
  {
    id: nanoid(),
    title: 'Food Page',
    text: 'I developed a website with a full-stack architecture, combining MongoDB and JavaScript for the back end, and React and CSS for the front end. Using MongoDB as the database and JavaScript for server-side logic, I ensured efficient data storage and retrieval, while also facilitating dynamic content generation.On the front end, React and CSS were employed to craft a visually appealing and responsive user interface, enhancing the overall user experience. This seamless integration of technologies enabled the creation of a versatile and interactive website, capable of handling complex data interactions with ease.',
    href1: 'https://github.com/fsmali/top-ten-food',
    href2: 'https://top-ten-food.netlify.app/',
    image: food,
    icon1: <FaGithub />,
    icon2: <FaGoogle />,
  },
  {
    id: nanoid(),
    title: 'portfolio ',
    text: "I completed a portfolio project using React and CSS. Leveraging React's component-based architecture, I crafted a dynamic and responsive portfolio showcasing my skills, projects, and experience.CSS was utilized to design a visually appealing layout, ensuring a polished and professional presentation. The project highlights my proficiency in React development and showcases my portfolio in a modern and engaging manner.",





    href1: 'https://github.com/fsmali/portfolio',
    href2: 'https://github.com/fsmali/portfolio',
    image:  portfolio,
    icon1: <FaGithub />,
    icon2: <FaGoogle />,
  },
];