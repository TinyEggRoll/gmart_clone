import * as React from 'react';
import {
  Container,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from '@mui/material';
import { FaInfoCircle, FaRegClock, FaTruck } from 'react-icons/fa';
import { AiOutlineAim } from 'react-icons/ai';
import { NextPage } from 'next';

const BottomNavBar: NextPage = () => {
  const [orderMethod, setOrderMethod] = React.useState('pickup');
  const handleOrderMethod = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newMethod: string
  ) => {
    if (newMethod !== null) {
      setOrderMethod(newMethod);
    }
  };

  const styles = {
    width: '10rem',
  };

  return (
    <>
      {/* Bottom Half of Nav Bar Header */}
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          py: '.625rem',
        }}
        maxWidth="xl"
      >
        <IconButton sx={{ color: 'primary.main', pb: '1rem' }}>
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
          placement="right"
        >
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
          onChange={handleOrderMethod}
        >
          <ToggleButton
            sx={{
              ...styles,
            }}
            value="delivery"
          >
            <FaTruck size="1.5rem" />
            <Typography sx={{ ml: '1rem' }}>DELIVERY</Typography>
          </ToggleButton>
          <ToggleButton
            sx={{
              ...styles,
            }}
            value="pickup"
          >
            <FaRegClock size="1.5rem" />
            <Typography sx={{ ml: '1rem' }}>PICK-UP</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Container>
    </>
  );
};

export default BottomNavBar;
