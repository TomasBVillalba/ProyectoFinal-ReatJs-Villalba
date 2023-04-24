import React from 'react';
import ItemListContainer from '../ItemListContainer';
import styles from './home.module.scss'
function Home() {
  return (
    <section className={styles.fondo}>
      <div className={styles.containerfluid}>
        <div className={styles.contenidocentrado}>
          <h2>Trabajando para crear los <b>mejores productos</b></h2>
          <p>Nuestros productos se caracterizan por estar echos a mano</p>
        </div>
      </div>
      <ItemListContainer />
    </section>
  );
}

export default Home;

