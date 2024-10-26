import { createTheme } from "@mui/material/styles";
import Raleway from "../assets/fonts/Raleway-VariableFont_wght.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";

export enum SCREENS {
  XS = 0,
  SM = 640,
  MD = 768,
  LG = 1024,
  PP = 1100,
  XL = 1280,
  XL2 = 1536,
  XL3 = 2000,
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#DC5F00",
      light: "#ffffff",
    },
    secondary: {
      main: "#373A40",
      dark: "#F0F0F0",
    },
  },

  breakpoints: {
    values: {
      xs: SCREENS.XS,
      sm: SCREENS.SM,
      md: SCREENS.MD,
      lg: SCREENS.LG,
      xl: SCREENS.XL,
    },
  },

  typography: {
    fontFamily: "Raleway, Roboto, sans-serif",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${Raleway}) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: url(${RobotoMedium}) format('truetype');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: url(${RobotoBold}) format('truetype');
        }
      `,
    },
  },
});

export const themeAdmin = createTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
    fontSize: 16,
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#F0F0F0",

            color: "#000",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#F0F0F0",
          },
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)", // Hover effect for non-selected items
          },
        },
      },
    },
  },
});

export default theme;
