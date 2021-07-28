import { Card, Button } from "react-bootstrap";

const PromotionsInfo = ({ setProducts, name, description, price }) => {
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