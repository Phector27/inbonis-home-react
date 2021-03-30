import { Navbar } from "react-bootstrap";
import logo from "../../../img/COACHPYME.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <div className="top-napbar"></div>
      <Container>
        <Navbar className="navbar">
          <Navbar.Brand>
            {" "}
            <Link to="#">
              <img
                alt="Inbonis logotype"
                src={logo}
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text
              style={{
                textTransform: "uppercase",
                fontSize: "small",
                fontWeight: "bold",
                textDecoration: "none",
                color: "seagreen",
              }}
            >
              <Link
                to="#"
                style={{
                  color: "seagreen",
                  textDecoration: "none",
                  letterSpacing: 0.5,
                }}
              >
                Inicio
              </Link>
            </Navbar.Text>
            <Navbar.Text
              style={{
                marginLeft: 10,
                textTransform: "uppercase",
                fontSize: "small",
                fontWeight: "bold",
              }}
            >
              <Link
                to="#"
                className="obtain-btn-nav"
                id="obtain-btn-nav"
                style={{ textDecoration: "none", letterSpacing: 0.5 }}
              >
                Qué obtengo
              </Link>
            </Navbar.Text>
            <Navbar.Text
              className="obtain-nav-btn"
              style={{
                marginLeft: 10,
                textTransform: "uppercase",
                fontSize: "small",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <Link to="#" className="lngbtn" style={{ color: "white" }}>
                Acceder
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}
