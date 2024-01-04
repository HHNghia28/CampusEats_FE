import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">G1-Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex justify-between items">
            <Link href={"/components/wiki"} className="nav-link">
              Wiki
            </Link>
            <Link href={"/components/about"} className="nav-link">
              About
            </Link>
            <Link href={"/components/login"} className="nav-link">
              Login
            </Link>
            <Link href={"/components/register"} className="nav-link">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
