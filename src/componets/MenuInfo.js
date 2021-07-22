import { Accordion } from 'react-bootstrap'

const MenuInfo = ({ type, number, products }) => {
  return (
    <Accordion defaultActiveKey='1'>
        <Accordion.Item eventKey={number}>
          <Accordion.Header>{type}</Accordion.Header>
          <Accordion.Body>
            {products}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  )

} 
export default MenuInfo;