import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navegacion = () => {
  const validateRoot = ({ isActive }) => (isActive ? "activo" : "noActivo");

  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <NavLink to="/">
          <img
            style={{ width: "6%" }}
            src="../public/pokebola.png"
            alt="icono pokebola"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={validateRoot}>
              Home
            </NavLink>
            <NavLink to="/pokemones" className={validateRoot}>
              Pokemones
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
