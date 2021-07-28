import { Card, ListGroup} from "react-bootstrap"
import CartList from "./CartList";
import Title from "./Title";

const Cart = ({ products }) => {
  const cartItems = products.map ((element, index) => {
    return <CartList key={index} name={element[0].name} price={element[0].price} amount={element[0].amount} />
  })
  return (
    <div className='container-fluid mb-3'>
      <Title title='Pedido' id='cart' />
      <Card>
        <ListGroup>
          {cartItems}
        </ListGroup>
        <Card.Footer>
        <p className='fw-light text-center' >
          Esta lista solo es para ayudarlo a organizar su pedido, para ordenar llame a su mesero.
        </p>
        </Card.Footer>
      </Card>

    </div>
  )
}
export default Cart;