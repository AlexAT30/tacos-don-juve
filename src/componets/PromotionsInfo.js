import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { set } from "react-hook-form";

const PromotionsInfo = ({ setProducts, name, description, price }) => {
  const [add, setAdd] = useState (false);
  return (
    <div className='container-fluid'>
      <Card className='text-center m-auto mt-2 mb-4' border='primary' >
        <Card.Body>
          <Card.Title className='fw-bold' >
            {name}
          </Card.Title>
          <Card.Text >
            {description}
          </Card.Text>
          <Button variant='primary' onClick={
              () => {
                setProducts (old => [...old, [{
                  name:`${name}`,
                  amount: 1,
                  price:`${price}`,
                }]]);
              }
            }>
            <i className="bi bi-cart-plus me-2"></i>
            Agregar a mi lista
            </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
export default PromotionsInfo;