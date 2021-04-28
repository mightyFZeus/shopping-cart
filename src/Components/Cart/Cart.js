import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Wrapper, CartCount, CartSideBar } from "./Styles";
export default function () {
  return (
    <>
      <Wrapper>
        <ShoppingCartIcon fontSize="large" style={{ fill: "white" }} />
        <CartCount>0</CartCount>
      </Wrapper>
    </>
  );
}
