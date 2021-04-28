import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Wrapper, CartCount, EmptyCart, CartSideBar } from "./Styles";
export default function Cart({ setToggle, isToggle }) {
  return (
    <>
      <Wrapper onClick={() => setToggle(true)}>
        <ShoppingCartIcon fontSize="large" style={{ fill: "white" }} />
        <CartCount>0</CartCount>
      </Wrapper>

      <CartSideBar className={isToggle ? "expand" : "shrink"}>
        <EmptyCart>Empty Cart</EmptyCart>
      </CartSideBar>
    </>
  );
}
