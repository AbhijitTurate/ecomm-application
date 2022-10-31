import React from "react";
import { GET_PRODUCT_LIST , SET_PRODUCT_LIST } from "./constants";

const initialState = [];
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("product details", type , payload);
  switch (type) {
    case SET_PRODUCT_LIST:
      return payload;
    default:
      return state;
  }
};

export default productReducer;
