import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import CatLookingSection from "../components/CatLookingSection";

const Sections = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => `rgba(${props.theme.beige}, 1)`};
`;

const Home = () => {
  return (
    <Sections id="catModelStick" data-scroll-section>
      <div>
        <CatLookingSection />
      </div>
    </Sections>
  );
};

export default Home;
