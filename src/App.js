import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './core/components/layouts/Menu';
import SportLeagueRoutes from './core/routes/SportLeagueRoutes';
import './App.css';
import Footer from './core/components/layouts/Footer';

export const UserContext = createContext();

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <BrowserRouter>
        <Menu />
        <SportLeagueRoutes />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
