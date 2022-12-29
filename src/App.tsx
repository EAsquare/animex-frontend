import { useContext, useState } from "react";
import styled from "styled-components";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ThemeContext } from "../theme/ThemeContext";

export default function App() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  return (
    <AppWrapper>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        >
          toggle theme
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
`;
