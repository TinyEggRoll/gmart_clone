import * as React from 'react';
import { Box, Link as MUILink } from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';

const DepartmentSection = (props) => {
    const { iconSrc, name } = props;

    const depURL = iconSrc.split('/').pop().split('.').slice(0, -1).join('.');
    return (
        <>
            <Box
                sx={{
                    ml: '0rem',
                    display: 'flex',
                    alignItems: 'center',
                    my: '.625rem',
                    ':hover': {
                        '& .MuiLink-root': {
                            color: 'primary.main',
                        },
                        '& .MuiLink-root::before': {
                            visibility: 'visible',
                            width: '100%',
                        },
                    },
                    '& .MuiLink-root::before': {
                        content: '""',
                        position: 'absolute',
                        width: '0',
                        height: '2px',
                        bottom: '0',
                        left: '0',
                        bgcolor: 'primary.main',
                        visibility: 'hidden',
                        transition: 'all 0.3s ease-in-out',
                    },
                }}>
                <Image src={iconSrc} width={30} height={30} alt="logo" />
                <NextLink href={`/department/${depURL}`} passHref>
                    <MUILink
                        sx={{
                            ml: '1rem',
                            color: 'text.main',
                            position: 'relative',
                        }}>
                        {name}
                    </MUILink>
                </NextLink>
            </Box>
        </>
    );
};

export default DepartmentSection;
