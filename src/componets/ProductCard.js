import { Card } from "react-bootstrap"

const ProductCard = () => {
  return (
    <div>
      <Card className='mb-4' > 
        <Card.Header>
          <Card.Title>
            Nombre del producto.
          </Card.Title>
        </Card.Header>
        <Card.Body>
          Informacion del taco
        </Card.Body>
      </Card>
    </div>
  )
}
export default ProductCard;