import * as React from 'react';
import { Box, Chip, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useSelector } from 'react-redux';
import TopNavBar from '../../components/TopNavBar';
import BottomNavBar from '../../components/BottomNavBar';
import DepartmentSection from '../../components/DepartmentSection';
import FilterButton from '../../components/FilterButton';
import Footer from '../../components/Footer';
import SingleProduct from '../../components/SingleProduct';

const Department = () => {
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
                    }}
                    maxWidth="xl">
                    {/* Left Side of Main Screen | Departments List */}
                    <Box
                        sx={{
                            width: '20%',
                            mr: '1rem',
                            maxHeight: '100%',
                            position: 'sticky',
                            top: '6rem',
                            alignSelf: 'flex-start',
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
                                return null;
                            })}
                        </Box>
                    </Box>

                    {/* Right Side of Main Screen | Categories | List of Items */}
                    <Box sx={{ width: '80%' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}>
                            {/* Display this if department is today's deals */}
                            {router.query.department === 'todays_deals' &&
                                departmentIndex === -1 && (
                                    <Box sx={{ m: 'auto' }}>
                                        There Are No Sales Today. Please Visit Another Department!
                                    </Box>
                                )}

                            {/* Display this if department is valid */}
                            {departmentIndex !== -1 && (
                                <>
                                    <NextLink href={`/department/${router.query.department}`}>
                                        <Chip
                                            sx={{
                                                mr: '1rem',
                                                borderRadius: '.625rem',
                                                color: 'textWhite.main',
                                                bgcolor: 'primary.main',
                                                p: '1rem .3125rem',
                                                ':hover': {
                                                    color: 'textWhite.main',
                                                    bgcolor: 'primary.main',
                                                },
                                            }}
                                            label="All"
                                            clickable
                                        />
                                    </NextLink>
                                    {arrayOfDepartments[departmentIndex].categories.map(
                                        (category) => (
                                            <FilterButton key={category} filterName={category} />
                                        )
                                    )}
                                </>
                            )}

                            {/* Display this if department is invalid */}
                            {router.query.department !== 'todays_deals' &&
                                departmentIndex === -1 && (
                                    <Box sx={{ m: 'auto' }}>
                                        This Department Does Not Exist. Please Visit Another
                                        Department!
                                    </Box>
                                )}
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

export default Department;
