import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Servicios from './pages/Servicios';

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
