import './App.css'
import Layout from './components/layouts/Layout'
import ItemListContainer from './components/products/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import ProductoDetalle from './components/products/ProductoDetalle';

const App = () => {
  return (
    <>
      <Routes> {/* Rutas estáticas usando react-router-dom */}
        <Route element={<Layout />}>
          <Route path='/' element={<h1>Inicio</h1>} />
          <Route path='/contacto' element={<h1>Contacto</h1>} />
          <Route path='/carrito' element={<h1>Carrito</h1>} />
          <Route path='/productos' element={<ItemListContainer Mensaje="Nuestros productos destacados" />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} /> {/* Ruta dinámica con parámetro id */}
        </Route>
      </Routes>
    </>
  );
}
export default App;