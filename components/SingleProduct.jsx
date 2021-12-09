import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FaSearchPlus, FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/reducers/cart';

const SingleProduct = (props) => {
    const { productID, pic, price, title, unit, oldPrice = null } = props;
    const dispatch = useDispatch();
    const { cartList } = useSelector((state) => state.cart);
    const productIndex = cartList.findIndex((product) => product.productID === productID);

    const singleProductStyle = {
        backgroundImage: `${pic}`,
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
    };

    // Updates backgroundImage style by inputting 'url()' if the pic prop is from https/cdn
    if (pic.indexOf('https://') === 0) {
        singleProductStyle.backgroundImage = `url(${pic})`;
    }

    const addToCartHandler = () => {
        dispatch(
            cartActions.addItem({
                productID,
                pic,
                price,
                title,
                unit,
                quantity: 1,
                totalPrice: price,
            })
        );
    };

    const minusItemHandler = () => {
        if (cartList[productIndex].quantity === 1) {
            dispatch(cartActions.removeItem({ productID, price }));
        } else {
            dispatch(cartActions.minusItem({ productID, price }));
        }
    };

    const plusItemHandler = () => {
        dispatch(cartActions.plusItem({ productID, price }));
    };

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
                        bgcolor: 'textWhite.main',
                        '& > div:nth-of-type(2)': {
                            '& > div:nth-of-type(1)': {
                                '& > h6:nth-of-type(1)': {
                                    color: 'primary.main',
                                },
                            },
                            '& > p:nth-of-type(1)': {
                                color: 'primary.main',
                            },
                        },
                    },
                }}>
                {/* Top Picture */}
                <Box sx={singleProductStyle}>
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
                        {/* Hidden Center | On Hover -> Display Zoom In Icon */}
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
                        {/* Hidden Bottom | On Hover -> Add to Cart Button */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '0',
                                width: '100%',
                                transition: 'all 0.2s',
                                p: '0rem',
                                boxShadow: '0px 2px 8px rgb(0 0 0 / 20%)',
                            }}>
                            {/* If the product does not exist in cart, on hover display Add to Cart */}
                            {productIndex === -1 ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        bgcolor: 'primary.main',
                                        width: '100%',
                                        borderRadius: '.375rem',
                                        height: '2.5rem',
                                        textTransform: 'none',
                                        ':hover': {
                                            color: 'textWhite.main',
                                            bgcolor: 'primary.dark',
                                        },
                                    }}
                                    onClick={addToCartHandler}>
                                    <Typography color="textWhite.main" variant="body2">
                                        Add to cart
                                    </Typography>
                                </Box>
                            ) : (
                                // If this product exists in the cart, then display minus, add, and quantity
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        border: '1px solid #ef6325',
                                        borderRadius: '.375rem',
                                        bgcolor: 'textWhite.main',
                                    }}>
                                    <Box
                                        sx={{
                                            color: 'primary.main',
                                            flex: '.2',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        onClick={minusItemHandler}>
                                        {cartList[productIndex].quantity === 1 ? (
                                            <FaTrash
                                                style={{ height: '1.0625rem', width: '1.0625rem' }}
                                            />
                                        ) : (
                                            <FaMinus
                                                style={{ height: '1.0625rem', width: '1.0625rem' }}
                                            />
                                        )}
                                    </Box>
                                    <Typography
                                        sx={{ flex: '.8', textAlign: 'center', p: '.5rem' }}>
                                        {cartList[productIndex].quantity}
                                    </Typography>
                                    <Box
                                        sx={{
                                            color: 'primary.main',
                                            flex: '.2',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        onClick={plusItemHandler}>
                                        <FaPlus
                                            style={{ height: '1.0625rem', width: '1.0625rem' }}
                                        />
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Box>
                    {/* If the item is in cart, display quantity in top right corner of product image */}
                    {productIndex !== -1 && (
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '2.625rem',
                                height: '1.5rem',
                                borderRadius: '0 .3125rem',
                                bgcolor: 'primary.main',
                                top: '1px',
                                right: '1px',
                            }}>
                            <Typography sx={{ color: 'textWhite.main', textAlign: 'center' }}>
                                {cartList[productIndex].quantity}
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Bottom Product Description -> Price, Title, Unit Size */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'flex-start',
                        mt: '1rem',
                    }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {oldPrice !== null && (
                            <Box
                                sx={{
                                    bgcolor: '#EA4E4E',
                                    borderRadius: '2px',
                                    color: 'textWhite.main',
                                    p: '.125rem .5rem',
                                }}>
                                <Typography sx={{ textDecoration: 'line-through' }} variant="body2">
                                    &#36;{oldPrice}
                                </Typography>
                            </Box>
                        )}
                        <Typography sx={{ ml: '.25rem' }} variant="h6">
                            &#36;{price}
                        </Typography>
                        <Typography sx={{ mt: '.25rem' }} variant="caption">
                            / each
                        </Typography>
                    </Box>
                    {oldPrice !== null && (
                        <Typography
                            sx={{
                                color: '#DC1313',
                                fontWeight: '500',
                            }}
                            variant="caption">
                            Save $
                            {(Math.round((oldPrice - price + Number.EPSILON) * 100) / 100).toFixed(
                                2
                            )}
                        </Typography>
                    )}
                    <Typography gutterBottom variant="body2">
                        {title}
                    </Typography>
                    <Typography variant="caption" color="#505050">
                        {unit}
                    </Typography>
                </Box>
            </Button>
        </>
    );
};

export default SingleProduct;
