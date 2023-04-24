import React from 'react'
import styles from './itemcart.module.scss'
import { useCartContext } from '../../context/CartContext'
const ItemCart = ({product}) => {
const {removeProduct} = useCartContext();

  return (
    <div className={styles.itemcart}>
        <img src={product.image} alt={product.title} />
        <div>
            <p>Titulo: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>subtotal: ${product.quantity * product.price}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart