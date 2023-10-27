import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

<<<<<<< HEAD
const Menu = () => {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">LSA Location</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">Home</Link>
                        <Link to={'/addproduct'} className="nav-link">Add Products</Link>
                        {/* <span style={{ color: 'white' }}> <Button className="btn btn-secondary" onClick={logout}>Se Deconnecter</Button></span> */}
                        <Link to={'/auth/login'} className="nav-link">Connexion</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
=======
function Menu() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="app-name">SportRentalPro</div>
        <div className="nav-buttons">
          <Link to="/signup" className="sign-up-button">Sign Up</Link>
          <Link to="/signin" className="sign-in-button">Sign In</Link>
        </div>
      </div>
    </header>
  );
>>>>>>> 5c52e20 (add login)
}

export default Menu;



