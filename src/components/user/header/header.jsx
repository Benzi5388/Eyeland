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
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import {signout} from '../../../Redux/authSlice'


function Header() {
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch();

  const handleSignOut = () => {
    console.log("handle signout called");
    dispatch(signout());
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-items">
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
            <Link to="/" className="nav-link">
               Hello <span className="bold-user">{user}</span>
            </Link>
            {user ? (
              <NavDropdown title="Me" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  <FontAwesomeIcon icon={faUser} />&nbsp; Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wishlist">
                  <FontAwesomeIcon icon={faHeart} />&nbsp; Wish List
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/orders">
                  <FontAwesomeIcon icon={faListAlt} />&nbsp; Orders
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
            {user ? (
              <>
              <Link to="/cart" className="nav-link"  onClick={handleSignOut} >
              <FontAwesomeIcon icon={faShoppingCart}/>&nbsp; Cart
              </Link>
              <Link to="/signin" className="nav-link"  onClick={handleSignOut} >
                <FontAwesomeIcon icon={faSignOutAlt}/>&nbsp; Sign Out
              </Link>
              </>
            ) : (
              <Link to="/signin" className="nav-link">
                <FontAwesomeIcon icon={faSignOutAlt} />&nbsp; Sign In
              </Link>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What are you looking for?"
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
