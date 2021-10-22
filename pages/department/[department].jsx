import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import TopNavBar from '../../components/TopNavBar';
import BottomNavBar from '../../components/BottomNavBar';
import DepartmentSection from '../../components/DepartmentSection';
import FilterButton from '../../components/FilterButton';
import Footer from '../../components/Footer';

const Department = () => {
    const router = useRouter();

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
            categories: ['All', 'Seasoned Laver', 'Dried Seaweed', 'Kelp'],
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

    const temp = arrayOfDepartments.filter((obj) => {
        return obj.name === 'Seaweed';
    });

    return (
        <>
            <Box sx={{ mt: '5rem', bgcolor: 'backGround.main', height: '100rem' }}>
                <TopNavBar />
                <BottomNavBar />

                {/* Main Content Area */}
                <Container
                    sx={{
                        display: 'flex',
                        bgcolor: 'backGround.main',
                        height: '2000px',
                        pt: '1.875rem',
                    }}
                    maxWidth="xl">
                    {/* Left Side of Main Screen | Departments List */}
                    <Box
                        sx={{
                            width: '20%',
                            mr: '1rem',
                            maxHeight: '100vh',
                            position: 'sticky',
                            top: '6rem',
                        }}>
                        <Typography sx={{ fontWeight: '500', mb: '1rem' }} variant="h4">
                            Departments
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxHeight: '90%',
                                overflow: 'auto',
                                '&::-webkit-scrollbar': {
                                    width: 5,
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#c4c4c4',
                                },
                            }}>
                            {arrayOfDepartments.map((department) => (
                                <DepartmentSection
                                    key={department.name}
                                    iconSrc={department.iconSrc}
                                    name={department.name}
                                />
                            ))}
                        </Box>
                    </Box>

                    {/* Right Side of Main Screen | Categories */}
                    <Box sx={{ width: '80%' }}>
                        <Box
                            sx={{
                                display: 'flex',
                            }}>
                            {router.query.department === 'seaweed' ? (
                                <>
                                    {temp[0].categories.map((category) => (
                                        <FilterButton key={category} filterName={category} />
                                    ))}
                                </>
                            ) : (
                                <>
                                    <FilterButton filterName="All" />
                                    <FilterButton filterName="Category2" />
                                    <FilterButton filterName="Category3" />
                                    <FilterButton filterName="Category4" />
                                </>
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </>
    );
};

export default Department;
