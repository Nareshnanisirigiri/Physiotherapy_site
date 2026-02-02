// src/theme.js
import { createTheme } from "@mui/material/styles";

/* ===== LIGHT THEME ===== */
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9BC53D", // logo green
    },
    secondary: {
      main: "#0B5C7A", // logo blue
    },
    background: {
      default: "#FFFFFF",
      paper: "#F2F8F6",
    },
    text: {
      primary: "#0B5C7A", // deep blue text
      secondary: "#6FAF3A", // soft green accent
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

/* ===== DARK THEME ===== */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9BC53D", // logo green
    },
    secondary: {
      main: "#0B5C7A", // logo blue
    },
    background: {
      default: "#000000", // logo black background
      paper: "#0E2F3D",   // dark blue surface
    },
    text: {
      primary: "#E6F4F1", // soft white/mint
      secondary: "#9BC53D",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
