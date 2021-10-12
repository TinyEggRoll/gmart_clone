import * as React from 'react';
import {
    Avatar,
    Button,
    TextField,
    Box,
    Container,
    Typography,
    Link as MUILink,
    IconButton,
} from '@mui/material';
import { FcLock, FcGoogle } from 'react-icons/fc';
import NextLink from 'next/link';
import Footer from '../components/Footer';

const LogIn = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('yee haw1');
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <FcLock size="1.5rem" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                        />
                        <Box
                            sx={{
                                mt: '.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                            <NextLink href="/" passHref>
                                <MUILink variant="body2">
                                    Forgot password?
                                </MUILink>
                            </NextLink>
                            <NextLink href="/signup" passHref>
                                <MUILink variant="body2">
                                    Don&apos;t have an account? Sign up
                                </MUILink>
                            </NextLink>
                        </Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Log in
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '3rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        {/* Make sure to change to gray color */}
                        <Typography mb="1rem" variant="h7">
                            Or Sign Up Using
                        </Typography>
                        <IconButton aria-label="google login">
                            <FcGoogle size="3rem" />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default LogIn;
