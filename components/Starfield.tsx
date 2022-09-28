import { Box } from "rebass";
import styled, { keyframes } from "styled-components";

const Starfield = () => (
  <StarfieldCont>
    <div className="stars"></div>
    <div className="stars"></div>
    <div className="stars"></div>
    <div className="stars"></div>
    <div className="stars"></div>
  </StarfieldCont>
);

const zoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    animation-timing-function: ease-in;
  } 
  85% {
    opacity: 1;
    transform: scale(2.8);
    animation-timing-function: linear;
  }
  100% {
    opacity: 0;
    transform: scale(3.5);
  }
`;

const StarfieldCont = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .stars {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
        1px 1px at 20px 30px,
        ${(props) => props.theme.color.primary},
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        1px 1px at 40px 70px,
        ${(props) => props.theme.color.primary},
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        1px 1px at 50px 160px,
        ${(props) => props.theme.color.primary},
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        1px 1px at 90px 40px,
        ${(props) => props.theme.color.primary},
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        1px 1px at 130px 80px,
        ${(props) => props.theme.color.primary},
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        1px 1px at 160px 120px,
        ${(props) => props.theme.color.primary},
        rgba(0, 0, 0, 0)
      );
    background-repeat: repeat;
    background-size: 200px 200px;
    animation: ${zoom} 5s infinite;
    opacity: 0;
    &:nth-child(1) {
      background-position: 50% 50%;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      background-position: 20% 60%;
      animation-delay: 1s;
    }
    &:nth-child(3) {
      background-position: -20% -30%;
      animation-delay: 2s;
    }
    &:nth-child(4) {
      background-position: 40% -80%;
      animation-delay: 3s;
    }
    &:nth-child(5) {
      background-position: -20% 30%;
      animation-delay: 4s;
    }
  }
`;

export default Starfield;