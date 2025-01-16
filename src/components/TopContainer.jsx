import styled from "styled-components";
import TopMenu from "./TopMenu";
import Welcome from "./Welcome";

const StyledTopContainer = styled.div`
  width: 1200px;
  margin: auto;
  height: 475px;
  background-color: green;
  background-image: url("./src/assets/images/wildberries-main.png");
  background-repeat: no-repeat;
`;
export default function TopContainer() {
  return (
    <StyledTopContainer>
      <TopMenu />
      <Welcome />
    </StyledTopContainer>
  );
}
