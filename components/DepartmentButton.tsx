import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import NextLink from 'next/link';
import { NextPage } from 'next';

interface Props {
  imgSrc: string;
  name: string;
}

const DepartmentButton: NextPage<Props> = ({ imgSrc, name }) => {
  // Removes all apostrophes, then all ampersand symbols, then replace all empty spaces with underscores,
  // and finally removes uppercase characters
  const departmentURL = name
    .replace(/'/, '')
    .replace(/&/g, '')
    .replace(/ +/g, '_')
    .toLowerCase();
  return (
    <>
      {/* Department Button Display */}
      <NextLink href={`/department/${departmentURL}`}>
        <Button
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 'calc(20% - 1.875rem)',
            my: '1rem',
            p: '0rem',
            borderRadius: '1rem',
            overflow: 'hidden',
            ':hover': {
              '& > :nth-of-type(1)': {
                transform: 'scale(1.1)',
                filter: 'brightness(80%)',
              },
              '& .MuiTypography-root': {
                color: 'primary.main',
              },
              '& > :nth-of-type(2)': {
                height: '6.625rem',
              },
            },
          }}
        >
          {/* Top Department Box */}
          <Box
            sx={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '16.25rem',
              width: '100%',
              overflow: 'hidden',
              transition: '.3s',
            }}
          />
          {/* Bottom Department Box */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '4.365rem',
              bgcolor: 'textWhite.main',
              transition: '.3s',
              textTransform: 'none',
            }}
          >
            {/* Department Name */}
            <Typography sx={{ color: 'text.main' }} variant="h6">
              {name}
            </Typography>
          </Box>
        </Button>
      </NextLink>
    </>
  );
};

export default DepartmentButton;
