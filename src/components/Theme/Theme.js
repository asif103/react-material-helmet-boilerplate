import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

export default function Theme({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: 'inter',
    },
    palette: {
      text: {
        1000: '#212121',
        900: '#616161',
        800: '#424242',
        700: '#686868',
        600: '#757575',
        500: '#9E9E9E',
        400: '#BDBDBD',
        300: '#E0E0E0',
        200: '#EEEEEE',
        100: '#F5F5F5',
        50: '#FAFAFA',
      },
      primary: {
        light: '#05349f',
        main: '#012169',
        dark: '#04153a',
      },
    },
  });
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}
