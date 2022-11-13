import React from "react";
import styled from "styled-components";
import SortIcon from "../assets/icons/Sort.svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h3 {
        font-family: 'Lucida Sans Regular'
        font-size: ${(props) => props.theme.fontlg};
        padding-left: 0.5rem;
    }
`;
const SortBy = () => {
  return (
    <Container>
      <img src={SortIcon} alt="SortIcon" />
      <h3>Sort by</h3>
    </Container>
  );
};

export default SortBy;
