import { ButtonGroup , Button } from "@contentstack/venus-components";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Product.module.css";
import { emptyCart , addToCart, removeFromCart } from "../../redux/action";

const Product = ({ product }) => {
    const dispatch = useDispatch()
  return (
    <>
      <div className={styles.productContainer}>
        <img src={product.image} width="200" height="250"></img>
        <div>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>category: {product.category}</p>
          <p>color: {product.color}</p>
          <p>brand: {product.brand}</p>
        </div>
        <ButtonGroup>
      <Button onClick={() => dispatch(addToCart(product))}>
          {" "}
          Add To Cart
        </Button>

        <Button onClick={() => dispatch(removeFromCart(product.id))}> Remove</Button>
      </ButtonGroup>
      </div>
      
    </>
  );
};

export default Product;
