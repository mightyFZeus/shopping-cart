import React, {useState} from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { 
  Wrapper,
  OverlayWrapper,
  Card,
  CardBody,
  CardImage,
  CardPrice,
  CardTitle
} from "./Styles";
export default function Product({addProductToCart, ...props}) {
  const [isHover, setHover] = useState(false)

  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)
  
  console.log(isHover)

  return <Wrapper 
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          >
            {isHover &&(
              <OverlayWrapper
                onClick={() =>addProductToCart({...props})}
              >
                <AddShoppingCartIcon  style={{fontSize:'100px', fill:'#ffffff'}}/>
              </OverlayWrapper>
            )}
    <Card>
      <CardImage src={props.imageURL} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardPrice>{props.price}</CardPrice>
      </CardBody>
    </Card>
  </Wrapper>;
}
