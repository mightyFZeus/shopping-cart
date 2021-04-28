import "./styles.css";
import { useState, useContext, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import Context from "./Store/Context";
import { NavBar, OverLay, MainContainer, ProductList } from "./AppStyles";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Product/Product";

export default function App() {
  const [isToggle, setToggle] = useState(false);
  const context = useContext(Context);
  useEffect(() => {
    console.log(context);
  }, [context]);
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Cart
          isToggle={isToggle}
          setToggle={setToggle}
          carts={context.carts}
          removeProductFromCart={context.removeProductFromCart}
          clearCart={context.clearCart}
        />
      </NavBar>
      <MainContainer>
        {isToggle && <OverLay />}
        <ProductList>
          {context.products.map((p) => (
            <Product
              key={p.id}
              id={p.id}
              imageURL={p.imageURL}
              price={p.price}
              title={p.title}
              addProductToCart={context.addProductToCart}
            ></Product>
          ))}
        </ProductList>
      </MainContainer>
    </>
  );
}
