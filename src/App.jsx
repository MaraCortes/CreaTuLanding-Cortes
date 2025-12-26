import MyNavbar from './Componentes/MyNavbar'
import ItemListContainer from './Componentes/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Componentes/PagError';
import { CartProvider } from './context/CartContext';
import CartContainer from './Componentes/CartContainer';
import Checkout from './Componentes/Checkout';

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <MyNavbar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer mensaje={'Bienvenidos al lugar que amamos'}/>}/>
                    <Route path='/category/:type' element={<ItemListContainer mensaje={'Categoría: '}/>}/>
                    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<CartContainer/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App
