import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
export const NavBar =() => (

  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">  </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/category/remeras">Remeras</Nav.Link>
            <Nav.Link href="/category/buzos">Buzos</Nav.Link>
            <Nav.Link href="/category/pantalones">Pantalones</Nav.Link>
          </Nav> <CartWidget />
        </Container>
      </Navbar>

);