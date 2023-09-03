import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; // Import the Link component
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,  faUser, faHeart, faListAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';




function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-items" >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="eyelandlogo.jpg"
              width="200"
              height="60"
              className="d-inline-block align-top"
              alt="Navbar Brand Image"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link to="/action1" className="nav-link">
              Hello
            </Link>
            <NavDropdown title="Me" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/action3">
                <FontAwesomeIcon icon={faUser} />&nbsp;
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action4">
              <FontAwesomeIcon icon={faHeart} />&nbsp;
                Wish List
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action5">
              <FontAwesomeIcon icon={faListAlt} />&nbsp;
                Orders
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/action2" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} />&nbsp;
              Cart
            </Link>
            <Link to="/action2" className="nav-link">
            <FontAwesomeIcon icon={faSignOutAlt} />&nbsp;
              Sign In
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What r u lookin for?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
