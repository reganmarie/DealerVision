import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">DealerVision</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="new-manufacturer" to="/manufacturers/new">New Manufacturer</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="manufacturer" to="/manufacturers">Manufacturers</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="new-model" to="/models/new">New Model</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="models" to="/models">Models</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="new-automobile" to="/automobiles/new">New Automobile</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="automobiles" to="/automobiles">Automobiles</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicing
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="new-technician" to="/technicians/new">New technician</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" to="/technicians">Technicians</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="new-service" to="/services/new">New service</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="history" to="/services/history">Service History</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Sales
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="new-customer" to="/customer/new">New Customer</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="new-salesperson" to="/salesperson/new">New Salesperson</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="new-salesrecord" to="/salesrecords/new">New Sales Record</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="nav-link" aria-current="page" id="salesrecords" to="/salesrecords">Sales Record History, Searchable</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
