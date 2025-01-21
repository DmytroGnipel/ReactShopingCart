import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const StyledDivCart = styled.div`
display: flex;
flex-direction: column;
background: white;
align-items: center;

` 
const StyledDivPrducts = styled.div`
display: flex;
flex-wrap: wrap;

`

const StyledDivPrduct = styled.div`
display: flex;
width: 500px;
align-items: center;
border: 1px solid purple;
` 
const StyledButton = styled.button`
width: 200px;
`

export default function ShopCart () {
    const [cart,  removeFromCart] = useOutletContext()
    const totalCartSum = cart.reduce((total, next) => total + next.price * next.amount, 0)
    
const full = <StyledDivCart>

<StyledDivPrducts>
        
    {cart.map(product => <StyledDivPrduct
        key={product.id}>
        <img src={product.image} alt={`product_${product.id}`} height="100px" />
        <p>{product.title}</p>
        <p>{product.amount}</p>
        <p>Sum: {product.amount * product.price}$</p>
        <StyledButton type='button' onClick={()=>{removeFromCart(product.id)}}>Remove product from the cart</StyledButton>
    </StyledDivPrduct>
    )}
</StyledDivPrducts>
</StyledDivCart>




    return cart.length && full
    
}