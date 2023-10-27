import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import './Menu.css';

const Menu = () => {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">LSA Location</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">Home</Link>
                        {/* <span style={{ color: 'white' }}> <Button className="btn btn-secondary" onClick={logout}>Se Deconnecter</Button></span> */}
                         
                        <Link to="/signup" className="sign-up-button">Sign Up</Link>
                        <Link to="/signin" className="sign-in-button">Sign In</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;



