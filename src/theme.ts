import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", sans-serif',
    h6: {
      fontSize: '1.125rem',
      letterSpacing: '-0.01em',
      fontWeight: 600
    },
    subtitle1: {
      fontSize: '1rem',
      letterSpacing: '-0.01em',
      fontWeight: 500
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: '-0.006em'
    }
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: 'rgba(28, 28, 30, 0.95)'
    },
    primary: {
      main: '#0A84FF'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)'
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          maxWidth: '100% !important'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(28, 28, 30, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '1.5rem'
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#0A84FF',
          height: 4
        },
        thumb: {
          width: 16,
          height: 16,
          backgroundColor: '#FFFFFF',
          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0 0 0 8px rgba(10, 132, 255, 0.16)'
          }
        },
        track: {
          height: 4,
          borderRadius: 2
        },
        rail: {
          height: 4,
          borderRadius: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        },
        mark: {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          width: 4,
          height: 4,
          borderRadius: '50%'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem',
          padding: '0.75rem 1.5rem',
          textTransform: 'none',
          fontSize: '0.9375rem',
          fontWeight: 500,
          letterSpacing: '-0.01em'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.75rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }
        }
      }
    }
  }
});

export default theme;