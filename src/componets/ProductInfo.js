import { Card } from "react-bootstrap"

const ProductInfo = ( {name, description } ) => {
  return (
    <div>
      <Card className='mb-4' > 
        <Card.Header>
          <Card.Title>
            {name}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {description}
        </Card.Body>
      </Card>
    </div>
  )
}
export default ProductInfo;