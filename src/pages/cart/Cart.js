import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import api from '../../services/api';
import { UserContext } from "../../App";


const Cart = () => {
    const { isLoggedIn } = useContext(UserContext);
    const [cartItems, setCartItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        api.get(`/user/get/cart/${id}`)
            .then(response => {
                setCartItems(response.data);
                console.log(cartItems);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du panier :', error);
            });
    }, []);

    useEffect(() => {
        api.get(`/user/${id}`)
            .then(response => {
                setCartItems(response.data);
                console.log(cartItems);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du panier :', error);
            });
    }, []);

    const handleRemoveFromCart = async (productId) => {
       await api.delete(`/cart/${productId}`)
            .then(response => {
                setCartItems(cartItems.filter(item => item.productId !== productId));
            })
            .catch(error => {
                console.error('Erreur lors de la suppression du produit du panier :', error);
            });
    };

    const handleConfirmCart = async () => {
        try {
            await api.delete(`/delete/cart/${isLoggedIn._id}`);
            window.location.href = '/our-products';
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    return (
        <div className="cart-container">

            <div className="container mt-5">
                <h2>Total: {isLoggedIn.total_prix_to_pay} €</h2>
                <Button variant="primary" onClick={() => handleConfirmCart()}>Confirmer Panier</Button>
                <h1>Votre Panier</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Quantité</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.productId}>
                                <td>{item.nom}</td>
                                <td>{item.prix} €</td>
                                <td>
                                    <Button variant="danger" onClick={() => handleRemoveFromCart(isLoggedIn.productId)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Cart;
