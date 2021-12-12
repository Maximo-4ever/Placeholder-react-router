import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext as Juanito } from "../context/UserProvider.jsx";

export const Navbar = () => {
  const { user } = useContext(Juanito);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container justify-content-space-between">
        <h3 className="text-light fs-2">JSON Placeholder</h3>
        <div className="d-flex align-items-center  gap-4">
          <Link
            to="/"
            className={user ? "btn btn-primary" : "btn btn-dark"}
          >
            {user ? "Juanito" : "Sin conexión"}
          </Link>
          <NavLink to="/" className="btn btn-outline-light">
            Home
          </NavLink>
          <NavLink to="/blog" className="btn btn-outline-light">
            Blog
          </NavLink>
          <NavLink to="/contact" className="btn btn-outline-light">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
