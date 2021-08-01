import { Navbar, Nav } from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky='top' style={{backgroundColor:'#EBAB35'}} >
      <div className='container'>
        <Navbar.Brand className='fw-bold' >Tacos Don Juve</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='#promotions' > 
              -<i className="bi bi-percent me-2"></i>
              Promociones 
            </Nav.Link>
            <Nav.Link href='#menu' >
              <i className="bi bi-menu-up me-2"></i>
               Menú 
            </Nav.Link>
            <Nav.Link className='active' href='#opinions' >
            <i className="bi bi-person-check me-2"></i>
              Opiniones </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
export default NavBar;