import React from "react";

// Custom
import { Container } from "./styles";

// Interface
interface IPulsatingDotProps {
  circleWidth?: string;
  circleHeight?: string;
  ringWidth?: string;
  ringHeight?: string;
  color?: string;
}

export default function PulsatingDot({
  circleWidth = "10px",
  circleHeight = "10px",
  ringWidth = "20px",
  ringHeight = "20px",
  color = "var(--green)",
}: IPulsatingDotProps) {
  return (
    <Container
      circleWidth={circleWidth}
      circleHeight={circleHeight}
      ringWidth={ringWidth}
      ringHeight={ringHeight}
      color={color}>
      <div className="ring" />
      <div className="circle" />
    </Container>
  );
}