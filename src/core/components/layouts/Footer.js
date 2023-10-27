import React from "react";

    const Footer = () => {
        return (

                <footer className="bg-dark text-light text-center py-3" style={{ minHeight: "40vh" }}>
                
                    <div >
                        Nous contacter:
                        <div >Mail: sportrentalpro@gmail.com</div>
                        <div >Numéro: +3378956321</div>
                    </div>
                    <div>
                        Tous droits réservés &copy; {new Date().getFullYear()} SportRentalPro
                    </div>
            
                </footer>
            );  
        };

export default Footer;