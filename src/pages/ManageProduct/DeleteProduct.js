import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import api from '../../services/api';


const DeleteProduct = () => {
    const { id } = useParams();
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);

    };

    const handleDelete = async () => {
        try {
            // Envoyer une requête DELETE pour supprimer le produit avec l'ID spécifié
            await api.delete(`/admis/delete/product/${id}`);
            window.location.href = '/products';
            handleClose(); // Fermer le modal après la suppression
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation de suppression</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Êtes-vous sûr de vouloir supprimer ce produit ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Annuler
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Supprimer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteProduct;
