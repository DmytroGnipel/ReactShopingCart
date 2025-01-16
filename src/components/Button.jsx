import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background: purple;
`;

export const StyledBtnforCard = styled(StyledButton)``;

export default function Button() {
  return (
    <Link to="goods">
      <StyledButton>Shop NOW</StyledButton>
    </Link>
  );
}
