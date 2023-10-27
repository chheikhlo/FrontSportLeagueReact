import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const PutProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        nom: '',
        prix: 0,
        image: '',
        quantite: '',
        sport: ''
    });

    useEffect(() => {
        // On Charge les détails du produit à mettre à jour en utilisant l'ID du paramètre d'URL
        api.get(`/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envoyer la requête PUT pour mettre à jour le produit avec l'ID spécifié
            await api.put(`/admin/put/product/${id}`, product);

        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Edit Product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nom du produit</Form.Label>
                    <Form.Control
                        type="text"
                        name="nom"
                        value={product.nom}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control
                        type="number"
                        name="prix"
                        value={product.prix}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>quantite</Form.Label>
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
                    Update Product
                </Button>
            </Form>
        </Container>
    );
};

export default PutProduct;
