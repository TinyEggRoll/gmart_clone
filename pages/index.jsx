import * as React from 'react';
import {
    Box,
    Button,
    Checkbox,
    Container,
    Drawer,
    FormControlLabel,
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
import {
    FaSearch,
    FaUserCircle,
    FaInfoCircle,
    FaRegClock,
    FaTruck,
} from 'react-icons/fa';
import {
    AiOutlineAim,
    AiOutlineClose,
    AiOutlineShoppingCart,
} from 'react-icons/ai';

import Footer from '../components/Footer';

const Index = () => {
    const [orderMethod, setOrderMethod] = React.useState('pickup');
    const [salutations, setSalutations] = React.useState('mrs');
    const [open, setOpen] = React.useState();
    const [open1, setOpen1] = React.useState();
    const [anchor, setAnchor] = React.useState(null);

    const handleClick = (event) => {
        setAnchor(event.currentTarget);
        // setAnchor(true);
        console.log('this is event target', event.currentTarget);
    };

    const style = {
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: 'solid 1px rgba(0, 0, 0, .2)',
        width: '27rem',
        borderRadius: '.375rem',
        boxShadow: '0 5px 15px rgb(0 0 0 / 50%)',
    };

    const styles = {
        width: '10rem',
    };

    const styles2 = {
        fontWeight: '500',
    };

    const handleOrderMethod = (event, newMethod) => {
        if (newMethod !== null) {
            setOrderMethod(newMethod);
        }
    };

    const handleSalutations = (event, newSalutation) => {
        if (newSalutation !== null) {
            setSalutations(newSalutation);
        }
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
                    // Consider changing the padding left and right
                    // pl: ['null', 'null', 'null', '1rem', '1rem'],
                    // pr: ['null', 'null', 'null', '1rem', '1rem'],
                    // backgroundColor: ['null', 'null', 'null', 'red', 'green'],
                }}
                maxWidth="xl">
                <Box sx={{ width: '15%' }}>
                    <NextLink href="/">
                        <IconButton
                            sx={{
                                ':hover': {
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
                            <InputAdornment
                                sx={{ color: 'primary.main' }}
                                position="end">
                                <FaSearch />
                            </InputAdornment>
                        ),
                    }}
                />
                <Box sx={{ textAlign: 'end', width: '20%' }}>
                    <Button
                        sx={{ color: 'white', mr: '1.5rem' }}
                        endIcon={<FaUserCircle size="2rem" />}
                        onClick={handleClick}>
                        Profile
                    </Button>
                    <Popover
                        open={Boolean(anchor)}
                        anchorEl={anchor}
                        onClose={() => setAnchor(null)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>
                        <Box
                            sx={{
                                width: '8rem',
                                display: 'flex',
                                flexDirection: 'column',
                                p: '.5rem',
                            }}>
                            <Button
                                sx={{
                                    color: 'text.main',
                                    mb: '1rem',
                                    ':hover': {
                                        color: 'primary.main',
                                        bgcolor: 'transparent',
                                    },
                                }}>
                                Sign In
                            </Button>

                            <Button
                                sx={{
                                    color: 'text.main',
                                    ':hover': {
                                        color: 'primary.main',
                                        bgcolor: 'transparent',
                                    },
                                }}
                                onClick={() => setOpen1(true)}>
                                Sign Up
                            </Button>
                            <Modal open={open1} onClose={() => setOpen1(false)}>
                                <Box sx={style}>
                                    {/* Top Heading */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            p: '1rem',
                                            borderBottom: 'solid 1px #e5e5e5',
                                        }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography
                                                variant="h5"
                                                sx={{ fontWeight: '600' }}>
                                                Let&apos;s start!
                                            </Typography>
                                        </Box>
                                        <IconButton
                                            onClick={() => setOpen1(false)}>
                                            <AiOutlineClose />
                                        </IconButton>
                                    </Box>
                                    {/* Main Content */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            mt: '.5rem',
                                            p: '.625rem 1rem',
                                        }}
                                        noValidate
                                        component="form">
                                        <Box>
                                            <Typography sx={{ ...styles2 }}>
                                                Salutation
                                            </Typography>
                                            <ToggleButtonGroup
                                                sx={{
                                                    '& .MuiToggleButton-root.Mui-selected':
                                                        {
                                                            bgcolor:
                                                                'primary.main',
                                                            color: 'white',
                                                        },
                                                    '& .MuiToggleButton-root.Mui-selected:hover':
                                                        {
                                                            bgcolor:
                                                                'primary.main',
                                                            color: 'white',
                                                        },
                                                    '& .MuiToggleButton-root:hover':
                                                        {
                                                            bgcolor:
                                                                'transparent',
                                                            color: 'primary.main',
                                                        },
                                                }}
                                                exclusive
                                                value={salutations}
                                                onChange={handleSalutations}>
                                                <ToggleButton
                                                    sx={{
                                                        color: 'text.main',
                                                        fontSize: '1rem',
                                                        textTransform: 'none',
                                                    }}
                                                    value="unknown">
                                                    Unknown
                                                </ToggleButton>
                                                <ToggleButton
                                                    sx={{
                                                        color: 'text.main',
                                                        fontSize: '1rem',
                                                        textTransform: 'none',
                                                    }}
                                                    value="mr">
                                                    Mr
                                                </ToggleButton>
                                                <ToggleButton
                                                    sx={{
                                                        color: 'text.main',
                                                        fontSize: '1rem',
                                                        textTransform: 'none',
                                                    }}
                                                    value="mrs">
                                                    Mrs
                                                </ToggleButton>
                                                <ToggleButton
                                                    sx={{
                                                        color: 'text.main',
                                                        fontSize: '1rem',
                                                        textTransform: 'none',
                                                    }}
                                                    value="ms">
                                                    Ms
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: '1rem',
                                                width: '100%',
                                            }}>
                                            <Typography sx={{ ...styles2 }}>
                                                First Name
                                            </Typography>
                                            <TextField
                                                sx={{
                                                    '.MuiFilledInput-root': {
                                                        height: '2.6rem',
                                                    },
                                                    '.MuiFilledInput-input': {
                                                        p: '.75rem',
                                                    },
                                                    '.MuiFilledInput-root.Mui-focused':
                                                        {
                                                            boxShadow:
                                                                'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)',
                                                        },
                                                }}
                                                variant="filled"
                                                fullWidth
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                            />
                                        </Box>
                                        <Box sx={{ marginTop: '1rem' }}>
                                            <Typography sx={{ ...styles2 }}>
                                                Last Name
                                            </Typography>
                                            <TextField
                                                sx={{
                                                    '.MuiFilledInput-root': {
                                                        height: '2.6rem',
                                                    },
                                                    '.MuiFilledInput-input': {
                                                        p: '.75rem',
                                                    },
                                                    '.MuiFilledInput-root.Mui-focused':
                                                        {
                                                            boxShadow:
                                                                'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)',
                                                        },
                                                }}
                                                variant="filled"
                                                fullWidth
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                            />
                                        </Box>
                                        <Box sx={{ marginTop: '1rem' }}>
                                            <Typography sx={{ ...styles2 }}>
                                                E-mail
                                            </Typography>
                                            <TextField
                                                sx={{
                                                    '.MuiFilledInput-root': {
                                                        height: '2.6rem',
                                                    },
                                                    '.MuiFilledInput-input': {
                                                        p: '.75rem',
                                                    },
                                                    '.MuiFilledInput-root.Mui-focused':
                                                        {
                                                            boxShadow:
                                                                'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)',
                                                        },
                                                }}
                                                variant="filled"
                                                fullWidth
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                            />
                                        </Box>
                                        <Box sx={{ marginTop: '1rem' }}>
                                            <Typography sx={{ ...styles2 }}>
                                                Password
                                            </Typography>
                                            <TextField
                                                sx={{
                                                    '.MuiFilledInput-root': {
                                                        height: '2.6rem',
                                                    },
                                                    '.MuiFilledInput-input': {
                                                        p: '.75rem',
                                                    },
                                                    '.MuiFilledInput-root.Mui-focused':
                                                        {
                                                            boxShadow:
                                                                'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)',
                                                        },
                                                }}
                                                variant="filled"
                                                fullWidth
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                            />
                                        </Box>
                                        <Box sx={{ marginTop: '1rem' }}>
                                            <Typography sx={{ ...styles2 }}>
                                                Confirm Password
                                            </Typography>
                                            <TextField
                                                sx={{
                                                    '.MuiFilledInput-root': {
                                                        height: '2.6rem',
                                                    },
                                                    '.MuiFilledInput-input': {
                                                        p: '.75rem',
                                                    },
                                                    '.MuiFilledInput-root.Mui-focused':
                                                        {
                                                            boxShadow:
                                                                'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)',
                                                        },
                                                }}
                                                variant="filled"
                                                fullWidth
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                            />
                                        </Box>
                                        {/* Check Boxes For Agreement */}
                                        <Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginTop: '1rem',
                                                }}>
                                                <Checkbox size="small" />
                                                <Typography variant="caption">
                                                    Agree to{' '}
                                                    <MUILink>
                                                        terms &#38; conditions{' '}
                                                    </MUILink>
                                                    and{' '}
                                                    <MUILink>
                                                        privacy policy
                                                    </MUILink>
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}>
                                                <Checkbox
                                                    defaultChecked
                                                    size="small"
                                                />
                                                <Typography variant="caption">
                                                    Email me exclusive offers,
                                                    sales alerts &#38; more
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Button
                                            sx={{
                                                color: 'white',
                                                bgcolor: 'primary.main',
                                                my: '1rem',
                                                textTransform: 'none',
                                            }}>
                                            Sign Up
                                        </Button>
                                    </Box>
                                    <Box
                                        sx={{
                                            borderTop: 'solid 1px #e5e5e5',
                                            textAlign: 'center',
                                            py: '1.25rem',
                                            bgcolor: '#f2f2f2',
                                        }}>
                                        <MUILink>
                                            Already have an account?
                                        </MUILink>
                                    </Box>
                                </Box>
                            </Modal>
                        </Box>
                    </Popover>
                    <Button
                        sx={{
                            color: 'primary.main',
                            bgcolor: 'white',
                            '&:hover': {
                                bgcolor: 'white',
                            },
                        }}
                        variant="contained"
                        onClick={() => setOpen(true)}
                        startIcon={<AiOutlineShoppingCart />}>
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
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 15%)',
                                    padding: '1.2rem 1.25rem',
                                }}>
                                <Box sx={{ display: 'flex' }}>
                                    <AiOutlineShoppingCart
                                        style={{
                                            color: 'black',
                                            paddingRight: '1rem',
                                        }}
                                        size="2rem"
                                    />
                                    <Typography fontWeight="350" variant="h5">
                                        Your Cart
                                    </Typography>
                                </Box>
                                <IconButton onClick={() => setOpen(false)}>
                                    <AiOutlineClose />
                                </IconButton>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    height: '50vh',
                                    mt: '5rem',
                                    p: '10vh 1.25rem',
                                }}>
                                <Image
                                    src="/images/groceries.svg"
                                    width={150}
                                    height={292}
                                    alt="groceries"
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        mt: '5rem',
                                    }}>
                                    <Typography variant="h5">
                                        Your cart is empty
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: '1.5rem', color: 'white' }}>
                                        Start shopping
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
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
                <IconButton sx={{ color: 'primary.main' }}>
                    <AiOutlineAim />
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
