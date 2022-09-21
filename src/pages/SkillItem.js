import React from "react";
import { useParams } from "react-router-dom";
import { skills } from "../data";

const SkillItem = () => {
  const { skillId } = useParams();
  const skill = skills.find((skill) => skill.id == skillId);
  const { id, category, text } = skill;

  return (
    <section>
      <h3 className='categoryTitle'>{category}</h3>

      <h1 className='projectTitle'>{text}</h1>
    </section>
  );
};

export default SkillItem;
