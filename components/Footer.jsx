import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Link as MUILink,
} from '@mui/material';

import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <Container
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                }}
                component="footer"
                maxWidth="xl">
                <Box>
                    {/* Top Footer */}
                    <Box sx={{ pb: '1.5rem' }}>
                        <MUILink sx={{ mr: '2rem', color: 'text.main' }}>
                            Terms of Use
                        </MUILink>
                        <MUILink sx={{ color: 'text.main' }}>Privacy</MUILink>
                    </Box>

                    {/* Bottom Footer */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderTop: 'solid .05rem gray',
                            py: '.5rem',
                        }}>
                        {/* Left Side Footer */}
                        <Box sx={{}}>
                            {/* change color for each hover. */}
                            <Button
                                sx={{
                                    ':hover': {
                                        color: 'primary.main',
                                    },
                                    mr: '1rem',
                                }}
                                startIcon={<FaFacebookSquare />}
                                color="text">
                                Facebook
                            </Button>
                            <Button
                                sx={{
                                    ':hover': {
                                        color: 'primary.main',
                                    },
                                    mr: '1rem',
                                }}
                                startIcon={<FaInstagram />}
                                color="text">
                                Instagram
                            </Button>
                            <Button
                                sx={{
                                    ':hover': {
                                        color: 'primary.main',
                                    },
                                }}
                                startIcon={<FaTwitter />}
                                color="text">
                                Twitter
                            </Button>
                        </Box>

                        {/* Right Side Footer */}
                        <Typography variant="body2">
                            {' © '}
                            {new Date().getFullYear()}, Super Global Mart
                            Charlotte
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Footer;