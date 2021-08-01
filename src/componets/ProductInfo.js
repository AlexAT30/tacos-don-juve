import { Button, Card } from "react-bootstrap"

const ProductInfo = ( { name, description, price } ) => {

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
        <Card.Footer className='text-end' >
          <Button variant='primary'>
            {`$${price}`}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
export default ProductInfo;