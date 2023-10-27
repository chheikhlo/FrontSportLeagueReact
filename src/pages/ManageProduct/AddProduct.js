import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import api from '../../services/api';

const AddProduct = () => {
    const [product, setProduct] = useState({
        nom: '',
        prix: 0,
        image: '',
        quantite: '',
        sport: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/admin/add/product', product);

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
    );
};

export default AddProduct;
