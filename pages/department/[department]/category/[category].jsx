import * as React from 'react';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { FiSliders } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import TopNavBar from '../../../../components/TopNavBar';
import BottomNavBar from '../../../../components/BottomNavBar';
import DepartmentSection from '../../../../components/DepartmentSection';
import FilterButton from '../../../../components/FilterButton';
import Footer from '../../../../components/Footer';
import SingleProduct from '../../../../components/SingleProduct';

const Category = () => {
    const router = useRouter();
    const { arrayOfDepartments, arrayOfProducts } = useSelector((state) => state.departments);

    // Filters each department in the array by removing ampersand symbols, replacing spaces with underscores, and removing uppercase characters
    // Then try to match this updated department name with the URL to return the index in the array.

    const departmentIndex = arrayOfDepartments.findIndex(
        (department) =>
            department.name.replace(/&/g, '').replace(/ +/g, '_').toLowerCase() ===
            router.query.department
    );

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
                        minHeight: '100vh',
                        pt: '1.875rem',
                        position: 'relative',
                    }}
                    maxWidth="xl">
                    {/* Left Side of Main Screen | Departments List */}
                    <Box
                        sx={{
                            width: '20%',
                            mr: '1rem',
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
                            {/* Skips the Today's Deals department in array */}
                            {arrayOfDepartments.map((department, index) => {
                                if (index !== 0) {
                                    return (
                                        <DepartmentSection
                                            key={department.name}
                                            iconSrc={department.iconSrc}
                                            name={department.name}
                                        />
                                    );
                                }
                            })}
                        </Box>
                    </Box>

                    {/* Right Side of Main Screen | Categories | Sort & Filter | List of Items */}
                    <Box sx={{ width: '80%' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                borderBottom: 'solid 1px rgba(196, 196, 196, 0.5) ',
                                pb: '.625rem',
                                flexWrap: 'wrap',
                            }}>
                            {departmentIndex !== -1 && (
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
                                    {arrayOfDepartments[departmentIndex].categories.map(
                                        (category) => (
                                            <FilterButton key={category} filterName={category} />
                                        )
                                    )}
                                </>
                            )}
                        </Box>
                        {/* Sort And Filter Bar */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: '1.38rem',
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
                            {arrayOfProducts.map((product) => (
                                <SingleProduct
                                    key={product.productID}
                                    pic={product.pic}
                                    price={product.price}
                                    productID={product.productID}
                                    quantity={product.quantity}
                                    title={product.title}
                                    unit={product.unit}
                                />
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </>
    );
};

export default Category;
