import * as React from 'react';
import { Chip } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

interface Props {
  filterName: string;
}

const FilterButton: NextPage<Props> = ({ filterName }) => {
  const router = useRouter();
  // Removes ampersand symbol, then any white space for underscores, and finally changes to all lower case
  const departmentURL = filterName
    .replace(/&/g, '')
    .replace(/ +/g, '_')
    .toLowerCase();
  return (
    <>
      <NextLink
        // Removes & symbols, removes white space with underscores, and removes uppercase letters
        href={`/department/${router.query.department}/category/${departmentURL}`}
      >
        {/* Checks if the chip name matches the end URL, if true, then make the chip highlighted */}
        {departmentURL === router.query.category ? (
          <Chip
            sx={{
              mr: '1rem',
              mb: '1rem',
              borderRadius: '.625rem',
              p: '1rem .3125rem',
              color: 'textWhite.main',
              bgcolor: 'primary.main',
              ':hover': {
                color: 'textWhite.main',
                bgcolor: 'primary.main',
              },
            }}
            label={filterName}
            clickable
          />
        ) : (
          <Chip
            sx={{
              mr: '1rem',
              mb: '1rem',
              borderRadius: '.625rem',
              p: '1rem .3125rem',
              '&.MuiChip-clickable:hover': {
                color: 'textWhite.main',
                bgcolor: 'primary.main',
              },
            }}
            label={filterName}
            clickable
            variant="outlined"
          />
        )}
      </NextLink>
    </>
  );
};

export default FilterButton;
