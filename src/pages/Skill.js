import React from "react";

const Skill = ({ id, text, url }) => {
  return (
    <>
      <div key={id} style={{ marginLeft: "0" }} className='skillItem'>
        <img className='skillIcon ' alt={text} src={url} />
        <div className='skillText'>{text}</div>
      </div>
    </>
  );
};

export default Skill;
