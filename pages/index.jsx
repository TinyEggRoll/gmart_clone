import * as React from 'react';
import {
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    InputAdornment,
    Link as MUILink,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
} from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';
import {
    FaSearch,
    FaUserCircle,
    FaShoppingCart,
    FaInfoCircle,
    FaRegClock,
    FaTruck,
} from 'react-icons/fa';
import { AiOutlineAim } from 'react-icons/ai';

import Footer from '../components/Footer';

const Index = () => {
    const [orderMethod, setOrderMethod] = React.useState();
    const [open, setOpen] = React.useState();

    const styles = {
        width: '10rem',
    };

    const handleOrderMethod = (event, newMethod) => {
        console.log(newMethod);
        if (newMethod !== null) {
            setOrderMethod(newMethod);
        }
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bgcolor: 'secondary.main',
                    height: '5rem',
                    boxShadow: '0 3px 5px rgb(0 0 0 / 40%)',
                }}
                maxWidth="false">
                <Box sx={{ width: '15%' }}>
                    <Button onClick={handleDrawerOpen} />
                    <NextLink href="/">
                        <IconButton
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                                p: '0',
                            }}>
                            <Image
                                src="/images/logo.png"
                                width={170}
                                height={70}
                                alt="logo"
                            />
                        </IconButton>
                    </NextLink>
                </Box>
                <TextField
                    sx={{
                        width: '65%',
                        bgcolor: 'white',
                    }}
                    size="small"
                    autoFocus
                    placeholder="Search Products"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <FaSearch />
                            </InputAdornment>
                        ),
                    }}
                />
                <Box sx={{ textAlign: 'end', width: '20%' }}>
                    <Button
                        sx={{ color: 'white', mr: '1.5rem' }}
                        endIcon={<FaUserCircle size="2rem" />}>
                        Profile
                    </Button>
                    <Button
                        sx={{
                            color: 'primary.main',
                            bgcolor: 'white',
                            '&:hover': {
                                bgcolor: 'white',
                            },
                        }}
                        variant="contained"
                        startIcon={<FaShoppingCart />}>
                        Cart
                    </Button>
                    <Drawer
                        sx={{
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: '25rem',
                            },
                        }}
                        open={open}
                        anchor="right">
                        <FaShoppingCart
                            sx={{
                                color: 'primary.main',
                                bgcolor: 'white',
                            }}
                            color="red"
                        />
                        <Typography>hi there</Typography>
                    </Drawer>
                </Box>
            </Container>
            {/* Bottom Half of Nav Bar Header */}
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    my: '1rem',
                }}
                maxWidth="xl">
                <IconButton>
                    <AiOutlineAim color="orange" />
                </IconButton>
                <TextField
                    sx={{
                        minWidth: '30%',
                        bgcolor: 'white',
                    }}
                    size="small"
                    placeholder="Pick up at: Enter your zip code or address"
                />
                <Tooltip
                    sx={{ pb: '1rem' }}
                    title="Delivery is not available to your address"
                    arrow
                    placement="right">
                    <IconButton size="small">
                        <FaInfoCircle />
                    </IconButton>
                </Tooltip>
                <ToggleButtonGroup
                    sx={{
                        '.MuiToggleButton-root.Mui-selected': {
                            bgcolor: 'primary.main',
                            color: 'white',
                        },
                        '.MuiToggleButton-root.Mui-selected:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                        },
                        '.MuiToggleButton-root:hover': {
                            bgcolor: 'transparent',
                            color: 'primary.main',
                        },
                    }}
                    exclusive
                    value={orderMethod}
                    onChange={handleOrderMethod}>
                    <ToggleButton
                        sx={{
                            ...styles,
                        }}
                        value="delivery">
                        <FaTruck size="1.5rem" />
                        <Typography sx={{ ml: '1rem' }}>DELIVERY</Typography>
                    </ToggleButton>
                    <ToggleButton
                        sx={{
                            ...styles,
                        }}
                        value="pickup">
                        <FaRegClock size="1.5rem" />
                        <Typography sx={{ ml: '1rem' }}>PICK-UP</Typography>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Container>
            <Footer />
        </>
    );
};

export default Index;
