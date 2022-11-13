import React from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const CatContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const CatLookingModel = () => {
  return (
    <CatContainer>
      <Spline scene="https://prod.spline.design/jQ0F9FS1SMIa7eUZ/scene.splinecode" />
    </CatContainer>
  );
};

export default CatLookingModel;
