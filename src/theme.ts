import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: shades.primary[500],
//     },
//     secondary: {
//       main: shades.secondary[500],
//     },
//     neutral: {
//       dark: shades.neutral[700],
//       main: shades.neutral[500],
//       light: shades.neutral[100],
//     },
