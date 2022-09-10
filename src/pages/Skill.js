import React from "react";
const Skill = ({ id, progress, text, url }) => {
  return (
    <>
      <div style={{ marginLeft: "0" }} className='skillItem'>
        <div className='skillText'>{text}</div>
        <img className='skillIcon ' src={url} />
      </div>
    </>
  );
};

export default Skill;
