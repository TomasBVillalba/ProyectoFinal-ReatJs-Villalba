import React, {useContext} from 'react';
import styles from './item.module.scss';
import {Link} from 'react-router-dom';


const Item = ({info}) => {
  
  return (
    <Link to={`/detalle/${info.id}`}>
      <div className={styles.contenedorproductos}>
        <div className={styles.item}>
          <img className={styles.imagenProducto} src={info.image}/>
        <div  className={styles.informacion}>
          <span className={styles.envio}>Envio gratis</span>
          <span className={styles.price}>${info.price}</span>
          <span className={styles.descripcion}>{info.title}</span>
        </div>
      </div>

        </div>
        
    </Link>
  )
}

export default Item