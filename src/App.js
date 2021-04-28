import "./styles.css";
import GlobalStyles from "./GlobalStyles";

import { NavBar } from "./AppStyles";
import Cart from "./Components/Cart/Cart";
export default function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Cart />
      </NavBar>
    </>
  );
}
