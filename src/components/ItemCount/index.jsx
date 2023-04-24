import React, { useState, useEffect } from 'react';
import styles from './itemcount.module.scss';


export const ItemCount = ({initial, stock, onAdd}) => {
    const  [count,setCount ] = useState (parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }

useEffect (() => {
    setCount(parseInt(initial));
}, [initial])
return (
    <div className={styles.counter}>
        <button disabled= {count <= 0}  onClick={decrease}>-</button>
        <span>{count}</span>
        <button disabled= {count >= stock}  onClick={increase}>+</button>
        <div>
        <button className={styles.agregar} disabled = {stock <= 1} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
)
}

export default ItemCount;