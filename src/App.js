import "./styles.css";
import { useState } from "react";
import GlobalStyles from "./GlobalStyles";

import { NavBar, OverLay, MainContainer } from "./AppStyles";
import Cart from "./Components/Cart/Cart";
export default function App() {
  const [isToggle, setToggle] = useState(false);
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Cart isToggle={isToggle} setToggle={setToggle} />
      </NavBar>
      <MainContainer>{isToggle && <OverLay />}</MainContainer>
    </>
  );
}
