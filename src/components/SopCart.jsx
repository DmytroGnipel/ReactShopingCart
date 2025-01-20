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


export default function ShopCart () {
    const cart = useOutletContext()
    const totalCartSum = cart.reduce((total, next) => total + next.price * next.amount, 0)
    



    //console.log(cart)
    return <StyledDivCart>
<p>Total: {totalCartSum}</p>
<StyledDivPrducts>
        
    {cart.map(product => <StyledDivPrduct
        key={product.id}>
        <img src={product.image} alt={`product_${product.id}`} height="100px" />
        <p>{product.title}</p>
        <p>{product.amount}</p>
        <p>Sum: {product.amount * product.price}$</p>
    </StyledDivPrduct>
    )}
</StyledDivPrducts>


</StyledDivCart>
}