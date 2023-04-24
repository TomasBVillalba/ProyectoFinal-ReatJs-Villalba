import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link,  } from 'react-router-dom';
import styles from './cart.module.scss'
import ItemCart from '../itemCart';
import CheckoutForm from '../checkout/CheckoutForm';
const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  

  if (cart.length === 0) {
    return (
      <>
      <div className={styles.centrar}>
        <p >No hay productos en el carrito</p>
        <Link to='/'> Hacer compras</Link>
      </div>
        
      </>
    );
  }

  return (
    <>
    {
      cart.map(product => <ItemCart key={product.id} product={product}/>)
    }
    <p>
      total:${totalPrice()}
    </p>
    <Link to="/checkout">
      <button>Continuar</button>
    </Link>
    

    </>
  )
}

export default Cart