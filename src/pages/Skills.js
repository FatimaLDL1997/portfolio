import React, { useState } from "react";
import { skills } from "../data";
import { fullScreenAnimation } from "../animations";
import { lineAnimation } from "../animations";
import Skill from "./Skill";
import { motion } from "framer-motion";

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
    <motion.section
      variants={fullScreenAnimation}
      initial='hidden'
      animate='show'
      className='pageContainer'
    >
      <div className='titleContainer'>
        <h2 className='pageTitle'>Skills</h2>
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
        <div className='section-center-skills'>
          {menuItems.map((skill) => {
            return <Skill key={skill.id} {...skill}></Skill>;
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
