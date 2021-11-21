import * as React from 'react';
import { Box, Container } from '@mui/material';

import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import TopNavBar from '../components/TopNavBar';
import BottomNavBar from '../components/BottomNavBar';
import DepartmentButton from '../components/DepartmentButton';

const Index = () => {
    const { arrayOfDepartments } = useSelector((state) => state.departments);

    return (
        <>
            <Box sx={{ mt: '5rem', bgcolor: 'backGround.main' }}>
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
