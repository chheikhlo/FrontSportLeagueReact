import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import api from '../../services/api';

const AddProduct = () => {
    const [product, setProduct] = useState({});

    // Les Alerts
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/admin/add/product', product)
                .then(resp => {
                    setOpen(true);
                    setAlertMessage("Produit Ajouter avec succès !");
                })
                .catch(error => {
                    setOpen(true);
                    setAlertMessage("Erreur lors de l'ajout du nouveau produit");
                });

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <>
            <div>
                {open && (
                    <Alert variant="success" onClose={() => setOpen(false)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
            </div>
            <Container className="mt-5">
                <h1 className="mb-4">Can you Add a Product</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nom du produit </Form.Label>
                        <Form.Control
                            type="text"
                            name="nom"
                            value={product.nom}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>prix</Form.Label>
                        <Form.Control
                            type="number"
                            name="prix"
                            value={product.prix}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image </Form.Label>
                        <Form.Control
                            type="text"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>quantite </Form.Label>
                        <Form.Control
                            type="number"
                            name="quantite"
                            value={product.quantite}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>sport</Form.Label>
                        <Form.Control
                            type="text"
                            name="sport"
                            value={product.sport}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Product
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default AddProduct;
