import React from "react";
import styled from "styled-components";
import { Message } from "semantic-ui-react";
import { MessageProps } from "semantic-ui-react/dist/commonjs/collections/Message";

interface OwnProps {
  header?: string;
  color: "red" | "orange" | "yellow" | "olive" | "green" | "teal";
  size?: "mini" | "tiny" | "small" | "large" | "big" | "huge" | "massive";
  content?: string;
  icon?: any;
  hidden?: boolean;
  visible?: boolean;
  className?: string;
  compact?: boolean;
  floating?: boolean;
  onDismiss?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    data: MessageProps
  ) => void;
}

export default function CustomAlert(props: OwnProps) {
  return <Container {...props} />;
}

const Container = styled(Message)`
  margin: 0 !important;
  border-radius: 0 !important;
`;
