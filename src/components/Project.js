import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useInView, motion, useAnimationControls } from "framer-motion";
import expImg from "../assets/minhtaneuroalwin.png";

const Container = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => `rgba(${props.theme.gray}, 0.2)`};

  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  width: 85%;
  padding: 1.25rem 0;

  h2 {
    font-family: "Berlin Sans FB Regular";
    font-size: ${(props) => props.theme.fontlg};
    text-align: center;
    padding-bottom: 1rem;
  }

  p {
    font-family: "Nunito";
    font-size: ${(props) => props.theme.fontxs};
    text-align: center;
  }
`;

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimationControls();

  // useEffect(() => {
  //   console.log("Element Bio is in view: ", isInView);

  //   if (isInView) {
  //     controls.start("show");
  //   } else {
  //     controls.start("hidden");
  //   }

  // }, [isInView]);

  return (
    <Container>
      <ImgContainer>
        <img src={expImg} alt="project" />
      </ImgContainer>
      <InfoContainer variants={item}>
        <h2>Minh Tan EuroAlwin</h2>
        <p>Aluminum and Glass products installation company</p>
      </InfoContainer>
    </Container>
  );
};

export default Project;
