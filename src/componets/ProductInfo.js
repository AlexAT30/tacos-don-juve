import { useState } from "react";
import { Button, Card } from "react-bootstrap"

const ProductInfo = ( {name, description, price } ) => {
  const [productsCount, setProductCount] = useState (0)

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
            <label>
              Cantidad:
              <input className='ms-1 me-3 mb-2' style={{width: '2rem', height: '1.5rem'}} type='number' min={1} max={100}
              value={productsCount} onChange={(e)=>setProductCount(e.target.value)} />
            </label>
            {
              productsCount > 0
              ?
              <Button>
                <i className="bi bi-cart-plus me-2"></i>
                {`$${price * productsCount}`}
              </Button>
              :
              <Button>
                <i className="bi bi-cart-plus me-2"></i>
                {`$${price}`}
              </Button>
            }
        </Card.Footer>
      </Card>
    </div>
  )
}
export default ProductInfo;