import styled from "styled-components";
import { ShoppingBasket, UserRound, Search } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";

const StyledRightTopMenu = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  position: relative;
`;

const StyledCounter = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  background: red;
  text-align: center;
  color: white;
  opacity: 0.8;
  border-radius: 50%;
`;

export default function RightTopMenu() {
  const {totalProductsInCart} = useOutletContext()
  return (
    <StyledRightTopMenu>
      <Link to="cart">
      {totalProductsInCart && <StyledCounter>{totalProductsInCart}</StyledCounter>}
        <ShoppingBasket color="white" size={48} />
      </Link>
      <a href="user">
        <UserRound color="white" size={48} />
      </a>
      <a href="search">
        <Search color="white" size={48} />
      </a>
    </StyledRightTopMenu>
  );
}
