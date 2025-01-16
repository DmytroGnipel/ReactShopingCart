import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLeftTopMenu = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default function LeftTopMenu() {
  return (
    <StyledLeftTopMenu>
      <Link to="/">
        <img src="./src/assets/images/logo.png" alt="logo" height="60" />
      </Link>

      <Link to="about">ABOUT US</Link>
      <Link to="products">SHOP</Link>
    </StyledLeftTopMenu>
  );
}
