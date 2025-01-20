import styled from "styled-components";
import Card from "./Card";
import { useLoaderData, Outlet } from "react-router-dom";
import TopMenu from "./TopMenu";
import { useState } from "react";

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

  const productsArray = useLoaderData()

  const [cart, setCart] = useState([])
  
  function addToCart(ID) {
    const newProduct = productsArray.find(({id}) => id == ID)
    newProduct.amount++
    setCart([...cart, newProduct])
  }

  function removeFromCart(ID) {
    const newCart = cart.filter(({id}) => id != ID)
    setCart(newCart)
  }

  function incrementAmount(ID) {
    const newCart = cart.map(product => {
      if (product.id == ID) {
        product.amount++
        return product
      }
      return product
    })
    setCart(newCart)
  }

  function decrementAmount(ID) {
    const newCart = []
    cart.forEach(product => {
      if (product.id == ID) {
        product.amount--
        //when amount of product in the cart is zero, in removes from the cart
        if (product.amount) newCart.push(product)
      }
    else newCart.push(product)
    })
    setCart(newCart)
  }

  function cartIncludes (ID) {
    for (const product of cart) {
      if (product.id == ID) return true
    }
    return false
  }

    function changeInput(event, ID) {
      const newCart = cart.map(product => {
        if (product.id == ID) {
          product.amount = +event.target.value;
          return product;
        }
        return product;
      })
      setCart(newCart)
  }

  function totalProductsInCart () {
    return cart.reduce((total, next) => total + next.amount, 0)
  }


  

  return <Wrapper>
  
  
      <TopMenu amount={totalProductsInCart()} />
      <Outlet context={cart}/>
     
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
