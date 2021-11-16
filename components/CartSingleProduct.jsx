import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { FaRegTimesCircle, FaMinus, FaPlus } from 'react-icons/fa';

const CartSingleProduct = () => {
    return (
        <>
            <Box
                sx={{
                    p: '.625rem 1.87rem .625rem 1rem',
                    borderBottom: 'solid 1px #dadada',
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'relative',
                    ':hover': {
                        '& :nth-of-type(3)': {
                            opacity: '1',
                        },
                    },
                }}>
                {/* Image + Description */}
                <Box sx={{ display: 'flex' }}>
                    <Image src="/images/products/neoguri.jpg" width={60} height={60} />
                    <Box sx={{ ml: '.3125rem', maxWidth: '11.25rem' }}>
                        <Typography noWrap gutterBottom>
                            Nongshim Shin Ramyum Multi Nongshim Shin Ramyum Multis
                        </Typography>
                        <Typography variant="caption" color="#505050">
                            5 x 3.59 oz
                        </Typography>
                    </Box>
                </Box>
                {/* Incremental Amount + Price */}
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '.5rem' }}>
                        <IconButton
                            sx={{
                                p: '.25rem',
                                ':hover': {
                                    color: 'primary.main',
                                },
                            }}>
                            <FaMinus style={{ height: '1.0625rem', width: '1.0625rem' }} />
                        </IconButton>
                        <Box
                            sx={{
                                mx: '.25rem',
                                width: '2.5rem',
                                boxShadow: '0 1px 5px rgb(0 0 0 / 20%)',
                                borderRadius: '.25rem',
                                bgcolor: 'backGround.main',
                            }}>
                            <Typography align="center">111</Typography>
                        </Box>
                        <IconButton
                            sx={{
                                p: '.25rem',
                                ':hover': {
                                    color: 'primary.main',
                                },
                            }}>
                            <FaPlus style={{ height: '1.0625rem', width: '1.0625rem' }} />
                        </IconButton>
                    </Box>
                    <Typography
                        sx={{
                            textAlign: 'right',
                        }}>
                        $5.99
                    </Typography>
                </Box>

                {/* Delete Product Button */}
                <Box
                    sx={{
                        position: 'absolute',
                        right: '.125rem',
                        top: '.3125rem',
                        opacity: '0',
                    }}>
                    <IconButton sx={{ p: '0rem' }}>
                        <FaRegTimesCircle fontSize="1.25rem" />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default CartSingleProduct;
