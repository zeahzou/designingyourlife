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
    mode: 'light',
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    },
    primary: {
      main: '#000000'
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.7)'
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
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#f3bacb',
          height: 8
        },
        thumb: {
          width: 24,
          height: 24,
          backgroundColor: '#FFFFFF',
          border: '2px solid #f3bacb',
          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0 0 0 8px rgba(243, 186, 203, 0.3)'
          }
        },
        track: {
          height: 8,
          borderRadius: 4,
          backgroundColor: '#f3bacb'
        },
        rail: {
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(243, 186, 203, 0.2)'
        },
        mark: {
          backgroundColor: '#f3bacb',
          width: 6,
          height: 6,
          borderRadius: '50%'
        },
        markActive: {
          backgroundColor: '#FFFFFF'
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
            backgroundColor: 'transparent',
            '& fieldset': {
              borderWidth: '0 0 1px 0',
              borderRadius: 0
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.42)'
            },
            '&.Mui-focused fieldset': {
              borderWidth: '0 0 2px 0',
              borderColor: '#000000'
            }
          }
        }
      }
    }
  }
});

export default theme;