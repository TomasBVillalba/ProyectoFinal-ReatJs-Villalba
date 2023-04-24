import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './itemdetail.module.scss'
import ItemCount from '../ItemCount'
import { useCartContext } from '../../context/CartContext'


export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();
 
  const onAdd = (quantity) => {
      setGoToCart(true);
      addProduct(data, quantity);
}

  return (
    <div className={styles.contenedorproductos}>
      <div className={styles.item}>
        <img className={styles.imagenProducto} src={data.image}/>
            <div  className={styles.informacion}>
                <span className={styles.tipo_de_envio}>Envio con normalidad</span>
                <br />
                <span className={styles.descripcion}>{data.title}</span>
                <span className={styles.price}>${data.price}</span>
                <span className={styles.envio}>Envio gratis</span>
                {
                  goToCart
                  ? <Link to='/cart'>Terminar compra</Link>
                  : <ItemCount initial = {0} stock = {20} onAdd = {onAdd}/>
                }
            </div>
        </div>      
      
    </div>
  )
}

export default ItemDetail