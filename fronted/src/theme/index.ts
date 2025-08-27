import { createTheme } from "@mui/material/styles";
import { palette } from "./palette.theme";

export const theme = createTheme({
  palette: {
    primary: { main: palette.primary.main },
    secondary: { main: palette.secondary.main },
    background: {
      default: palette.background.default,
      paper: palette.background.paper,
    },
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
    },
  },
typography: {
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",

  h1: {
    fontWeight: 700,
    fontSize: "2.5rem", // ~40px
    lineHeight: 1.2,
  },
  h2: {
    fontWeight: 700,
    fontSize: "2rem", // ~32px
    lineHeight: 1.3,
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.75rem", // ~28px
    lineHeight: 1.3,
  },
  h4: {
    fontWeight: 600,
    fontSize: "1.5rem", // ~24px
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: 500,
    fontSize: "1.25rem", // ~20px
    lineHeight: 1.4,
  },
  h6: {
    fontWeight: 500,
    fontSize: "1rem", // ~16px
    lineHeight: 1.5,
  },

  body1: {
    fontWeight: 400,
    fontSize: "1rem", // ~16px
    lineHeight: 1.6,
  },
  body2: {
    fontWeight: 400,
    fontSize: "0.875rem", // ~14px
    lineHeight: 1.6,
  },

  subtitle1: {
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#6E6E6E", // text.secondary
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: "#6E6E6E",
  },

  button: {
    textTransform: "none",
    fontWeight: 600,
    fontSize: "0.95rem",
  },
},

});
