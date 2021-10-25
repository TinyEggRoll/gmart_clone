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
import { FaSearch, FaUserCircle, FaInfoCircle, FaRegClock, FaTruck } from 'react-icons/fa';
import { AiOutlineAim, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';

import Footer from '../components/Footer';
import TopNavBar from '../components/TopNavBar';
import BottomNavBar from '../components/BottomNavBar';
import DepartmentSection from '../components/DepartmentSection';
import FilterButton from '../components/FilterButton';
import DepartmentButton from '../components/DepartmentButton';

const Index = () => {
    const arrayOfDepartments = [
        {
            iconSrc: '/images/department_icons/alcohol.svg',
            name: 'Alcohol',
            imgSrc: '/images/department_images/alcohol.png',
        },
        {
            iconSrc: '/images/department_icons/beverage.svg',
            name: 'Beverage',
            imgSrc: '/images/department_images/beverage.jpeg',
        },
        {
            iconSrc: '/images/department_icons/bread_bakery.svg',
            name: 'Bread & Bakery',
            imgSrc: '/images/department_images/bread_bakery.jpeg',
        },
        {
            iconSrc: '/images/department_icons/canned_products.svg',
            name: 'Canned Products',
            imgSrc: '/images/department_images/canned_products.jpeg',
        },
        {
            iconSrc: '/images/department_icons/cooking_wine_oil_vinegar.svg',
            name: 'Cooking Wine & Oil & Vinegar',
            imgSrc: '/images/department_images/cooking_wine_oil_vinegar.jpg',
        },
        {
            iconSrc: '/images/department_icons/dairy_eggs.svg',
            name: 'Dairy & Eggs',
            imgSrc: '/images/department_images/dairy_eggs.jpg',
        },
        {
            iconSrc: '/images/department_icons/dried_vegetable.svg',
            name: 'Dried Vegetables',
            imgSrc: '/images/department_images/dried_vegetable.jpg',
        },
        {
            iconSrc: '/images/department_icons/frozen.svg',
            name: 'Frozen',
            imgSrc: '/images/department_images/frozen.jpeg',
        },
        {
            iconSrc: '/images/department_icons/grain.svg',
            name: 'Grain',
            imgSrc: '/images/department_images/grain.jpg',
        },
        {
            iconSrc: '/images/department_icons/housewares.svg',
            name: 'Housewares',
            imgSrc: '/images/department_images/housewares.jpeg',
        },
        {
            iconSrc: '/images/department_icons/meat_seafood.svg',
            name: 'Meat & Seafood',
            imgSrc: '/images/department_images/meat_seafood.png',
        },
        {
            iconSrc: '/images/department_icons/noodle.svg',
            name: 'Noodle',
            imgSrc: '/images/department_images/noodle.jpg',
        },
        {
            iconSrc: '/images/department_icons/produce.svg',
            name: 'Produce',
            imgSrc: '/images/department_images/produce.png',
        },
        {
            iconSrc: '/images/department_icons/refrigerated.svg',
            name: 'Refrigerated',
            imgSrc: '/images/department_images/refrigerated.jpeg',
        },
        {
            iconSrc: '/images/department_icons/sauce_paste.svg',
            name: 'Sauce & Paste',
            imgSrc: '/images/department_images/sauce_paste.jpg',
        },
        {
            iconSrc: '/images/department_icons/seasoning_spices.svg',
            name: 'Seasoning & Spices',
            imgSrc: '/images/department_images/seasoning_spices.jpg',
        },
        {
            iconSrc: '/images/department_icons/seaweed.svg',
            name: 'Seaweed',
            imgSrc: '/images/department_images/seaweed.jpg',
        },
        {
            iconSrc: '/images/department_icons/snack_candy.svg',
            name: 'Snack & Candy',
            imgSrc: '/images/department_images/snack_candy.jpeg',
        },
        {
            iconSrc: '/images/department_icons/tea_coffee_breakfast.svg',
            name: 'Tea & Coffee & Breakfast',
            imgSrc: '/images/department_images/tea_coffee_breakfast.jpg',
        },
    ];

    arrayOfDepartments.unshift({
        name: "Today's Deals",
        imgSrc: '/images/department_images/today_deals.png',
    });

    return (
        <>
            <Box sx={{ mt: '5rem', bgcolor: 'backGround.main', height: '100rem' }}>
                <TopNavBar />
                <BottomNavBar />

                {/* Main Content Area */}
                <Container sx={{ mt: '1rem' }} maxWidth="xl">
                    {/* Coupon Banner */}
                    <Box
                        sx={{
                            backgroundImage: 'url(/images/discountBanner.jpg)',
                            minHeight: '12.5rem',
                            overflow: 'hidden',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            p: '1rem',
                            mb: '1rem',
                            borderRadius: '.5rem',
                        }}
                        maxWidth="xl"
                    />
                    {/* List of Department Buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        {arrayOfDepartments.map((department) => (
                            <DepartmentButton
                                key={department.name}
                                imgSrc={department.imgSrc}
                                name={department.name}
                            />
                        ))}
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Index;
