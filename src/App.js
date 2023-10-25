import { BrowserRouter } from 'react-router-dom';
import Menu from './core/components/layout/Menu';
import MainRoutes from './core/routes/MainRoutes';
import './App.css';
import Footer from './core/components/layout/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <MainRoutes />
      </BrowserRouter>
      <br /><br /><br />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;