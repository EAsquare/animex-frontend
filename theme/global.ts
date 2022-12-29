import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* BODY */
    body {
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.primary};
    }

    /*=================================================================================================
      SCROLL BAR
    =================================================================================================*/
    body ::-webkit-scrollbar-thumb {
      cursor: pointer;
      border-radius: 5px;
      -webkit-transition: color 0.2s ease;
      transition: color 0.2s ease;
      border: 0.25rem ${(props) => props.theme.background} solid;
    }

    body ::-webkit-scrollbar-track {
      background: ${(props: any) => props.theme.background};
      border: 0.3rem ${(props) => props.theme.background} solid;
      border-radius: 0;
    }
    body ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0.95rem;
      height: 1rem;
    }
    body ::-webkit-scrollbar-thumb {
      background-image: linear-gradient(${(props) =>
        props.theme.sidebarBackground}, ${(props) =>
  props.theme.alternateBackground});
    }
    body ::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }

  `;

export default GlobalStyle;
