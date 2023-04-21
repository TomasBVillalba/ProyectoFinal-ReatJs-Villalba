import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './itemdetail.module.scss'
import ItemCount from '../ItemCount'


export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
      setGoToCart(true);
}

  return (
    <div className={styles.contenedor_productos}>
            
    <img className={styles.producto} src={data.imagen}/>
            <div  className={styles.informacion}>
                <span className={styles.tipo_de_envio}>Envio con normalidad</span>
                <br />
                <span className={styles.descripcion}>{data.titulo}</span>
                {
                  goToCart
                  ? <Link to='/cart'>Terminar compra</Link>
                  : <ItemCount initial = {3} stock = {5} onAdd = {onAdd}/>
                }
                
                <span className={styles.precio}>${data.precio}</span>
                <span className={styles.envio}>Envio gratis</span>
                <button className={styles.producto_agregar} id={data.id}>Agregar</button>
            </div>
</div>
  )
}

export default ItemDetail