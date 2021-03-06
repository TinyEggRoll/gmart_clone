import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Link as MUILink,
} from '@mui/material';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <>
      <Box sx={{ bgcolor: 'backGround.main' }}>
        <Container
          sx={{
            width: '100%',
          }}
          component="footer"
          maxWidth="xl"
        >
          <Box>
            {/* Top Footer */}
            <Box sx={{ py: '1.5rem' }}>
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
                py: '1rem',
              }}
            >
              {/* Left Side Footer */}
              <Box>
                {/* change color for each hover. */}
                <Button
                  sx={{
                    color: 'text.main',
                    ':hover': {
                      color: 'primary.main',
                    },
                    mr: '1rem',
                  }}
                  startIcon={<FaFacebookSquare />}
                >
                  Facebook
                </Button>
                <Button
                  sx={{
                    color: 'text.main',
                    ':hover': {
                      color: 'primary.main',
                    },
                    mr: '1rem',
                  }}
                  startIcon={<FaInstagram />}
                >
                  Instagram
                </Button>
                <Button
                  sx={{
                    color: 'text.main',
                    ':hover': {
                      color: 'primary.main',
                    },
                  }}
                  startIcon={<FaTwitter />}
                >
                  Twitter
                </Button>
              </Box>

              {/* Right Side Footer */}
              <Typography variant="body2">
                {' ?? '}
                {new Date().getFullYear()}, Super Global Mart Charlotte
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
