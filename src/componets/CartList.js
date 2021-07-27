import { ListGroupItem } from "react-bootstrap";

const CartList = ({ name, price, amount }) => {
  return (
    <ListGroupItem>
      <p className='fw-bold'>
        {`${amount}x ${name}`}
      </p>
      <p className='text-end'>
        ${price * amount}
      </p>
    </ListGroupItem>
  )
}
export default CartList;