import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart } from "../redux/action";
import "@contentstack/venus-components/build/main.css";
import { Button, ButtonGroup  , AssetCardVertical} from "@contentstack/venus-components";
import { productList } from "../redux/productsAction";
import Product from "./Product/Product";

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  const cartData = useSelector((state) => state.cartData);
  console.log("All Cart Data", cartData);
  const products = useSelector((state) => state.products);
//   console.log("--------products-------", products[0].image);
  
  const dummyProduct = products[0]
  return (
    <>
      <div>
        {products ? products.map((product)=>{
            return <Product product={product}/>
        }) : <h1>Loading..</h1>}
      </div>
      <ButtonGroup>
        <Button onClick={() => dispatch(addToCart(products))}>
          {" "}
          Add To Cart
        </Button>

        <Button onClick={() => dispatch(emptyCart())}> Empty Cart</Button>

        <Button onClick={() => dispatch(productList())}>Add Products</Button>
      </ButtonGroup>
    </>
  );
};

export default Main;
