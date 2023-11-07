import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff'
        },
    },


    components: {

        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },

        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'fixed',
            },
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none'
                },
            }
        },

        MuiTypography: {
            defaultProps: {
                color: 'primary'
            },
            styleOverrides: {
                h1: {
                    fontSize: '4.5rem',
                    fontWeight: 600
                },
                h2: {
                    fontSize: '2.5rem',
                    fontWeight: 400
                },
                body1: {
                    fontSize: '1.2rem',
                    opacity: .8
                },
                body2: {
                    fontSize: '1rem',
                    opacity: .8
                }
            }
        },

        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
        },
  }
});