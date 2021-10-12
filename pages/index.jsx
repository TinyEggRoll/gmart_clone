import * as React from 'react';
import {
    Box,
    Button,
    Container,
    IconButton,
    InputAdornment,
    Link as MUILink,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
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
    const [orderMethod, setOrderMethod] = React.useState('pickup');

    const handleOrderMethod = (event, newMethod) => {
        console.log(newMethod);
        if (newMethod === 'delivery') {
            setOrderMethod('delivery');
        } else {
            setOrderMethod('pickup');
        }
    };

    const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
        '.Mui-selected': {
            backgroundColor: 'orange',
            color: 'white',
        },
        '.Mui-selected:hover': {
            backgroundColor: 'orange',
            color: 'white',
        },
    }));

    const StyledToggleButton = styled(ToggleButton)(() => ({
        ' :hover': {
            color: '#2a9d8f',
            backgroundColor: 'transparent',
        },
    }));

    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bgcolor: 'gray',
                    height: '5rem',
                }}
                maxWidth="false">
                <Box sx={{ width: '15%' }}>
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
                        borderRadius: '.25rem',
                    }}
                    size="small"
                    autoFocus
                    placeholder="Search Products"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <FaSearch color="orange" />
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
                            bgcolor: 'white',
                            color: 'orange',
                        }}
                        variant="contained"
                        startIcon={<FaShoppingCart />}>
                        Cart
                    </Button>
                </Box>
            </Container>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    my: '1rem',
                }}
                maxWidth="xl">
                <IconButton>
                    <AiOutlineAim />
                </IconButton>
                <TextField
                    sx={{
                        minWidth: '30%',
                        bgcolor: 'white',
                        borderRadius: '.25rem',
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
                <StyledToggleButtonGroup
                    sx={{
                        '& :hover': {
                            backgroundColor: '',
                        },
                    }}
                    exclusive
                    value={orderMethod}
                    onChange={handleOrderMethod}>
                    <StyledToggleButton value="delivery">
                        <FaTruck size="1.5rem" />
                        <Typography sx={{ ml: '1rem' }}>DELIVERY</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton sx={{ width: '10rem' }} value="pickup">
                        <FaRegClock size="1.5rem" />
                        <Typography sx={{ ml: '1rem' }}>PICK-UP</Typography>
                    </StyledToggleButton>
                </StyledToggleButtonGroup>
            </Container>
            <Footer />
        </>
    );
};

export default Index;
