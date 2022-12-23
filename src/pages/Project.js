import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = ({ id, icon, text }) => {
  return (
    <div key={id} className='project-Item'>
      <div className='projectText'>
        <div className='projectImgContainer'>
          <i className='projectImg'>{icon}</i>
        </div>
        {text}
      </div>
      <a className='go-to' href={`/projects/${id}`}>
        <HiOutlineExternalLink />
      </a>
    </div>
  );
};

export default Project;
