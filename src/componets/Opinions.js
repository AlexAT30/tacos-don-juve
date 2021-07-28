import { Carousel } from "react-bootstrap";
import opinion1 from '../images/opinions/opinion1.jpeg';
import opinion2 from '../images/opinions/opinion2.jpeg';
import opinion3 from '../images/opinions/opinion3.jpeg';
import opinion4 from '../images/opinions/opinion4.jpeg';
import opinion5 from '../images/opinions/opinion5.jpeg';
import Title from "./Title";

const Opinions = () => {
  return (
    <div className='container-fluid text-center'>
      <Title title='Opiniones' id='opinions' />
      <Carousel fade={true} controls={false} indicators={false} >
        <Carousel.Item>
          <img src={opinion1} alt='opinion1' style={{width:'100%', height:'170px'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={opinion2} alt='opinion2' style={{width:'100%', height:'170px'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={opinion3} alt='opinion3' style={{width:'100%', height:'170px'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={opinion4} alt='opinion4' style={{width:'100%', height:'170px'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={opinion5} alt='opinion5' style={{width:'100%', height:'170px'}} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Opinions;