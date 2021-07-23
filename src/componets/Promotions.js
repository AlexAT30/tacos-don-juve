
import { Carousel, Card, Button } from "react-bootstrap";
import promotion1 from '../images/promotions/promotion1.jpeg'
import Title from "./Title";

const Promotions = () => {
  return (
    <div className='container-fluid'>
      <Title title='promociones' />
      <Carousel interval={10000} indicators={false} controls={false} >
        <Carousel.Item>
          <Card className='text-center m-auto mt-2'border='primary' style={{width: '90%'}} >
            <Card.Img variant="top" src={promotion1} />
            <Card.Body>
              <Card.Title className='fw-bold' >
                ¡Paquete clasico!
              </Card.Title>
              <Card.Text >
                Cuatro tacos a escoger y un refresco de 350ml por solo $60.
              </Card.Text>
              <Button variant="primary">
                <i className="bi bi-cart-plus me-2"></i>
                Agregar a mi lista
                </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        
      </Carousel>
    </div>
  )
}
export default Promotions;