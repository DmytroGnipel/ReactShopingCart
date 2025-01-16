import styled from "styled-components";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";
import TopMenu from "./TopMenu";
import { useState } from "react";

const StyledGoods = styled.div`
  width: 1200px;
  background: purple;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
`;

export default function Goods() {
  const [goodsArray, setgoodsArray] = useState(useLoaderData());

  function changeInput(event, ID) {
    setgoodsArray(
      goodsArray.map((product) => {
        if (product.id == ID) {
          product.amount = +event.target.value;
          return product;
        }
        return product;
      }),
    );
  }

  function addHandler(event, ID) {
    event.preventDefault();
    setgoodsArray(
      goodsArray.map((product) => {
        if (product.id == ID) {
          product.amount++;
          return product;
        }
        return product;
      }),
    );
  }

  function removeHandler(event, ID) {
    event.preventDefault();
    setgoodsArray(
      goodsArray.map((product) => {
        if (product.id == ID) {
          product.amount--;
          return product;
        }
        return product;
      }),
    );
  }

  return (
    <StyledGoods>
      <TopMenu />
      {goodsArray.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          changeInput={changeInput}
          addHandler={addHandler}
          removeHandler={removeHandler}
          amount={item.amount}
        />
      ))}
    </StyledGoods>
  );
}
