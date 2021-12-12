import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container justify-content-start gap-4">
        <NavLink to="/" className="btn btn-outline-primary">
          Home
        </NavLink>
        <NavLink to="/blog" className="btn btn-outline-primary">
          Blog
        </NavLink>
        <NavLink to="/contact" className="btn btn-outline-primary">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
