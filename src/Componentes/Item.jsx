// import {  Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// const Item = ({prod}) => {
//   return (
//      <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={prod.img} />
//       <Card.Body>
//         <Card.Title>{prod.name}</Card.Title>
//         <Card.Text>
//           ${prod.price},00
//         </Card.Text>        
//          <Link className='btn btn-primary' to={`/item/${prod.id}`}>Ver Más</Link>
//       </Card.Body>
//     </Card>
//   )
// }

// export default Item







// import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// const Item = ({ prod }) => {
//   return (
//     <Card style={{ width: '18rem' }} className="estiloCard">

//       {/* Imagen clickeable */}
//       <Link to={`/item/${prod.id}`} className="link-img">
//         <div className="img-wrapper">
//           <Card.Img
//             variant="top"
//             src={prod.img}
//             alt={prod.name}
//             className="img-producto"
//           />
//           <div className="overlay">
//             Ver detalle
//           </div>
//         </div>
//       </Link>

//       <Card.Body className="text-center">
//         <Card.Title>{prod.name}</Card.Title>

//         <Card.Text>
//           ${prod.price},00
//         </Card.Text>

//         {/* Botón NO clickeable (solo visual) */}
//         <button className="btn btn-outline-primary" disabled>
//           Agregar al carrito
//         </button>
//       </Card.Body>
//     </Card>
//   )
// }

// export default Item



import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ prod }) => {
  return (
    <Card style={{ width: '18rem' }} className="estiloCard">

      {/* Imagen clickeable */}
      <Link to={`/item/${prod.id}`} className="link-img">
        <div className="img-wrapper">
          <Card.Img
            variant="top"
            src={prod.img}
            alt={prod.name}
            className="img-producto"
          />
          <div className="overlay">
            Ver detalle
          </div>
        </div>
      </Link>

      <Card.Body className="text-center">
        <Card.Title>{prod.name}</Card.Title>

        <Card.Text>
          ${prod.price},00
        </Card.Text>

        {/* Botón NO clickeable (solo visual)
        <button className="btn btn-outline-primary" disabled>
          Agregar al carrito
        </button> */}
      </Card.Body>
    </Card>
  )
}

export default Item