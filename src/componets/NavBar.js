import { Navbar, Nav } from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar className='bg-primary' expand="lg">
      <div className='container'>
        <Navbar.Brand className='fw-bold' >Tacos Don Juve</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> Promociones </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
export default NavBar;