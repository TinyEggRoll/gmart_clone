import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { FaRegTimesCircle, FaMinus, FaPlus } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import { cartActions } from '../redux/reducers/cart';
import { NextPage } from 'next';

interface Props {
  index: number;
}

const SingleProductCart: NextPage<Props> = ({ index }) => {
  const dispatch = useAppDispatch();
  const { productID, totalPrice, pic, price, title, unit, quantity } =
    useAppSelector((state) => state.cart.cartList[index]);

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem({ productID, price }));
  };

  const minusItemHandler = () => {
    if (quantity === 1) {
      dispatch(cartActions.removeItem({ productID, price }));
    } else {
      dispatch(cartActions.minusItem({ productID, price }));
    }
  };

  const plusItemHandler = () => {
    dispatch(cartActions.plusItem({ productID, price }));
  };

  const singleCartProductStyle = {
    backgroundImage: `${pic}`,
    width: '60px',
    height: '60px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // Updates backgroundImage style by inputting 'url()' if the pic prop is from https/cdn
  if (pic.indexOf('https://') === 0) {
    singleCartProductStyle.backgroundImage = `url(${pic})`;
  }

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
        }}
      >
        {/* Image + Description */}
        <Box sx={{ display: 'flex' }}>
          <Box sx={singleCartProductStyle} />
          <Box sx={{ ml: '.3125rem', maxWidth: '11.25rem' }}>
            <Typography noWrap gutterBottom>
              {title}
            </Typography>
            <Typography variant="caption" color="#505050">
              {unit}
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
              }}
              onClick={minusItemHandler}
            >
              <FaMinus style={{ height: '1.0625rem', width: '1.0625rem' }} />
            </IconButton>
            <Box
              sx={{
                mx: '.25rem',
                width: '2.5rem',
                boxShadow: '0 1px 5px rgb(0 0 0 / 20%)',
                borderRadius: '.25rem',
                bgcolor: 'backGround.main',
              }}
            >
              <Typography align="center">{quantity}</Typography>
            </Box>
            <IconButton
              sx={{
                p: '.25rem',
                ':hover': {
                  color: 'primary.main',
                },
              }}
              onClick={plusItemHandler}
            >
              <FaPlus style={{ height: '1.0625rem', width: '1.0625rem' }} />
            </IconButton>
          </Box>
          <Typography
            sx={{
              textAlign: 'right',
            }}
          >
            ${totalPrice}
          </Typography>
        </Box>

        {/* Delete Product Button */}
        <Box
          sx={{
            position: 'absolute',
            right: '.125rem',
            top: '.3125rem',
            opacity: '0',
          }}
        >
          <IconButton sx={{ p: '0rem' }} onClick={removeItemHandler}>
            <FaRegTimesCircle fontSize="1.25rem" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default SingleProductCart;
