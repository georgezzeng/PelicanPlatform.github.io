'use client'

import {createTheme, ThemeProvider} from "@mui/material";
import {FC} from "react";

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

interface ThemeProviderClientProps {
    children: React.ReactNode
}

export const ThemeProviderClient: FC<ThemeProviderClientProps> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}