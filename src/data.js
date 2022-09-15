import React from "react";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiFillCar,
} from "react-icons/ai";
import { FaRobot, FaCube, FaShoppingCart } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { TbDeviceComputerCamera } from "react-icons/tb";

export const topSkills = [
  {
    id: 1,
    text: "JS",
  },
  {
    id: 2,
    text: "REACT",
  },
  {
    id: 3,
    text: "CSS",
  },
  {
    id: 4,
    text: "HTML",
  },
  {
    id: 5,
    text: "Arduino",
  },
  {
    id: 6,
    text: "C & C++",
  },
];
export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/resume",
    text: "Resume",
  },
  {
    id: 3,
    url: "/skills",
    text: "Skills",
  },
  {
    id: 4,
    url: "/projects",
    text: "Projects",
  },
  {
    id: 5,
    url: "/hobbies",
    text: "Hobbies",
  },
];

export const projects = [
  {
    id: 1,
    icon: <FaRobot />,
    text: "Autonomous Robot",
    category: "Embedded",
    vid: "https://www.youtube.com/embed/b1aJYZsqKdw",
    desc: "In the last year of my Mechatronics Engineering program, I got to build and program an amazing robotic project that combines Arduino and Python programming together. The robot's goal is to autonomously find & pick 2 small dark green and 2 big light green Legos and place them at different locations based on their sizes/colours. Then return home. The robot was able to complete its tasks within the time limit given and return exactly where it started out.",
  },
  {
    id: 2,
    icon: <AiFillCar />,
    text: "Bluetooth RC Car",
    category: "Embedded",
    vid: "https://www.youtube.com/embed/_VZ0PIWQRv4",
    desc: "RC Car Inspired by DIY RC Cars online, I created my own from scratch using Arduino, 2 back gear motors, Adafruit Motor shield and a simplified steering mechanism.The first prototype of this project was made from cardboard. Later, I got to use a laser cutter and a 3D printer to create a nicer and stronger wheel attachment, chassis, and steering mechanism. The car can be controlled using any smart phone once the 'car controller' app, which I created using MIT App Inventor 2, is downloaded.",
  },
  {
    id: 3,
    icon: <GiFactory />,
    text: "Factory I/O Simulations",
    category: "Manufacturing",
    vid: "https://www.youtube.com/embed/GX4YVvpWhGs",
    desc: "Factory I/O is a software that provides more than 20 scenes inspired by real world control tasks in factories and warehouses. It also provides the user with flexibility to create their own control tasks. These control systems in Factory I/O can be controlled using many different drivers including but not limited to all PLC brands and common automation technologies in the market. For my Factory I/O projects, I used WinSPS-S7, which is a programming and simulation software that can be connected to Factory I/O for simulation, and can allow the use of LAD, STL and FBD programming languages. I also used block coding in the Control I/O driver to program some of other scenes. ",
  },
  {
    id: 4,
    icon: <TbDeviceComputerCamera />,
    text: "Python Security Camera",
    category: "Security",
    vid: "https://www.youtube.com/embed/P8fikhLsUjo",
    desc: " I coded a Python Security Camera app which uses scikit-image, a collection of algorithms and a part of the image processing in Python, Scikit-image can be used for computing the mean structural similarity index between current and previous image frames which is how motion can be detected in a video.  The application gives the user time to leave the space so that the detection doesn’t start right away by setting up a timer. Once the timer is done counting down, comparison between image frames will start and, thus, any motion detection will be sent over text to the user immediately. Also, if any motion is detected, a video recording of that instance will be stored in the security camera file under ‘output.avi’.",
  },
  {
    id: 5,
    icon: <FaCube />,
    text: "3D Cadded Models",
    category: "Modelling",
    vid: "https://www.youtube.com/embed/IklHF9jQogU",
    desc: "I have created many 3D models during my studies and some of the best are the ones shown in the videos. To know more about the refregirator project you can click ",
  },
  {
    id: 6,
    icon: <FaShoppingCart />,
    text: "Grocery Bud",
    category: "Web",
    vid: "",
    desc: "This website I made can help you manage your budget better.Through it, you can create infinite number of lists. Each list calculates its total for you automatically each time you add or remove an item. Also there is no limit as to how much items you can delete and add I have also added localStorage too to make more easy to use. So everytime you need to leave your phone and come back to it later or everytime you refresh the page, you will lose no data at all. ",
    url: "https://groceryhelper2022.netlify.app/",
  },
  {
    id: 7,
    icon: <AiFillProject />,
    text: "Projects Website",
    category: "Web",
    vid: "",
    desc: "Inspired by John Smilga's projects website, I decided to categorize and create my own collection of projects all under one website. I used Figma to draw out my plan and decide on which colour scheme looks best. Then I started with the SCSS and HTML followed by JS. I made sure its responsive on all screens and has the least cross browser compatibility issues possible. I used GitHub Webpages and also Netlify this time to publish my website by committing and pushing the code from my VS Code directly to GitHub and Netlify.  So far, I only have Vanilla JS projects to share with you on it. I envision this website to be filled with amazing projects in the future as I teach myself more skills.",
    url: "https://projects-fatima.netlify.app/",
  },
  {
    id: 8,
    icon: <BsPersonCircle />,
    text: "Portfolio Website",
    category: "Web",
    vid: "",
    desc: " It all started with watching some freeCodeCamp and Udemy tutorials and imitating some of their landing webpages. I then got the inspiration to create my own website and to design it myself as well. I started out with Figma to visualize the design and to figure out how to place all the elements together. After that, I used HTML, SCSS and JavaScript to bring my design to life. I made sure it is responsive to all different screen sizes. I also made sure it is easy to navigate through it no matter which device you are on. I used Gihub Webpages, afterwards to publish my website by commiting and pushing the code from VS Code directly to Github.As you can see by now since you are on the website, it has so much to tell you about who I am which was my goal for this project. Currently, I am learning more about JavaScript and React and applying what I learn to improve on this website everytime I get the chance to.",
    url: "https://fatima-labade.netlify.app/page3.html#",
  },
];
export const skills = [
  {
    id: 1,
    url: "/images/html.png",
    category: "Web",
    text: "HTML",
  },
  {
    id: 2,
    url: "/images/nx12.png",
    category: "cadding",
    text: "Seimens NX",
  },
  {
    id: 3,
    url: "/images/factoryIO.png",
    category: "manufacturing",
    text: "Factory IO",
  },
  {
    id: 4,
    url: "/images/arduino.png",
    category: "microcontrollers",
    text: "Arduino",
  },
  {
    id: 5,
    url: "/images/soldering.png",
    category: "hardware",
    text: "Soldering",
  },
  {
    id: 6,
    url: "/images/css.png",
    category: "Web",
    text: "CSS",
  },
  {
    id: 7,
    url: "/images/react.png",
    category: "Web",
    text: "REACT",
  },
  {
    id: 8,
    url: "/images/js.png",
    category: "Web",
    text: "JS",
  },
  {
    id: 9,
    url: "/images/raspberryPI.png",
    category: "microcontrollers",
    text: "Raspberry Pi",
  },
  {
    id: 10,
    url: "/images/sw.png",
    category: "cadding",
    text: "SolidWorks",
  },
  {
    id: 11,
    url: "/images/pcb.png",
    category: "hardware",
    text: "PCB Design",
  },
  {
    id: 12,
    url: "/images/AI.png",
    category: "design",
    text: "Illustrator",
  },
  {
    id: 13,
    url: "/images/python.png",
    category: "software",
    text: "Python",
  },
  {
    id: 14,
    url: "/images/c.png",
    category: "software",
    text: "C",
  },
  {
    id: 15,
    url: "/images/C++.png",
    category: "software",
    text: "C++",
  },
  {
    id: 17,
    url: "/images/java.png",
    category: "software",
    text: "Java",
  },
  {
    id: 18,
    url: "/images/figma.png",
    category: "design",
    text: "Figma",
  },
  {
    id: 19,
    url: "/images/fusion.png",
    category: "cadding",
    text: "Fusion",
  },
  {
    id: 20,
    url: "/images/gimp.png",
    category: "design",
    text: "Gimp",
  },
  {
    id: 21,
    url: "/images/inkscape.png",
    category: "design",
    text: "Inkscape",
  },
  {
    id: 22,
    url: "/images/matlab.png",
    category: "software",
    text: "Matlab",
  },
  {
    id: 23,
    url: "/images/mhj.svg",
    category: "software",
    text: "MHJ",
  },
  {
    id: 24,
    url: "/images/mySQL.png",
    category: "Web",
    text: "MySQL",
  },
  {
    id: 25,
    url: "/images/office.png",
    category: "software",
    text: "Office",
  },
  {
    id: 26,
    url: "/images/oop.png",
    category: "software",
    text: "OOP",
  },
  {
    id: 27,
    url: "/images/ps.png",
    category: "design",
    text: "Photoshop",
  },
  {
    id: 28,
    url: "/images/ros.png",
    category: "software",
    text: "ROS",
  },
  {
    id: 29,
    url: "/images/sketchup.png",
    category: "cadding",
    text: "Sketch Up",
  },
  {
    id: 30,
    url: "/images/autocad.png",
    category: "cadding",
    text: "Auto CAD",
  },
  {
    id: 31,
    url: "/images/tinkercad.png",
    category: "cadding",
    text: "Tinker CAD",
  },
];

export const hobbies = [
  {
    id: 8,
    img: "/images/art/forest.jpg",
    text: " Forest Vibes - Acrylics",
  },
  {
    id: 3,
    img: "/images/art/beach.jpg",
    text: "Tropical Beach - Acrylics",
  },
  {
    id: 2,
    img: "/images/art/hammock.jpg",
    text: "Hammock on the Sea - Acrylics",
  },
  {
    id: 4,
    img: "/images/art/river.png",
    text: "River - digital",
  },
  {
    id: 5,
    img: "/images/art/actor2.PNG",
    text: "Turkish Actress - Prisma",
  },
  {
    id: 6,
    img: "/images/art/balloon_LI.jpg",
    text: "Air Baloon - Digital",
  },
  {
    id: 7,
    img: "/images/art/bearzoom.jpg",
    text: "Bear (zoomed) - oil pastal",
  },
  {
    id: 1,
    img: "/images/art/cat.PNG",
    text: "Cat - Prisma",
  },
  {
    id: 9,
    img: "./images/art/dog.PNG",
    text: "Dog - Prisma",
  },
  {
    id: 10,
    img: "/images/art/elephant.jpg",
    text: "Elephant - Oil Pastal",
  },
  {
    id: 11,
    img: "/images/art/elephantzoom.jpg",
    text: "Elephant (zoomed) - Oil Pastal",
  },
  {
    id: 12,
    img: "/images/art/horses.PNG",
    text: "Love Horses - Acrylics",
  },
  {
    id: 13,
    img: "/images/art/parrot2.PNG",
    text: "Parrots - Prisma",
  },
  {
    id: 14,
    img: "/images/art/panda.PNG",
    text: "Panda - Prisma",
  },
  {
    id: 15,
    img: "/images/art/boy.PNG",
    text: "Young Actor - Graphite",
  },
  {
    id: 16,
    img: "/images/art/window.PNG",
    text: "Window - Acrylics",
  },

  {
    id: 17,
    img: "/images/art/dreams.PNG",
    text: " Dreams - Oil Pastal",
  },
  {
    id: 18,
    img: "/images/art/lillies.JPG",
    text: " Lillies- Oil Pastal",
  },
  {
    id: 19,
    img: "/images/art/mermaid.jpg",
    text: "Mermaid - Oil Pastal",
  },
];

export const footerLinks = [
  {
    id: 1,
    text: "Email",
    icon: <AiOutlineMail />,
    url: "mailto:fatimalabade@gmail.com",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: <AiOutlineLinkedin />,
    url: "https://www.linkedin.com/in/fatima-labade/",
  },
  {
    id: 3,
    text: "Github",
    icon: <AiFillGithub />,
    url: "https://github.com/FatimaLDL1997?tab=repositories",
  },
];
