import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import api from '../../services/api';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Récupérer les produits dans le panier depuis le backend
        api.get('/cart')
            .then(response => {
                setCartItems(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du panier :', error);
            });
    }, []);

    const handleRemoveFromCart = (productId) => {
        // Appeler l'API pour supprimer le produit du panier
        api.delete(`/cart/${productId}`)
            .then(response => {
                // Mettre à jour l'état du panier après la suppression
                setCartItems(cartItems.filter(item => item.productId !== productId));
            })
            .catch(error => {
                console.error('Erreur lors de la suppression du produit du panier :', error);
            });
    };

    const handleUpdateQuantity = (productId, newQuantity) => {
        // Appeler l'API pour mettre à jour la quantité du produit dans le panier
        api.put(`/cart/${productId}`, { quantity: newQuantity })
            .then(response => {
                // Mettre à jour l'état du panier après la mise à jour de la quantité
                setCartItems(cartItems.map(item => {
                    if (item.productId === productId) {
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                }));
            })
            .catch(error => {
                console.error('Erreur lors de la mise à jour de la quantité du produit dans le panier :', error);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Votre Panier</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Quantité</th>
                        <th>Prix unitaire</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.productId}>
                            <td>{item.nom}</td>
                            <td>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleUpdateQuantity(item.productId, parseInt(e.target.value))}
                                />
                            </td>
                            <td>{item.prix} €</td>
                            <td>{item.total} €</td>
                            <td>
                                <Button variant="danger" onClick={() => handleRemoveFromCart(item.productId)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Cart;


