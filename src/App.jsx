
// import MyNavbar from './Componentes/MyNavbar'
// import ItemListContainer from './Componentes/ItemListContainer'
// import ItemDetailContainer from './Componentes/ItemDetailContainer'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PagError from './Componentes/PagError'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {


//   return (
//     <BrowserRouter>
//       <MyNavbar />      
//       <Routes>
//         <Route path='/' element={<ItemListContainer mensaje={'Bienvenidos al lugar que amamos!!'} />} />
//         <Route path='/category/:categoryType' element={<ItemListContainer mensaje={'Nueva Categoria de Productos'} />} />
//         <Route path='/Item/:id' element={<ItemDetailContainer />} />
//         <Route path='*' element={<PagError />} />
//       </Routes>
//     </BrowserRouter>
    

//   )
// }

// export default App


// import MyNavbar from './components/MyNavbar';
import MyNavbar from './Componentes/MyNavbar'
import ItemListContainer from './Componentes/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Componentes/PagError';
// para envolver vamos a utilizar al provider
import { CartProvider } from './context/CartContext';
import CartContainer from './Componentes/CartContainer';


function App() {
 
  return (
    <BrowserRouter>
    <CartProvider>
      <MyNavbar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer mensaje={'Bienvenidos a mi App'}/>}/>
        <Route path='/category/:type' element={ <ItemListContainer mensaje={'Estas en la categoría: '}/>}/>
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