import React, { useState } from "react";
import { skills } from "../data";
import Skill from "./Skill";
const categories = ["all", ...new Set(skills.map((item) => item.category))];
const Skills = () => {
  const [menuItems, setMenuItems] = useState(skills);

  const filterItems = (item) => {
    if (item === "all") {
      setMenuItems(skills);
      // console.log(menuItems);
      return;
    }
    const newItems = skills.filter((skill) => skill.category === item);
    setMenuItems(newItems);
  };

  return (
    <section className='pageContainer'>
      <div className='titleContainer'>
        <h2 className='pageTitle'>Skills</h2>
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
        <div className='section-center-skills'>
          {menuItems.map((skill) => {
            return <Skill key={skill.id} {...skill}></Skill>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
