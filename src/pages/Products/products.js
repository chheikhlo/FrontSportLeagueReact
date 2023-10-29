import React, { useState, useEffect, useContext } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import api from '../../services/api';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const { isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    // Les Alerts
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        api.get('/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleAddToCart = (productId) => {
        if (isLoggedIn != null) {
            api.post('/add/product/cart', { utilisateur_id: isLoggedIn._id, produit_id: productId })
                .then(resp => {
                    setOpen(true);
                    setAlertMessage("Produit Ajouter au panier");
                    navigate('/our-products');
                })
                .catch(error => {
                    setOpen(true);
                    setAlertMessage("Erreur lors de l'ajout du produit");
                });
        } else {

        }
    };

    return (
        <div className="products-container">

            <div>
                {open && (
                    <Alert variant="success" onClose={() => setOpen(false)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
            </div>
            <div className="d-flex flex-wrap">
                {products.map((product) => (
                    <Card key={product._id} style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img variant="top" src={`images/${product.image}`} alt={product.nom} />
                        <Card.Body>
                            <Card.Title>{product.nom}</Card.Title>
                            <Card.Text>Sport: {product.sport} </Card.Text>
                            <Card.Text>Qte: {product.quantite} </Card.Text>
                            <Card.Text>Price: {product.prix} €</Card.Text>
                            {isLoggedIn ?
                                <Button
                                    variant="primary"
                                    onClick={() => handleAddToCart(product._id)}

                                >
                                    Add To Cart
                                </Button> :
                                <></>
                            }
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>

    );
};

export default Product;
