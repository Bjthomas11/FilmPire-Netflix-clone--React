import React, { useState, createContext, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext();

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((previousMode) => (previousMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
