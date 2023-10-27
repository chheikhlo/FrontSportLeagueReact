import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="d-flex flex-wrap">
            {products.map((product) => (
                <Card key={product._id} style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={`images/${product.image}`} alt={product.nom} />
                    <Card.Body>
                        <Card.Title>{product.nom}</Card.Title>
                        <Card.Text>Sport: {product.sport} </Card.Text>
                        <Card.Text>Qte: {product.quantite} </Card.Text>
                        <Card.Text>Price: {product.prix} €</Card.Text>
                        <Button variant="primary">
                            <Link to={`/cart`} style={{ color: 'white', textDecoration: 'none' }}>Add To Cart</Link>
                        </Button>
                        <Button variant="primary">
                            <Link to={`/addproduct`} style={{ color: 'white', textDecoration: 'none' }}>Add Product</Link>
                        </Button>
                        <Button variant="primary">
                            <Link to={`/putproduct/${product._id}`} style={{ color: 'white', textDecoration: 'none' }}>Edit Product</Link>
                        </Button>
                        <Button variant="primary">
                            <Link to={`/deleteproduct/${product._id}`} style={{ color: 'white', textDecoration: 'none' }}>Delete Product</Link>
                        </Button>

                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ListProduct;
