import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import styled from "styled-components";
import BottomContainer from "./BottomContainer";
import Footer from "./Footer";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function HomePage() {
  return (
    <StyledHomePage>
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
      <Footer />
    </StyledHomePage>
  );
}
