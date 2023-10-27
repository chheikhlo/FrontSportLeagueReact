import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div className="centered-content">
                <h1>Bienvenue sur LSA Location</h1><br></br>
                <h6>Découvrez la liste de nos matériels sportifs sous location</h6>
                <Link to="/products" className="btn btn-primary">
                    List Product
                </Link>
            </div>
        </div>
    );
}

export default Home;
