import { BrowserRouter } from 'react-router-dom';
import Menu from './core/components/layouts/Menu';
import SportLeagueRoutes from './core/routes/SportLeagueRoutes'
import './App.css';
import Footer from './core/components/layouts/Footer';




function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <SportLeagueRoutes></SportLeagueRoutes>
        <Footer></Footer>
      </BrowserRouter>
    
    </>
  );
}

export default App;


