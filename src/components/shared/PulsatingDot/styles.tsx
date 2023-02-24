import styled from "styled-components";

export const Container = styled.div<{ circleWidth: string, circleHeight: string, ringWidth: string, ringHeight: string, color: string }>`
  position: relative;

  .circle {
    width: ${({ circleWidth }) => circleWidth};
    height: ${({ circleHeight }) => circleHeight};
    position: absolute;
    left: 5px;
    top: 5px;

    background-color: ${({ color }) => color};
    border-radius: 50%;
  }

  .ring {
    width: ${({ ringWidth }) => ringWidth};
    height: ${({ ringHeight }) => ringHeight};
    position: absolute;
    left: 0;
    top: 0;

    border: 3px solid ${({ color }) => color};
    -webkit-border-radius: 30px;
    -webkit-animation: pulsate 1s ease-out;
    -webkit-animation-iteration-count: infinite; 
    opacity: 0.0;

    @keyframes pulsate {
      0% { transform: scale(0.1, 0.1); opacity: 0.0; }
      50% { opacity: 1.0; }
      100% { transform: scale(1.2, 1.2); opacity: 0.0; }
    }
  }
`;