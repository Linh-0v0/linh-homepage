import React, { useRef, useLayoutEffect } from "react";
import CatLookingModel from "../components/CatLookingModel";
import styled from "styled-components";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

const BgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 35vh;
  width: 100%;
`;

const Title = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1.75em;

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Berlin Sans FB";
    font-size: ${(props) => props.theme.fontBig};
  }

  h2 {
    font-family: "Berlin Sans FB";
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Name = styled.span`
  color: ${(props) => `rgba(${props.theme.orange}, 1)`};
`;

const TitleAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3,
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
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const catAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [1, 0.4, 0.9, 1],
      duration: 1.5,
    },
  },
};

const CatLookingSection = () => {

  const ref = useRef(null);
  const verticalRef = useRef(null);
  
  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = verticalRef.current;
  
    setTimeout(() => {
      gsap.to(scrollingElement, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "800",
          scroller: '.App',
          scrub: true,
          markers: true
        },
        y: 600,
        ease: "none",
      })
      
      ScrollTrigger.refresh();
    }, 1000)
   
  }, [])

  return (
    <Section ref={ref}>
      <BgOverlay />
      <TitleContainer>
        <Title variants={TitleAnimation} initial="hidden" animate="show">
          <motion.div variants={item}>
            <h1 data-scroll data-scroll-delay="0.19" data-scroll-speed="2">
              I'
            </h1>
            <h1 data-scroll data-scroll-delay="0.16" data-scroll-speed="2">
              m
            </h1>
            <pre> </pre>
            <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="2">
              <Name>L</Name>
            </h1>
            <h1 data-scroll data-scroll-delay="0.1" data-scroll-speed="2">
              <Name>i</Name>
            </h1>
            <h1 data-scroll data-scroll-delay="0.07" data-scroll-speed="2">
              <Name>n</Name>
            </h1>
            <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
              <Name>h</Name>
            </h1>
          </motion.div>

          <motion.h2
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            A front-end developer in Vietnam
          </motion.h2>
        </Title>
      </TitleContainer>
      
      <motion.div
        // data-scroll
        // variants={catAnimation}
        // initial="hidden"
        // animate="show"
        ref={verticalRef}
      >
        <CatLookingModel />
      </motion.div>
    </Section>
  );
};

export default CatLookingSection;
