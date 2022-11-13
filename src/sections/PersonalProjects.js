import React from "react";
import styled from "styled-components";
import Project from "../components/Project";
import SortBy from "../components/SortBy";
import WorksVector from "../assets/icons/Works-black-outline.svg";
import BgLetterBanner from "../components/BgLetterBanner";

const Section = styled.div`
  position: relative;
  height: 100vh;
  width: 87vw;
  overflow: hidden;
  margin: 0 auto;

  .bgBannerContainer {
    position: absolute;
    z-index: -100;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 0 auto;
  position: relative;

  h1 {
    font-family: "Berlin Sans FB Regular";
    font-size: ${(props) => props.theme.fontxl};
    padding-bottom: 8px;
  }

  .workVector {
    padding-bottom: 3.5rem;
  }
`;

const ProjectScroll = styled.div`
  width: 100%;
  height: 35vw;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PersonalProjects = () => {
  return (
    <Section data-scroll-section>
      <div className="bgBannerContainer">
        <BgLetterBanner />
      </div>
      <Container>
        <img className="workVector" src={WorksVector} alt="Works" />
        <h1>Personal Projects</h1>
        <SortBy />

        <ProjectScroll>
          <Project />
          <Project />
          <Project />
        </ProjectScroll>
      </Container>
    </Section>
  );
};

export default PersonalProjects;
