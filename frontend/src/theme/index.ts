import { createTheme } from '@mui/material/styles';
import { palette } from './palette.theme';

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette,
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;