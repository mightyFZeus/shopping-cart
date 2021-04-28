import React, { useRef } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import useOnClickOutside from "../../Hooks/useOnClickOutside";
import {
  Wrapper,
  CartCount,
  EmptyCart,
  CartSideBar,
  SideBarHeader,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardRow,
  CardRemove,
  ClearButton
} from "./Styles";
export default function Cart({
  setToggle,
  isToggle,
  carts,

  removeProductFromCart,
  clearCart
}) {
  const $sideBarRef = useRef();
  // handle the onclick outside
  useOnClickOutside($sideBarRef, () => {
    setToggle(false);
  });
  return (
    <>
      <Wrapper onClick={() => setToggle(true)}>
        <ShoppingCartIcon fontSize="large" style={{ fill: "white" }} />
        <CartCount>{carts.length}</CartCount>
      </Wrapper>

      <CartSideBar ref={$sideBarRef} className={isToggle ? "expand" : "shrink"}>
        <SideBarHeader>Shopping Cart</SideBarHeader>
        {carts.length === 0 ? (
          <EmptyCart>Empty Cart</EmptyCart>
        ) : (
          carts.map(({ product, quantity, productID }) => (
            <Card key={product.id}>
              <CardImage src={product.imageURL} />
              <CardBody>
                <CardRow>
                  <CardTitle>{product.title}</CardTitle>
                  <DeleteIcon
                    onClick={() => removeProductFromCart(productID)}
                  />
                </CardRow>
                <CardRow>
                  <CardTitle>
                    Total Quantity ({quantity}) - ${product.price * quantity}
                  </CardTitle>
                </CardRow>
              </CardBody>
            </Card>
          ))
        )}

        {carts.length !== 0 && (
          <ClearButton onClick={() => clearCart()}>Clear Cart</ClearButton>
        )}
      </CartSideBar>
    </>
  );
}
