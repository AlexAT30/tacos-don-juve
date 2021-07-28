import { useState } from "react";
import { ListGroupItem } from "react-bootstrap";
import './delete.css'

const CartList = ({ name, price, amount }) => {

  const [deleteProduct, setDeleteProduct] = useState('off');

  return (
    <ListGroupItem className={`delete-${deleteProduct}`}>
      <p className='fw-bold'>

      <button className='me-3 fs-4 text-danger' style={{background:'none', border:'none'}} onClick={
        () => {
          setDeleteProduct ('on')
        }
      }>
        <i className="bi bi-x-circle-fill"></i>
      </button>

        {`${amount}x ${name}`}
      </p>
      <p className='text-end'>
        ${price}
      </p>
    </ListGroupItem>
  )
}
export default CartList;