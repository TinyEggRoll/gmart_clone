import * as React from 'react';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { FiSliders } from 'react-icons/fi';
import TopNavBar from '../../../../components/TopNavBar';
import BottomNavBar from '../../../../components/BottomNavBar';
import DepartmentSection from '../../../../components/DepartmentSection';
import FilterButton from '../../../../components/FilterButton';
import Footer from '../../../../components/Footer';
import SingleProduct from '../../../../components/SingleProduct';

const Category = () => {
    const router = useRouter();
    const arrayOfDepartments = [
        {
            iconSrc: '/images/department_icons/alcohol.svg',
            name: 'Alcohol',
            imgSrc: '/images/department_images/alcohol.png',
            categories: ['Sake & Soju', 'Beer', 'Wine'],
        },
        {
            iconSrc: '/images/department_icons/beverage.svg',
            name: 'Beverage',
            imgSrc: '/images/department_images/beverage.jpeg',
            categories: ['Soft Drink', 'Soy Milk', 'Water', 'Health Drink'],
        },
        {
            iconSrc: '/images/department_icons/bread_bakery.svg',
            name: 'Bread & Bakery',
            imgSrc: '/images/department_images/bread_bakery.jpeg',
            categories: [
                'Bread',
                'Tortilla & Tostada',
                'Peanut Butter & Jelly',
                'Dessert',
                'Baking',
            ],
        },
        {
            iconSrc: '/images/department_icons/canned_products.svg',
            name: 'Canned Products',
            imgSrc: '/images/department_images/canned_products.jpeg',
            categories: [
                'Coconut & Condensed Milk',
                'Fish & Meat',
                'Bean',
                'Pickled',
                'Vegetable',
                'Fruits',
                'Soup',
                'Sauce',
            ],
        },
        {
            iconSrc: '/images/department_icons/cooking_wine_oil_vinegar.svg',
            name: 'Cooking Wine & Oil & Vinegar',
            imgSrc: '/images/department_images/cooking_wine_oil_vinegar.jpg',
            categories: ['Oil', 'Vinegar', 'Cooking Wine', 'Cooking Syrup'],
        },
        {
            iconSrc: '/images/department_icons/dairy_eggs.svg',
            name: 'Dairy & Eggs',
            imgSrc: '/images/department_images/dairy_eggs.jpg',
            categories: ['Milk', 'Egg', 'Cheese', 'Butter & Margarine', 'Yogurt', 'Sour Cream'],
        },
        {
            iconSrc: '/images/department_icons/dried_vegetable.svg',
            name: 'Dried Vegetables',
            imgSrc: '/images/department_images/dried_vegetable.jpg',
            categories: ['Vegetable', 'Health Herbs', 'Fruits'],
        },
        {
            iconSrc: '/images/department_icons/frozen.svg',
            name: 'Frozen',
            imgSrc: '/images/department_images/frozen.jpeg',
            categories: [
                'Dumpling & Spring Roll',
                'Dumpling Wrapper',
                'Steamed Bun',
                'Ice Cream',
                'Mochi',
                'Natto',
                'Imitation Crab Meat',
                'Fish Cake',
                'Sausage',
                'Fish &  Meat Ball',
                'Noodle',
                'Instant',
                'Asian Vegetable & Fruits',
                'Frozen Drinks',
                'Indian',
                'European',
                'Hispanic',
                'Vegan',
                'Misc',
            ],
        },
        {
            iconSrc: '/images/department_icons/grain.svg',
            name: 'Grain',
            imgSrc: '/images/department_images/grain.jpg',
            categories: [
                'Rice & Grain',
                'Bulk Rice',
                'Cooked Rice',
                'Flour',
                'Bean',
                'Tapioca Pearl',
                'Misc',
            ],
        },
        {
            iconSrc: '/images/department_icons/housewares.svg',
            name: 'Housewares',
            imgSrc: '/images/department_images/housewares.jpeg',
            categories: [
                'Household Essentials',
                'Kitchen Appliances',
                'Cookware',
                'Tableware',
                'Utensils',
                'Food Storage',
            ],
        },
        {
            iconSrc: '/images/department_icons/meat_seafood.svg',
            name: 'Meat & Seafood',
            imgSrc: '/images/department_images/meat_seafood.png',
            categories: [
                'Beef',
                'Chicken',
                'Pork',
                'Turkey',
                'Goat & Lamb',
                'Meat Misc',
                'Frozen Seafood',
                'Dried Seafood',
                'Seafood Misc',
            ],
        },
        {
            iconSrc: '/images/department_icons/noodle.svg',
            name: 'Noodle',
            imgSrc: '/images/department_images/noodle.jpg',
            categories: ['Ramen', 'Ramen Cup', 'Dried Noodle', 'Rice Paper', 'Pasta'],
        },
        {
            iconSrc: '/images/department_icons/produce.svg',
            name: 'Produce',
            imgSrc: '/images/department_images/produce.png',
            categories: [
                'Fresh Vegetable',
                'Fresh Herbs',
                'Fresh Fruits',
                'Box Vegetable & Fruits',
                'Packaged Vegetable & Fruits',
                'Packaged Nuts & Candy',
            ],
        },
        {
            iconSrc: '/images/department_icons/refrigerated.svg',
            name: 'Refrigerated',
            imgSrc: '/images/department_images/refrigerated.jpeg',
            categories: [
                'Fresh noodle',
                'Kimchi & Side Dish',
                'Rice Cake',
                'Tofu',
                'Pickled',
                'Paste',
                'Instant Noodle',
                'Soup & Stew',
                'Sausage & Meats',
                'Misc',
                'Juice & Beverage',
            ],
        },
        {
            iconSrc: '/images/department_icons/sauce_paste.svg',
            name: 'Sauce & Paste',
            imgSrc: '/images/department_images/sauce_paste.jpg',
            categories: [
                'Soy Sauce',
                'Paste',
                'Fish Sauce',
                'Dipping Sauce',
                'Asian BBQ Sauce',
                'Hot Sauce',
                'Marinade Sauce',
                'Noodle Sauce',
                'Condiments',
                'Hot Pot Soup Base',
                'Sauce Misc',
            ],
        },
        {
            iconSrc: '/images/department_icons/seasoning_spices.svg',
            name: 'Seasoning & Spices',
            imgSrc: '/images/department_images/seasoning_spices.jpg',
            categories: [
                'Salt & Sugar',
                'Seasoning',
                'Spices',
                'Wasabi & Mustard',
                'Curry',
                'Soup Base',
                'Broth',
            ],
        },
        {
            iconSrc: '/images/department_icons/seaweed.svg',
            name: 'Seaweed',
            imgSrc: '/images/department_images/seaweed.jpg',
            categories: ['Seasoned Laver', 'Dried Seaweed', 'Kelp'],
        },
        {
            iconSrc: '/images/department_icons/snack_candy.svg',
            name: 'Snack & Candy',
            imgSrc: '/images/department_images/snack_candy.jpeg',
            categories: ['Chips', 'Cookies', 'Snack', 'Candy & Gum', 'Nuts'],
        },
        {
            iconSrc: '/images/department_icons/tea_coffee_breakfast.svg',
            name: 'Tea & Coffee & Breakfast',
            imgSrc: '/images/department_images/tea_coffee_breakfast.jpg',
            categories: ['Tea', 'Coffee & Mix', 'Honey', 'Cereal'],
        },
    ];

    let temp;

    if (router.query.department !== 'today_deals') {
        temp = arrayOfDepartments.filter((obj) => {
            return (
                obj.name.replace(/&/g, '').replace(/ +/g, '_').toLowerCase() ===
                router.query.department
            );
        });
    }

    return (
        <>
            <Box sx={{ mt: '5rem', bgcolor: 'backGround.main', minHeight: '100vh' }}>
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

                    {/* Right Side of Main Screen | Categories | Sort & Filter | List of Items */}
                    <Box sx={{ width: '80%' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                borderBottom: 'solid 1px rgba(196, 196, 196, 0.5) ',
                                pb: '2rem',
                            }}>
                            {router.query.department !== 'today_deals' && (
                                <>
                                    <NextLink href={`/department/${router.query.department}`}>
                                        <Chip
                                            sx={{
                                                mr: '1rem',
                                                borderRadius: '.625rem',
                                                p: '1rem .3125rem',
                                                '&.MuiChip-clickable:hover': {
                                                    color: 'textWhite.main',
                                                    bgcolor: 'primary.main',
                                                },
                                            }}
                                            label="All"
                                            clickable
                                            variant="outlined"
                                        />
                                    </NextLink>
                                    {temp[0].categories.map((category) => (
                                        <FilterButton key={category} filterName={category} />
                                    ))}
                                </>
                            )}
                        </Box>
                        {/* Sort And Filter Bar */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: '1.7rem',
                                pr: '0rem',
                            }}>
                            <Button
                                sx={{
                                    '.MuiButton-endIcon': {
                                        ml: '1.5rem',
                                    },
                                }}
                                variant="string"
                                endIcon={<FiSliders sx={{ ml: '1rem' }} />}>
                                Sort And Filter
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <SingleProduct
                                pic="url(/images/products/neoguri.jpg)"
                                price={4.99}
                                productID={101}
                                quantity={1}
                                title="Neoguri"
                                unit="5 x 3.59 oz"
                            />
                            <SingleProduct
                                pic="url(/images/products/shin.jpg)"
                                price={5.99}
                                productID={102}
                                quantity={1}
                                title="Something2"
                                unit="5 x 3.59 oz"
                            />
                            <SingleProduct
                                pic="url(/images/products/shinblack.jpg)"
                                price={8.99}
                                productID={103}
                                quantity={1}
                                title="Something3"
                                unit="5 x 3.59 oz"
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </>
    );
};

export default Category;
