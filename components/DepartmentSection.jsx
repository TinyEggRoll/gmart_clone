import * as React from 'react';
import {
    Box,
    Button,
    Checkbox,
    Container,
    Drawer,
    IconButton,
    InputAdornment,
    Link as MUILink,
    Modal,
    Popover,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
} from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';

const DepartmentSection = (props) => {
    const { imgSrc, department } = props;
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
                <Image src={imgSrc} width={30} height={30} alt="logo" />
                <NextLink href="/" passHref>
                    <MUILink
                        sx={{
                            ml: '1rem',
                            color: 'text.main',
                            position: 'relative',
                            display: 'inline-block',
                        }}>
                        {department}
                    </MUILink>
                </NextLink>
            </Box>
        </>
    );
};

export default DepartmentSection;
