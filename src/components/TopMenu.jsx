import styled from "styled-components";
import RightTopMenu from "./RightTopMenu";
import LeftTopMenu from "./LeftTopMenu";

const StyledTopMenu = styled.div`
  width: 1170px;

  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export default function TopMenu({amount}) {
  return (
    <StyledTopMenu>
      <LeftTopMenu />
      <RightTopMenu amount={amount} />
    </StyledTopMenu>
  );
}
