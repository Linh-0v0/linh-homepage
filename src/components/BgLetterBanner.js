import React from "react";
import styled from "styled-components";
import RkReflect from "../assets/icons/WORK rk Background reflect.svg";
import Rk from "../assets/icons/RkBlue.svg";
import WoReflect from "../assets/icons/WORK wo Background reflect.svg";
import Wo from "../assets/icons/WoOrange.svg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  .svgContainer {
    width: 84%;
  }

  .woGroup {
    align-self: flex-start;
    padding-top: 4.5rem;
  }

  .rkGroup {
    align-self: flex-end;
    padding-bottom: 0.5rem;
  }
`;

const BgLetterBanner = () => {
  return (
    <Container>
      <div className="woGroup">
        <div className="svgContainer">
          <img className="wo" src={Wo} alt="" />
        </div>
        <div className="svgContainer">
          <img className="woReflect" src={WoReflect} alt="" />
        </div>
      </div>

      <div className="rkGroup">
        {/* <div></div> */}
        <div className="svgContainer">
          <img className="rkReflect" src={RkReflect} alt="" />
        </div>
        <div className="svgContainer">
          <img className="rk" src={Rk} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default BgLetterBanner;
