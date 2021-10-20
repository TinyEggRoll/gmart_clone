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
import Image from 'next/image';

const FilterButton = (props) => {
    const { filterName } = props;
    return (
        <>
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
        </>
    );
};

export default FilterButton;
