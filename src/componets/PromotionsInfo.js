import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const PromotionsInfo = ({ setProducts, name, description, price }) => {
  const [button, setButton] = useState ('primary');
  
  return (
    <div className='container-fluid'>
      <Card className='text-center m-auto mt-2 mb-4' border='primary' style={{width:'250px', height:'200px'}} >
        <Card.Body>
          <Card.Title className='fw-bold' >
            {name}
          </Card.Title>
          <Card.Text >
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant={button} onClick={
                () => {
                  setButton ('success');
                  setTimeout(() => {
                    setButton ('primary');
                  }, 500);
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
        </Card.Footer>
      </Card>
    </div>
  )
}
export default PromotionsInfo;