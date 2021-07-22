import { Accordion } from 'react-bootstrap'
import ProductCard from './ProductCard'

const MenuInfo = ({ type, number }) => {
  return (
    <Accordion defaultActiveKey='1'>
        <Accordion.Item eventKey={number}>
          <Accordion.Header>{type}</Accordion.Header>
          <Accordion.Body>
            <ProductCard/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  )

} 
export default MenuInfo;