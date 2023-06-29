'use client'

import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
      fontFamily: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "Lucida Grande",
          "sans-serif"
      ].join(",")
    },
    components: {
        MuiContainer: {
            defaultProps: {

            }
        },
    },
});

export const ThemeProviderClient = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}