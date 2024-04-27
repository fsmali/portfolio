import React, { useState } from 'react'


const Project = ({project}) => {
const {title, image, text, id, icon1,icon2,href1,href2} =project
        const [readMore, setReadMore] = useState(false);

        const showMore = () => {
          setReadMore(!readMore);
        };
  return (
    <article className="project">
      <img src={image} alt={title} className="project-img" />
      <h3 className="project-title">{title}</h3>
      <p className="project-text">
        {readMore ? text : text.substring(0, 50)}
        <button className="showMore-btn" onClick={showMore}>
          {readMore ? 'Read Less' : '...Read More'}
        </button>
      </p>
      <div className="icon-container">
        <span className="project-icon">
          <a className="project-icons" href={href1} target="_blank">
            {icon1}
          </a>
        </span>
        <span className="project-icon">
          <a className="project-icons" href={href2} target="_blank">
            {icon2}
          </a>
        </span>
      </div>
    </article>
  );
}

export default Project

