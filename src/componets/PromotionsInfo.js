import { Card, Button } from "react-bootstrap";

const PromotionsInfo = ({ name, description, price }) => {
  
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
          <Button variant='primary'>
          {`$${price}`}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
export default PromotionsInfo;