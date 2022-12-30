/* eslint-disable import/export */
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

import { darkTheme, lightTheme } from "../../theme/appTheme";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../theme/ThemeContext";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    ),
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
