import * as React from 'react';
import {
    Avatar,
    Button,
    TextField,
    Grid,
    Box,
    Container,
    Typography,
    Link as MUILink,
} from '@mui/material';
import { FcLock } from 'react-icons/fc';
import NextLink from 'next/link';
import Footer from '../components/Footer';

const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('yee haw');
    };

    return (
        <>
            {/* Main Content */}
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
                        Sign Up
                    </Typography>

                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Confirm Password"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                    </Box>
                    <Typography mt={4} variant="body2">
                        Already have an account?
                        <NextLink href="/login" passHref>
                            <MUILink ml={1} variant="body2">
                                Log in
                            </MUILink>
                        </NextLink>
                    </Typography>
                </Box>
            </Container>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default SignUp;
