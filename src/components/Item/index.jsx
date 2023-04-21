import React, {useContext} from 'react';
import styles from './item.module.scss';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/cartcontext';

const Item = ({info}) => {
  const nombre = useContext(CartContext);
  console.log('item:', nombre)
  return (
    <Link to={`/detalle/${info.id}`} className={styles.productos}>
        <img src={info.imagen} alt="" />
        <p>{info.title}</p>
    </Link>
  )
}

export default Item