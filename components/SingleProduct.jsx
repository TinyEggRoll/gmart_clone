import * as React from 'react';
import { Button, Chip, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, IconButton } from '@mui/system';
import { FaSearchPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../redux/reducers/counter';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.counter);
    const addProductToCartHandler = () => {
        dispatch(counterActions.increment());
    };

    console.log(count);
    return (
        <>
            <Button
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '20%',
                    border: 'solid 1px #f8f8f8',
                    bgcolor: 'textWhite.main',
                    color: 'text.main',
                    overflow: 'hidden',
                    textTransform: 'none',
                    textAlign: 'left',
                    p: '.625rem',
                    transition: 'all 0.3s',
                    ':hover': {
                        '& .MuiTypography-h6': {
                            color: 'primary.main',
                        },
                        '& .MuiTypography-body2': {
                            color: 'primary.main',
                        },
                        bgcolor: 'textWhite.main',
                    },
                }}>
                {/* Top Picture */}
                <Box
                    sx={{
                        backgroundImage: `url(/images/products/neoguri.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '200px',
                        height: '200px',
                        position: 'relative',
                        ':hover': {
                            '& > :nth-of-type(1) ': {
                                opacity: '1',
                            },
                            boxShadow: 'inset 0 0 0 100px rgba(255, 255, 255, 0.7)',
                        },
                    }}>
                    {/* Hidden */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            opacity: '0',
                            width: '200px',
                            height: '200px',
                        }}>
                        {/* Hidden Center | Zoom In Icon Button */}
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Box
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    bgcolor: 'textWhite.main',
                                    color: 'primary.main',
                                    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 21%)',
                                    borderRadius: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    ':hover': {
                                        '& :nth-of-type(1)': {
                                            fontSize: '1.5rem',
                                        },
                                    },
                                }}>
                                <FaSearchPlus fontSize="1.2rem" />
                            </Box>
                        </Box>
                        {/* Hidden Bottom | Add to Cart Button */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '0',
                                width: '100%',
                                transition: 'all 0.2s',
                                boxShadow: '0px 2px 8px rgb(0 0 0 / 20%)',
                            }}>
                            <Button
                                sx={{
                                    textAlign: 'center',
                                    bgcolor: 'primary.main',
                                    color: 'textWhite.main',
                                    width: '100%',
                                    textTransform: 'none',
                                    ':hover': {
                                        bgcolor: 'primary.dark',
                                    },
                                }}
                                onClick={addProductToCartHandler}>
                                Add to cart
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Bottom Description */}
                <Box
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h6">
                            $6.99
                        </Typography>
                        <Typography variant="caption">/ each</Typography>
                    </Box>
                    <Typography gutterBottom variant="body2">
                        Indomie Mi Goreng Fried Noodle Case
                    </Typography>
                    <Typography variant="caption" color="#505050">
                        5 x 3.59 oz
                    </Typography>
                </Box>
            </Button>
        </>
    );
};

export default SingleProduct;
