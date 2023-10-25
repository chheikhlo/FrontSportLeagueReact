import { useContext } from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";

const Menu = () => {
    const [user, setUser] = useContext(UserContext);

    const logout = () => {
        setUser(undefined);
        sessionStorage.removeItem('USER');
    }

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Sports league</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">Acceuil</Link>
                        <Link to={'...'} className="nav-link"></Link>
                        {user ?
                            <span style={{ color: 'white' }}> <Button className="btn btn-secondary" onClick={logout}>{t('disconn')}</Button></span> :
                            <Link to={'/auth/login'} className="nav-link">{t('connn')}</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
