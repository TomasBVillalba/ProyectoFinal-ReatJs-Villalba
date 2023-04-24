import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartContext'
import CheckoutForm from './components/checkout/CheckoutForm';
import Home from './components/Home';





function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/categoria/:categoriaId' element= {<ItemListContainer/>}/>
            <Route path='/cart' element= {<Cart/>}/>
            <Route path='/checkout' element={<CheckoutForm/>} />
            <Route path='/detalle/:detalleId' element= {<ItemDetailContainer/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
