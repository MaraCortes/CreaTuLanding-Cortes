
import MyNavbar from './Componentes/MyNavbar'
import ItemListContainer from './Componentes/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PagError from './Componentes/PagError'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 

  return (    
    <BrowserRouter>
      <MyNavbar/>
      <Routes>
        <Route path='/' element ={<ItemListContainer mensaje={'Bienvenidos al lugar que amamos!!'}/>}/>
        <Route path='/category/:categoryType' element ={<ItemListContainer mensaje={'Nueva Categoria de Productos'}  />}/>
        

        <Route path='/Item/:id' element ={<ItemDetailContainer/> }/>               
        <Route path='*' element ={<PagError/> }/>       
      </Routes>      
    </BrowserRouter>
    
  )
}

export default App
