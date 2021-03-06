import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#fa7000',
        },
        secondary: {
            main: '#8d9091',
        },
        text: {
            main: '#000',
        },
        textWhite: {
            main: '#fff',
        },
        backGround: {
            main: '#f8f8f8',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '',
                    },
                    textTransform: 'none',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: '0.25rem',
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
    },
    spacing: 16,
});

export default theme;
