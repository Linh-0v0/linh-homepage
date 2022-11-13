import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavContainer = styled(motion.div)`
  width: 100vw;
  height: ${(props) => props.theme.navHeight};
  position: absolute;
  z-index: 100;
  top: 0;
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavElements = styled.div`
  font-family: "Berlin Sans FB Regular";

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  width: 85%;
`;

const LogoName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.75rem;
    padding-right: 8em;

    p {
        font-size: ${(props) => props.theme.fontsm} 
    }
`;

const LinkList = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  font-size: ${(props) => props.theme.fontsm}
`;

const LanguageBtn = styled.div`
  background-color: ${(props) => `rgba(${props.theme.blue}, 1)`};
  border: none;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 30px;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      delay: 2,
      ease: "easeInOut",
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: 2,
      ease: "easeInOut",
    },
  },
};

const navVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

const NavBar = () => {
  return (
    <NavContainer variants={navVariants} initial="hidden" animate="show">
      <NavElements>
        <LogoName>
          <Logo />
          <motion.p variants={textVariants} initial="hidden" animate="show">
            Linh Vu
          </motion.p>
        </LogoName>

        {/* LINKS */}
        <LinkList variants={linkVariants} initial="hidden" animate="show">
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.09, y: 0 }}
          >
            <Link to="/works">Works</Link>
          </motion.div>
        </LinkList>

        {/* LANGUAGE BUTTON */}
        <LanguageBtn>ENG</LanguageBtn>
      </NavElements>
    </NavContainer>
  );
};

export default NavBar;
