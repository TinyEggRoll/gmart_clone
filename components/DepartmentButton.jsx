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

const DepartmentButton = (props) => {
    const { imgSrc, name } = props;
    const depURL = imgSrc.split('/').pop().split('.').slice(0, -1).join('.');

    return (
        <>
            {/* Department Button Display */}
            <NextLink href={`/department/${depURL}`} passHref>
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
                            '& > :nth-child(1)': {
                                transform: 'scale(1.1)',
                                filter: 'brightness(80%)',
                            },
                            '& .MuiTypography-root': {
                                color: 'primary.main',
                            },
                            '& > :nth-child(2)': {
                                height: '6.625rem',
                            },
                        },
                    }}>
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
                        }}>
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
