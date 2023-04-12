import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h2>Campus360</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>➡️➡️➡️➡️➡️➡️➡️➡️➡️</div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#16A085" : "#4A235A",
                  })}
                  className="nav-link btn btn-ligth"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#16A085" : "#4A235A",
                  })}
                  className="nav-link btn btn-ligth"
                  to="/inscripciones"
                >
                  {" "}
                  Inscripciones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#16A085" : "#4A235A",
                  })}
                  className="nav-link btn btn-ligth"
                  to="/Cursos"
                >
                  Cursos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#16A085" : "#4A235A",
                  })}
                  className="nav-link btn btn-ligth"
                  to="/Registro"
                >
                  Registro
                </NavLink>
              </li>
            </ul>
            <div></div>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
