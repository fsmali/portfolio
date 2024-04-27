import { skill } from '../Data';
const Skills = () => {
  return (
    <>
      <section className="skills clearfix smooth-scroll" id="skills">
        <header className="skills-header">
          <h2>
            tech <span>stack</span>
          </h2>
        </header>
        <article className="skill">
          {skill.map((skill) => (
            <article key={skill.id} className="skill-list">
              <span className="skill-icon">
                <i>{skill.icon}</i>
              </span>
              <h4 className="skill-title">{skill.skill}</h4>
              <p className="skill-text">{skill.info}</p>
            </article>
          ))}
        </article>
      </section>
      <div className="content-divider"></div>
    </>
  );
};

export default Skills;
