import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">LSA Location</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">Acceuil</Link>
                        <Link to={'...'} className="nav-link"></Link>
                        {/* <span style={{ color: 'white' }}> <Button className="btn btn-secondary" onClick={logout}>Se Deconnecter</Button></span> */}
                        <Link to={'...'} className="nav-link">Se connecter</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
