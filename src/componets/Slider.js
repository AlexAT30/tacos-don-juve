import { Carousel } from 'react-bootstrap';
import slider1 from '../images/slider/slider1.jpeg';
import slider2 from '../images/slider/slider2.jpeg';
import slider3 from '../images/slider/slider3.jpeg';
import slider4 from '../images/slider/slider4.jpeg';
import slider5 from '../images/slider/slider5.jpeg';

 const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="slider-img-1"
        />
        <Carousel.Caption>
          <h3>Nombre del producto</h3>
          <p>Pequeña descripcion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="slider-img-2"
        />
        <Carousel.Caption>
          <h3>Nombre del producto</h3>
          <p>Pequeña descripcion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="slider-img-3"
        />
        <Carousel.Caption>
          <h3>Nombre del producto</h3>
          <p>Pequeña descripcion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider4}
          alt="slider-img-4"
        />
        <Carousel.Caption>
          <h3>Nombre del producto</h3>
          <p>Pequeña descripcion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider5}
          alt="slider-img-5"
        />
        <Carousel.Caption>
          <h3>Nombre del producto</h3>
          <p>Pequeña descripcion.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default Slider;