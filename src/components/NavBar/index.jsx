import './index.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function Index() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/src/assets/logo.png"
            className="img-fluid"
            style={{ width: '300px', height: '80px' }}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={currentPath === '/' ? 'nav-link active-link' : 'nav-link'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={currentPath === '/about' ? 'nav-link active-link' : 'nav-link'}>About MAIMT</Nav.Link>
            <Nav.Link as={Link} to="/paper" className={currentPath === '/paper' ? 'nav-link active-link' : 'nav-link'}>Paper</Nav.Link>
            <Nav.Link as={Link} to="/syllabus" className={currentPath === '/syllabus' ? 'nav-link active-link' : 'nav-link'}>Syllabus</Nav.Link>
            <Nav.Link as={Link} to="/timetable" className={currentPath === '/timetable' ? 'nav-link active-link' : 'nav-link'}>Time Table</Nav.Link>
            <Nav.Link as={Link} to="/content" className={currentPath === '/content' ? 'nav-link active-link' : 'nav-link'}>E-Content</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={currentPath === '/contact' ? 'nav-link active-link' : 'nav-link'}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;
