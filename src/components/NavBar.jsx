import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div><Navbar expand="lg" bg="dark" className="bg-body-tertiary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/home">EPA supermercado</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/produtos">Produtos</Nav.Link>
          <Nav.Link href="/cadastrarProdutos">Cadastrar Produtos</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default NavBar