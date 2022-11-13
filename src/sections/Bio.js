import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import CatLyingModel from "../components/CatLyingModel";
import { useInView, motion, useAnimationControls } from "framer-motion";

const Sections = styled.section`
  position: relative;
  height: 100vh;
  width: 90vw;
  overflow: hidden;
`;

const BioContainer = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

const Left = styled(motion.div)`
  width: 45%;
  // background-color: ${(props) => `rgba(${props.theme.pink}, 1)`};
`;

const Right = styled(motion.div)`
  width: 55%;

  h1 {
    font-family: "Berlin Sans FB Regular";
    font-size: ${(props) => props.theme.fontBig};
    padding-bottom: 3rem;
    color: ${(props) => `rgba(${props.theme.orange}, 1)`};
  }

  h2 {
    font-family: "Berlin Sans FB Regular";
    font-size: ${(props) => props.theme.fontlg};
  }

  h3 {
    font-family: "Berlin Sans FB Regular";
    font-size: ${(props) => props.theme.fontmd};
  }

  p {
    font-family: "Basic";
    font-size: ${(props) => props.theme.fontsm};
  }

  .bioTimeline {
    padding-bottom: 2.5rem;
  }

  .hobby {
    padding-top: 1rem;

    h2 {
      padding-bottom: 1.5rem;
      text-decoration: underline;
    }

    p {
      padding-bottom: 2rem;
    }
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

const catLyingAnimation = {
  hidden: {
    opacity: 0,
    y: 400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      ease: "easeInOut",
      duration: 1.25,
    },
  },
};

const Bio = () => {
  const bioRef = useRef(null);
  const isInView = useInView(bioRef);
  const controls = useAnimationControls();

  useEffect(() => {
    console.log("Element Bio is in view: ", isInView);

    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }

  }, [isInView]);

  return (
    <Sections className="bioSection" ref={bioRef} data-scroll-section>
      <BioContainer>
        <Left className="catLyingModel" >
          <motion.div variants={catLyingAnimation} animate={controls}>
          <CatLyingModel />
          </motion.div>
        </Left>
        <Right variants={TextAnimation} animate={controls}>
          <motion.div variants={item}>
            <h1>Bio</h1>

            <div className="bioTimeline">
              <h3>2001:</h3>
              <p>Born in Nam Dinh, Vietnam</p>
            </div>
            <div className="bioTimeline">
              <h3>2019 to present:</h3>
              <p>
                Currently a student at RMIT University (Royal Melbourne
                Institute of Technology) in Saigon South campus based in Ho Chi
                Minh city
              </p>
            </div>
            <div className="hobby">
              <h2>Outside of work, I love</h2>
              <p>Music, Art, Strategy and Action Game ... and Cat </p>
            </div>
          </motion.div>
        </Right>
      </BioContainer>
    </Sections>
  );
};

export default Bio;
