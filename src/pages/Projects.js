import React, { useState } from "react";
import { projects } from "../data";
import Project from "./Project";
import { fullScreenAnimation } from "../animations";
import { motion } from "framer-motion";
import { lineAnimation } from "../animations";

const categories = ["all", ...new Set(projects.map((item) => item.category))];
const Projects = () => {
  const [menuItems, setMenuItems] = useState(projects);

  const filterItems = (item) => {
    if (item === "all") {
      setMenuItems(projects);
      // console.log(menuItems);
      return;
    }
    const newItems = projects.filter((project) => project.category === item);
    setMenuItems(newItems);
  };

  return (
    <motion.section
      variants={fullScreenAnimation}
      initial='hidden'
      animate='show'
      className='pageContainer'
    >
      <div className='titleContainer'>
        <h2 className='pageTitle'>Projects</h2>
      </div>
      <motion.hr
        className='line'
        variants={lineAnimation}
        style={{ color: "#404f4f", height: " 1px", background: "#d4a373" }}
      ></motion.hr>

      <div className='projectsContainer'>
        <div className={`btns-container `}>
          {categories.map((item, index) => {
            return (
              <button
                className={"category-btn"}
                type='button'
                onClick={() => filterItems(item)}
                key={index}
                id={index}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className='section-center'>
          {menuItems.map((project) => {
            return <Project key={project.id} {...project}></Project>;
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
