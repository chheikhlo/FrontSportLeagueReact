import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import { UserContext } from "../../App";

const Profil = () => {
    const { id } = useParams();
    const [profil, setProfil] = useState({});
    const { isLoggedIn } = useContext(UserContext);

    // Les Alerts
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        api.get(`/profil/${id}`)
            .then(response => {
                setProfil(response.data);
                setOpen(false);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfil({ ...profil, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/put/user/${id}`, profil)
                .then(resp => {
                    setOpen(true);
                    setAlertMessage("Profil Modifier avec succès !");
                    setProfil(resp.data);
                })
                .catch(error => {
                    setOpen(true);
                    setAlertMessage("Erreur lors de la modification du produit");
                    console.error('Error fetching product details:', error);
                });

        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="profil-container">

            <div>
                {open && (
                    <Alert variant="success" onClose={() => setOpen(false)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
            </div>
            
            {isLoggedIn ?
                (isLoggedIn.roles.length !== 2 ?
                    <Link to={`/delete/user/${id}`}>
                        <Button variant="primary" type="submit">
                            Se desinscrire
                        </Button>
                    </Link>:
                    <></>):
                    <></>
            }
            
            <Container className="mt-5">
                <h1 className="mb-4">Edit Profil</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="text"
                            name="nom"
                            value={profil.nom}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            type="text"
                            name="prénom"
                            value={profil.prenom}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Télephone</Form.Label>
                        <Form.Control
                            type="number"
                            name="telephone"
                            value={profil.telephone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={profil.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>mot de passe</Form.Label>
                        <Form.Control
                            type="text"
                            name="mot_de_passe"
                            value={profil.mot_de_passe}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Profil
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Profil;
