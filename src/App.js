import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './core/components/layouts/Menu';
import Register from './pages/authentification/Register';
import Login from './pages/authentification/Login';
import Accueil from './pages/home/Accueil';
import Footer from './core/components/layouts/Footer';
//import MenuPanier from './core/components/layouts/Menupanier';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
<<<<<<< HEAD
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <SportLeagueRoutes></SportLeagueRoutes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
=======
    <Router>
      <div>
        <Menu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route
            path="/signin"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/accueil"
            element={isLoggedIn ? <Accueil /> : <Navigate to="/signin" />}
          />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    
>>>>>>> 5c52e20 (add login)
  );
}

export default App;


