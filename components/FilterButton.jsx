import * as React from 'react';
import {
    Box,
    Button,
    Checkbox,
    Chip,
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
import { useRouter } from 'next/router';
import Image from 'next/image';

const FilterButton = (props) => {
    const { filterName } = props;
    const router = useRouter();

    return (
        <>
            {filterName === 'All' ? (
                <NextLink href={`/department/${filterName}`}>
                    <Chip
                        sx={{
                            mr: '1rem',
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
                        href="#"
                        clickable
                    />
                </NextLink>
            ) : (
                <NextLink href={`/category/${filterName}`}>
                    <Chip
                        sx={{
                            mr: '1rem',
                            borderRadius: '.625rem',
                            p: '1rem .3125rem',
                            ':hover': {
                                color: 'textWhite.main',
                                bgcolor: 'primary.main',
                            },
                        }}
                        label={filterName}
                        href="#"
                        clickable
                    />
                </NextLink>
            )}
        </>
    );
};

export default FilterButton;
