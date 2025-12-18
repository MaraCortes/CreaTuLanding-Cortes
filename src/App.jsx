
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


import NavBarBS from './components/NavBarBS';
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
// para envolver vamos a utilizar al provider
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';


function App() {
 
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBarBS/>
      <Routes>
        <Route path='/' element={ <ItemListContainer mensaje={'Bienvenidos a mi App'}/>}/>
        <Route path='/category/:type' element={ <ItemListContainer mensaje={'Estas en la categoría: '}/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App