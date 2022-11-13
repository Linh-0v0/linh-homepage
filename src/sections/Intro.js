import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimationControls, useInView } from "framer-motion";
import avatarImg from "../assets/self-avatar-removebg.png";

const Sections = styled.section`
  position: relative;
  height: 100vh;
  width: 80vw;
  overflow: hidden;
  margin: 0 auto;
`;

const IntroContainer = styled.div`
  font-family: "Berlin Sans FB Regular";
  height: 100%;
  display: flex;
  align-items: center;
`;

const Left = styled(motion.div)`
  width: 50%;
  display: inline-block;

  h1 {
    font-size: ${(props) => props.theme.fontxxxl};
    padding-bottom: 1rem;
  }

  h2 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => `rgba(${props.theme.blue}, 1)`};
    padding-bottom: 1.5rem;
  }

  p {
    font-size: ${(props) => props.theme.fontxs};
    font-family: "Nunito";
    font-weight: 500;
    text-indent: 1.5em;
    line-height: 1.7;
  }
`;

const Right = styled.div`
  width: 45%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  padding-top: 2rem;
  padding-left: 5%;

  .imgContainer {
    width: 80%;
    background-color: ${(props) => `rgba(${props.theme.lightBlue}, 1)`};
    display: flex;
    justify-content: center;
  }

  img {
    width: 90%;
    object-fit: cover;
  }
`;

const TextAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      // ease: [0.2, 0.65, 0.3, 0.9],
      // duration: 2,
    },
  },
};

const Intro = () => {
  const introRef = useRef(null);
  const isInView = useInView(introRef);
  const controls = useAnimationControls();

  useEffect(() => {
    console.log("Element Intro is in view: ", isInView);

    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <Sections className="introSection" ref={introRef} data-scroll-section>
      <IntroContainer>
        <Left variants={TextAnimation} animate={controls}>
          <motion.h1 variants={item}>Vu Bui Khanh Linh</motion.h1>
          <motion.h2 variants={item}>Front-end Developer</motion.h2>
          <motion.p variants={item} style={{ paddingBottom: "1rem" }}>
            I’m a software engineer developer from Vietnam who builds digital
            stuff ( websites and apps) that I find intriguing.
          </motion.p>
          <motion.p variants={item}>
            I have great interest in full-stack development, specifically
            front-end side as I desire to create a site that’s user-friendly and
            artistically beautiful :)
          </motion.p>
        </Left>

        <Right>
          {/* <div className="imgContainer">
            <img src={avatarImg} alt="avatar" />
          </div> */}
        </Right>
      </IntroContainer>
    </Sections>
  );
};

export default Intro;
