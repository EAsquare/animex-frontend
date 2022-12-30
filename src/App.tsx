import { useCounter } from "./hooks/useCounter";
import styled from "styled-components";
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";

export default function App() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { count, increment } = useCounter();

  return (
    <AppWrapper>
      <button type="button" onClick={increment}>
        count is: {count}
      </button>
      <div onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}>
        toggle theme
      </div>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
`;
