import { Link } from "react-router-dom"

const PagError = () => {
    return (
        <div>

            <h1>Error. La ruta seguida no existe!!</h1>
            <Link className="btnError" to='/'>Ir al inicio</Link>
        </div>

    )
}

// En tu archivo PageError.jsx (o similar)
// import { Link } from 'react-router-dom';

// function PagError() {
//   return (
//     <div className="error-container">
//       <h2>¡Ups! Algo salió mal. (Error 404)</h2>
//       <p>La página que buscas no pudo ser encontrada.</p>
//       {/* Aquí aplicas la clase CSS */}
//       <Link to="/" className="btn-inicio">
//         Volver al Inicio
//       </Link>
//     </div>
//   );
// }



export default PagError