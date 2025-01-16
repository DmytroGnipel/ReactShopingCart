import styled from "styled-components";
import { ShoppingBasket, UserRound, Search } from "lucide-react";

const StyledLeftTopMenu = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;
export default function LeftTopMenu() {
  return (
    <StyledLeftTopMenu>
      <a href="cart">
        <ShoppingBasket color="white" size={48} />
      </a>
      <a href="user">
        <UserRound color="white" size={48} />
      </a>
      <a href="search">
        <Search color="white" size={48} />
      </a>
    </StyledLeftTopMenu>
  );
}
