import styled from "styled-components";
import { Container } from "semantic-ui-react";
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";
import CustomAlert from "./shared/widgets/CustomAlert";
import { Icon } from "semantic-ui-react";
import { useCounter } from "./hooks/useCounter";
import { useClosePopup } from "./hooks/useClosePopup";
import Loading from "./shared/widgets/Loading";

export default function App() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { count, increment } = useCounter();
  const { close, setClose } = useClosePopup();

  return (
    <AppWrapper fluid>
      <CustomAlert
        color="olive"
        hidden={close}
        floating
        icon={<Icon name="circle notched" loading />}
        header="Just one second"
        content="We are fetching that content for you."
        size="mini"
        onDismiss={setClose}
      />
      <Loading active size="large" />
      <button type="button" onClick={increment}>
        count is: {count}
      </button>
      <div onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}>
        toggle theme
      </div>
    </AppWrapper>
  );
}

const AppWrapper = styled(Container)`
  background-color: ${({ theme }) => theme.background};
`;
