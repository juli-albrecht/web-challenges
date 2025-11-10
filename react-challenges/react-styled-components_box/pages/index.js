import css from "styled-jsx/css";
import styled from "styled-components";

export default function HomePage({isBlack}) {
  return (
    <div>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $black={isBlack} isBlack />
    </div>
  );
}

const BoxWithStyledComponents = styled.div`
// default styling
width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
    background-color: ${(props) =>
    props.$black ? "black" : "green"};

`;