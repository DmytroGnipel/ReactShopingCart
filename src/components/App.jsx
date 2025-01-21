import { Outlet, useLoaderData } from "react-router-dom"
import { useState } from "react"

export default function App () {
    const [cart, setCart] = useState([])
    const productsArray = useLoaderData()

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
    
      function totalProduct () {
        return cart.reduce((total, next) => total + next.amount, 0)
      }
    
    
      const totalProductsInCart = totalProduct ()

    return <>
    
    <Outlet context={{totalProductsInCart, changeInput, productsArray,
        cart, cartIncludes, decrementAmount, incrementAmount,
        removeFromCart, addToCart}}/>
    </>
    
}