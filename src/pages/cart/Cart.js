import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../services/api';

const Cart = ({ match }) => {
    const [cart, setCart] = useState({});
    const cartId = match.params.id;

    useEffect(() => {
        api.get(`/cart/${cartId}`)
            .then(response => {
                setCart(response.data);
            })
            .catch(error => {
                console.error('Error fetching cart details:', error);
            });
    }, [cartId]);

    const handleConfirm = () => {
        const updatedCart = { ...cart };

        // Logique pour mettre à jour les quantités des produits dans l'objet updatedCart
        // parcourir cart.products et mettre à jour les quantités

        // PUT pour mettre à jour le panier avec les nouvelles quantités

        api.put(`/cart/${cartId}`, updatedCart)
            .then(response => {

                console.log('Cart confirmed and quantities updated successfully:', response.data);
            })
            .catch(error => {
                console.error('Error confirming cart:', error);
            });
    };


    return (
        <div>
            <h1>Cart</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* on vérifie si cart.products existe (n'est pas null ou undefined*/}
                    {cart.products && cart.products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.nom}</td>
                            <td>{product.quantite}</td>
                            <td>{product.price} €</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
            <Button onClick={handleConfirm} variant="primary">Confirm Cart</Button>
        </div>
    );
};

export default Cart;

