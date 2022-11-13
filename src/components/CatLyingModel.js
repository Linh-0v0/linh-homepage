import React, { useRef } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const CatContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const CatLyingModel = () => {
  return (
    <CatContainer>
      <Spline scene="https://prod.spline.design/BwKlc0o31XYbXVUl/scene.splinecode" />
    </CatContainer>
  );
};

export default CatLyingModel;

