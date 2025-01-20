import styled from "styled-components";
import Title from "./Title";
import { Form, Link } from "react-router-dom";

const StyledCard = styled.div`
  width: 32%;
  height: 600px;
  background: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivForForm = styled.div`
  background: white;
  margin: auto;
  display: flex;
  align-items: center;
`;

const ToCartButton = styled.button`
  background: purple;
  width: 300px;
  height: 50px;
  margin-bottom: 2%;
`;


export default function Card({
  id,
  title,
  image,
  price,
  amount,
  addToCart,
  incrementAmount,
  decrementAmount,
  cartIncludes,
  changeInput,
}) {

 

  


  return (
    <StyledCard>
      <Title title={title} />

    

      <Link to={`/product/${id}`}><img src={image} alt={`item_${id}`} height="350px" /></Link>
      <p>{price}$</p>

 


      {
      !cartIncludes(id) ? <ToCartButton type='button' onClick={()=>{addToCart(id)}}>add to cart</ToCartButton> 
      : <> 
      <ToCartButton type='button'>In the cart</ToCartButton>
      
      <DivForForm>
      <Form method="post">
      
        <button type="button" onClick={()=>{decrementAmount(id)}}>-</button>
      </Form>
      <input
        placeholder="Choose quantity"
        value={amount}
        onChange={(e) => changeInput(e, id)}
      />
      <Form method="post">
        <button type="button" onClick={()=>{incrementAmount(id)}}>+</button>
      </Form>
    </DivForForm>
    </>}

        
  
    </StyledCard>
  );
}



