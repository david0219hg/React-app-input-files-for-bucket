import { blue, blueGrey, red} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: blueGrey.A400,
    },
    primary: {
      main: blue.A400,
    },
    secondary: {
      main: blue.A200,
    },
    error: {
      main: red.A200,
    },
  },
});

export default theme;