import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import api from '../../services/api';

const AddProduct = () => {
    const [product, setProduct] = useState({
        nom: '',
        prix_location: 0,
        image: '',
        quantite_disponible: '',
        sport: ''
    });

    const handleChange = (e) => {
        const { nom, value } = e.target;
        setProduct({ ...product, [nom]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/products', product);

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
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
                    <Form.Label>prix_location</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={product.prix_location}
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
                    <Form.Label>quantite_disponible </Form.Label>
                    <Form.Control
                        type="number"
                        name="quantite_disponible"
                        value={product.quantite_disponible}
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
    );
};

export default AddProduct;
