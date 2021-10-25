import * as React from 'react';
import { Box, Link as MUILink } from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const DepartmentSection = (props) => {
    const { iconSrc, name } = props;
    const router = useRouter();
    // Removes all ampersand symbols, then replace all empty spaces with underscores,
    // and finally removes uppercase characters
    const departmentURL = name.replace(/&/g, '').replace(/ +/g, '_').toLowerCase();
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
                <NextLink href={`/department/${departmentURL}`} passHref>
                    {/* Checks if the department matches the end URL, if true, then make the department link highlighted */}
                    {departmentURL === router.query.department ? (
                        <MUILink
                            sx={{
                                ml: '1rem',
                                color: 'primary.main',
                                position: 'relative',
                            }}>
                            {name}
                        </MUILink>
                    ) : (
                        <MUILink
                            sx={{
                                ml: '1rem',
                                color: 'text.main',
                                position: 'relative',
                            }}>
                            {name}
                        </MUILink>
                    )}
                </NextLink>
            </Box>
        </>
    );
};

export default DepartmentSection;
