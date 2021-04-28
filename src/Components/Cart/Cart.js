import React, { useRef } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useOnClickOutside from "../../Hooks/useOnClickOutside";
import {
  Wrapper,
  CartCount,
  EmptyCart,
  CartSideBar,
  SideBarHeader
} from "./Styles";
export default function Cart({ setToggle, isToggle }) {
  const $sideBarRef = useRef();
  // handle the onclick outside
  useOnClickOutside($sideBarRef, () => {
    setToggle(false);
  });
  return (
    <>
      <Wrapper onClick={() => setToggle(true)}>
        <ShoppingCartIcon fontSize="large" style={{ fill: "white" }} />
        <CartCount>0</CartCount>
      </Wrapper>

      <CartSideBar ref={$sideBarRef} className={isToggle ? "expand" : "shrink"}>
        <SideBarHeader>shopping Cart</SideBarHeader>
        <EmptyCart>Empty Cart</EmptyCart>
      </CartSideBar>
    </>
  );
}
