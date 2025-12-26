import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ prod }) => {
  return (
    <Card style={{ width: '18rem' }} className="estiloCard">

     
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
        
      </Card.Body>
    </Card>
  )
}

export default Item