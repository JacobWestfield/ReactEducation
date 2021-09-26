import React from 'react';
import { ThemeProvider, createTheme } from "@material-ui/core";




const theme = createTheme();

export const Layout = ({ children }) => {
    return <ThemeProvider theme={theme}>
        <main>
            {children}
        </main>
    </ThemeProvider>
};