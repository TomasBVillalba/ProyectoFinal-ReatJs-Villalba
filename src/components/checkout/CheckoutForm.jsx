import React, { useState, useEffect } from 'react';
import db from "../../db/config";
import styles from './checkout.module.scss'
import { getDocs, collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckoutForm() {
  const [items, setItems] = useState([]);
  const itemsRef = collection(db, "items");
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailConfirm, setInputEmailConfirm] = useState("");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setItems(items);
  };

  const addItem = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const productList = items.map((item) => item.title);
    const item = {
      title: inputTitle,
      price: inputPrice,
      name: inputName,
      lastName: inputLastName,
      phone: inputPhone,
      email: inputEmail,
      products: productList,
      date: currentDate,
    };
    const docRef = await addDoc(itemsRef, item);
    const orderId = docRef.id;
    toast.success(`Gracias por comprar. Su número de orden es: ${orderId}`,{
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: 0,
      theme: "light",
    });

    setInputTitle("");
    setInputPrice("");
    setInputName("");
    setInputLastName("");
    setInputPhone("");
    setInputEmail("");
    setInputEmailConfirm("");
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h1 className={styles.texto}>checkout</h1>
      <form onSubmit={addItem} className={styles.formcontainer}>
  <div className={styles.inputcontainer}>
    <label htmlFor="name" className={styles.inputlabel}>Nombre:</label>
    <input
      type="text"
      id="name"
      placeholder="ingresa tu nombre"
      onChange={(e) => setInputName(e.target.value)}
      value={inputName}
      className={styles.inputfield}
      required
    />
  </div>
  <div className={styles.inputcontainer}>
    <label htmlFor="last-name" className={styles.inputlabel}>Apellido:</label>
    <input
      type="text"
      id="last-name"
      placeholder="Ingresa tu apellido"
      onChange={(e) => setInputLastName(e.target.value)}
      value={inputLastName}
      className={styles.inputfield}
      required
    />
  </div>
  <div className={styles.inputcontainer}>
    <label htmlFor="phone" className={styles.inputlabel}>Telefono:</label>
    <input
      type="tel"
      id="phone"
      placeholder="Ingresa tu numero de telefono"
      onChange={(e) => setInputPhone(e.target.value)}
      value={inputPhone}
      className={styles.inputfield}
      required
    />
  </div>
  <div className={styles.inputcontainer}>
    <label htmlFor="email" className={styles.inputlabel}>Email:</label>
    <input
      type="email"
      id="email"
      placeholder="Ingresa tu Email"
      onChange={(e) => setInputEmail(e.target.value)}
      value={inputEmail}
      className={styles.inputfield}
      required
    />
  </div>
  <div className={styles.inputcontainer}>
    <label htmlFor="confirm-email" className={styles.inputlabel}>Repetir Email:</label>
    <input
      type="email"
      id="confirm-email"
      placeholder="Confirmar Email"
      onChange={(e) => setInputEmailConfirm(e.target.value)}
      value={inputEmailConfirm}
      className={styles.inputfield}
      required
    />
  </div>
  <button type="submit">Finalizar compra</button> 
  </form>
      <ToastContainer />
    </div>
  );
}

export default CheckoutForm;