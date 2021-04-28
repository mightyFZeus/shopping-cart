import "./styles.css";
import { useState, useContext, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import Context from "./Store/Context";
import { NavBar, OverLay, MainContainer, ProductList } from "./AppStyles";
import Cart from "./Components/Cart/Cart";
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
        <Cart isToggle={isToggle} setToggle={setToggle} />
      </NavBar>
      <MainContainer>
        {isToggle && <OverLay />}
        <ProductList>
          {context.products.map((p) => (
            <div>{p.title}</div>
          ))}
        </ProductList>
      </MainContainer>
    </>
  );
}
