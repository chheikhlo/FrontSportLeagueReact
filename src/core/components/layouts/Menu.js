import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import React, {useContext} from "react";
import { FaShoppingCart, FaUser, FaSignOutAlt, FaCog } from 'react-icons/fa'; // Importez les icônes nécessaires

const Menu = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    const logout = () => {
        setIsLoggedIn(null);
    }

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">LSA Location</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">Home</Link>
                        <Link to={'/our-products'} className="nav-link">Nos Produits</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {isLoggedIn ?
                            <></> :
                            <Link to="/signup" className="nav-link"><FaUser /> S'inscrire</Link>
                        }
                        {isLoggedIn ?
                            <Link to={'/'} onClick={logout} className="nav-link"><FaSignOutAlt /> Se Deconnecter</Link> :
                            <Link to={'/signin'} className="nav-link"><FaUser /> Se connecter</Link>
                        }
                        &nbsp;&nbsp;&nbsp;
                        {isLoggedIn && isLoggedIn.roles.length === 2 &&
                            <Link to={`/products`} className="nav-link"><FaCog /> Gerer Produits</Link>
                        }
                        {isLoggedIn && isLoggedIn.roles.length === 2 &&
                            <Link to={`/users`} className="nav-link"><FaCog /> Gerer Users</Link>
                        }
                        {isLoggedIn &&
                            <Link to={`/profil/${isLoggedIn?._id}`} className="nav-link"><FaUser /> Profil</Link>
                        }
                        {isLoggedIn ?
                            <div>
                                <Link to={`/cart/${isLoggedIn._id}`}>
                                    <Button className="btn btn-secondary"><FaShoppingCart />Panier  </Button>
                                </Link>
                            </div> :
                            <></>
                        }
                        &nbsp;
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
