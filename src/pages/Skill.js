import React from "react";

const Skill = ({ id, text, url }) => {
  return (
    <>
      <div key={id} style={{ marginLeft: "0" }} className='skillItem'>
        <div className='skillText'>{text}</div>
        <img className='skillIcon ' alt={text} src={url} />
      </div>
    </>
  );
};

export default Skill;
