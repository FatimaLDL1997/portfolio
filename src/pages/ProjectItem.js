import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data";
import { motion } from "framer-motion";
import { lineAnimation } from "../animations";
const ProjectItem = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id == projectId);
  const { id, vid, category, text, desc } = project;
  const handleRead = () => {
    setReadMore(!readMore);
  };
  const [readMore, setReadMore] = useState(false);

  return (
    <section>
      <h1 className='projectTitle'>{text}</h1>
      <motion.hr
        className='line'
        variants={lineAnimation}
        style={{ color: "#404f4f", height: " 1px", background: "#d4a373" }}
      ></motion.hr>
      <h3 className='categoryTitle'>{category}</h3>

      <div className='project-discription'>
        <h5 className='descText' id={id}>
          {readMore ? desc : `${desc.substring(0, 150)}...`}

          <span className={`read-more`} onClick={() => handleRead()}>
            {readMore ? " read less" : " read more"}
          </span>
          {"."}
        </h5>
        <div className='video'>
          <iframe
            width='560'
            height='315'
            src={vid}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
