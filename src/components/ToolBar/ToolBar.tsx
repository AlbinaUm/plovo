import { NavLink } from 'react-router-dom';
import './Toolbar.css';

const ToolBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <NavLink to="/"><span className="navbar-brand mb-0 text-white fs-1">Plovo</span></NavLink>


          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/newDish">New Dish</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
    ;
};

export default ToolBar;
