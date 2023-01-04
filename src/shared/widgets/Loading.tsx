import React from "react";
import styled from "styled-components";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

interface OwnProps {
  disabled?: boolean;
  active?: boolean;
  size?: "mini" | "tiny" | "small" | "large" | "big" | "huge" | "massive";
  className?: string;
}

export default function Loading(props: OwnProps) {
  return (
    <Container {...props}>
      <Dimmer active={props.active}>
        <Loader size={props.size}>Loading</Loader>
      </Dimmer>
    </Container>
  );
}

const Container = styled(Segment)`
  position: absolute !important;
  height: calc(100vh - 55px) !important;
  width: 100vw !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  background-color: transparent !important;
`;
