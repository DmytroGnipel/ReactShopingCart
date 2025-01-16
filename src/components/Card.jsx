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
  changeInput,
  addHandler,
  removeHandler,
  amount,
}) {
  return (
    <StyledCard>
      <Title title={title} />
      <Link to={`${id}`}>
        <img src={image} alt={`item_${id}`} height="350px" />
      </Link>
      {price}$
      <DivForForm>
        <Form method="post">
          <button onClick={(e) => removeHandler(e, id)}>-</button>
        </Form>
        <input
          type="text"
          placeholder="Choose quantity"
          name="amount"
          value={amount}
          onChange={(e) => changeInput(e, id)}
        />
        <Form method="post">
          <button onClick={(e) => addHandler(e, id)}>+</button>
        </Form>
      </DivForForm>
      <Form method="post">
        <ToCartButton>add to cart</ToCartButton>
      </Form>
    </StyledCard>
  );
}
