import React from "react";
const Project = ({ id, icon, text }) => {
  return (
    <a key={id} className='projectItem' href={`/projects/${id}`}>
      <div className='projectText'>
        {text}
        <div className='projectImgContainer'>
          <i className='projectImg'>{icon}</i>
        </div>
      </div>
    </a>
  );
};

export default Project;
