import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useSelector } from 'react-redux';
import styles from "./Header.module.css"

const Header = () => {

  const products = useSelector((state) => state.cartData);

  return (
    <div className={styles.header}>
      <h3>Hello Abhijit</h3>
        <div className={styles.shoppingCart}>
          <h4>Count:{products.length}</h4>
          <span className={styles.cartIcon}>
            <AiOutlineShoppingCart/>
          </span> 
        </div>
       
    </div>
  )
}

export default Header