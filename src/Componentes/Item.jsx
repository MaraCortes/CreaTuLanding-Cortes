import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Item = ({prod}) => {
  return (
     <Card style={{ width: '15rem', margin: 30 }}>
      <Card.Img variant="top" src={prod.img} />
       <Card.Body>
         <Card.Title>{prod.name}</Card.Title>
         <Card.Text>
           ${prod.price},00
         </Card.Text>
         <Link className= 'btn btn-primary' to= {`/item/${prod.id}`}>Detalles</Link>
       </Card.Body>
     </Card>
   
  )
}

export default Item;