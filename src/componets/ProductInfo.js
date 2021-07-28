import { useState } from "react";
import { Card } from "react-bootstrap";
import './button.css'

const ProductInfo = ( {setProducts, name, description, price } ) => {
  const [productsCount, setProductCount] = useState (0);

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
              <button className='btn-primary addButton' onClick={
                () => {
                  setProducts (old => [...old, [{
                    name:`${name}`,
                    amount:`${productsCount}`,
                    price:`${price * productsCount}`,
                  }]]) 
                }
              }>
                <i className="bi bi-cart-plus me-2"></i>
                {`$${price * productsCount}`}
              </button>
              :
              <button className='btn-primary addButton' variant='primary' onClick={
                () => {
                  setProducts (old => [...old, [{
                    name:`${name}`,
                    amount: 1,
                    price:`${price}`,
                  }]]) 
                }
              }>
                <i className="bi bi-cart-plus me-2"></i>
                {`$${price}`}
              </button>
            }
        </Card.Footer>
      </Card>
    </div>
  )
}
export default ProductInfo;