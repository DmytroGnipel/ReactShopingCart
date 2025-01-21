import styled from "styled-components";
import Card from "./Card";
import { Outlet, useOutletContext } from "react-router-dom";
import TopMenu from "./TopMenu";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 1200px;
background: purple;
margin: auto;
`;

const StyledGoods = styled.div`
  width: 1200px;
  background: purple;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
`;

export default function Goods() {

const {totalProductsInCart, changeInput, productsArray,
  cart, cartIncludes, decrementAmount, incrementAmount,
  removeFromCart, addToCart} = useOutletContext()
  
 
  


  

  return <Wrapper>
  
  
      <TopMenu totalProductsInCart={totalProductsInCart}/>
      <Outlet context={[cart, removeFromCart]}/>
     
      <StyledGoods>{productsArray.map((item) => (
        <Card
          key={item.id}
          //properties
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          amount={item.amount}
          //functions
          changeInput={changeInput}
          addToCart={addToCart}
          incrementAmount={incrementAmount}
          decrementAmount={decrementAmount}
          cartIncludes={cartIncludes}
        />
      ))}
       
    </StyledGoods>
    
    </Wrapper>
}
