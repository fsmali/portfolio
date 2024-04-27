
import { icons } from '../Data';
import { person } from '../Data';
const Header = () => {
  return (
    <>
      <header className="header smooth-scroll" id="header">
        <div className="header-section">
          {person.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <h2>{item.job}</h2>
              <h4>{item.info}</h4>
            </div>
          ))}

          <ul>
            {icons.map((icon) => (
              <li className="header-icon" key={icon.id}>
                {
                  <a className="header-a" href={icon.link} target='_blank' >
                    {icon.icon}
                  </a>
                }
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="content-divider"></div>
    </>
  );
};

export default Header;
