import React, { useState } from "react";
import { projects } from "../data";
import Project from "./Project";
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
    <section className='pageContainer'>
      <div className='titleContainer'>
        <h2 className='pageTitle'>Projects</h2>
      </div>

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
    </section>
  );
};

export default Projects;
