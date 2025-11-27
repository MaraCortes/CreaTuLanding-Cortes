import { Link } from 'react-router-dom';

const PagError = () => {
    return (

        <div className="error-container">
            <h2>¡Ups! Algo salió mal. (Error 404)</h2>
            <p>La página que buscas no pudo ser encontrada.</p>           
            <Link className="btn-inicio" to="/" >
                Volver al Inicio
            </Link>
        </div>
    );
}



export default PagError