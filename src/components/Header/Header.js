import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container class="row justify-content-center">
          <Navbar.Brand as={Link} to={'/'}>Mr. Shopper</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>

            <Nav.Link as={Link} to={"/ProductShow"}>Product</Nav.Link>
            <Nav.Link as={Link} to={'/Table'}>Employee Record</Nav.Link>
            <Nav.Link as={Link} to={"InputData"}>DataInput</Nav.Link>
            <Nav.Link as={Link} to={"/Error"}>Error Page</Nav.Link>
            <Nav.Link as={Link} to={"/About"}>About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;
