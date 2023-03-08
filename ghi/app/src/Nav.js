import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service">Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" id="new-service" to="/service/new">New service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" id="models" to="/models">Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" id="new-model" to="/models/new">New Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" id="automobiles" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" id="new-automobile" to="/automobiles/new">New Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" id="manufacturer" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" id="new-manufacturer" to="/manufacturers/new">New Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" id="new-salesperson" to="/salesperson/new">New Salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" id="new-customer" to="/customer/new">New Customer</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
