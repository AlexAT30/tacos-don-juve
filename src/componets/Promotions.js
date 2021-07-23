
import { Carousel, Card, Button } from "react-bootstrap";
import promotion from '../images/slider/slider1.jpeg'
import Title from "./Title";

const Promotions = () => {
  return (
    <div className='container-fluid'>
      <Title title='promociones' />
      <Carousel interval={10000} indicators={false} controls={false} >
        <Carousel.Item>
          <Card className='text-center m-auto mt-2'border='primary' style={{width: '90%'}} >
            <Card.Img variant="top" src={promotion} />
            <Card.Body>
              <Card.Title className='fw-bold' >3 x 2</Card.Title>
              <Card.Text >
                Compra tres deliciosos tacos de suaperro y llevate solo dos :D
              </Card.Text>
              <Button variant="primary">
                <i class="bi bi-cart me-2"></i>
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